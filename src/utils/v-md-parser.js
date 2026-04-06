import Lang from '@/utils/lang';

export class VMdParser {
  constructor() {
    this.lang = new Lang();
    this.markdownExtenders = [];
  }

  defaultMarkdownLoader(text) {
    return text;
  }

  use(optionsOrInstall, opt) {
    if (typeof optionsOrInstall === 'function') {
      optionsOrInstall(this, opt);
    } else {
      optionsOrInstall.install(this, opt);
    }

    return this;
  }

  theme(themeConfig) {
    this.themeConfig = themeConfig;

    const { markdownParser } = this.themeConfig || {};

    if (!markdownParser) return;

    this.markdownExtenders.forEach((extender) => {
      extender(markdownParser);
    });
  }

  extendMarkdown(extender) {
    if (typeof extender !== 'function') return;

    this.markdownExtenders.push(extender);

    const { markdownParser } = this.themeConfig || {};

    if (!markdownParser) return;

    extender(markdownParser);
  }

  parse(text) {
    const { markdownParser } = this.themeConfig;
    const markdownLoader =
      markdownParser?.render?.bind(markdownParser) || this.defaultMarkdownLoader;

    if (typeof markdownLoader !== 'function' || markdownLoader === this.defaultMarkdownLoader) {
      console.error('Please configure your markdown parser');
    }

    return markdownLoader(text);
  }
}
