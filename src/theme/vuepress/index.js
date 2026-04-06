import parser from './parser';
import createTipPlugin from '@/plugins/tip/index';

// style
import '@/assets/css/theme/base.css';
import '@/assets/css/theme/vuepress-markdown.css';

// tip plugin style
import '@/plugins/tip/tip.css';

const install = function (VMdEditor, options) {
  const tipPlugin = createTipPlugin();

  VMdEditor.vMdParser.use(parser, options);
  VMdEditor.use(tipPlugin);
};

export default {
  install,
};
