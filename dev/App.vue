<template>
  <div class="demo-page">
    <div class="demo-header">
      <h2 class="demo-title">VMd 编辑器 Demo</h2>
      <label class="demo-theme-switch">
        主题：
        <select
          v-model="themeType"
          @change="handleThemeChange"
        >
          <option value="vuepress">vuepress</option>
          <option value="github">github</option>
        </select>
      </label>
    </div>

    <p class="demo-tip">emoji 已加入工具栏；点击 save 可导出 md 文件。</p>

    <v-md-editor
      :key="editorKey"
      v-model="text"
      height="500px"
      autofocus
      :left-toolbar="leftToolbar"
      :disabled-menus="[]"
      toc-nav-position-right
      @upload-image="handleUploadImage"
      @fullscreen-change="handleFullscreenChange"
      @save="handleSave"
      @copy-code-success="handleCopyCodeSuccess"
      ref="editor"
    />
  </div>
</template>

<script>
import text from './text';
import VMdEditor from '@/codemirror-editor';
import vuepressTheme from '@/theme/vuepress';
import githubTheme from '@/theme/github';
import Prism from 'prismjs';
import Hljs from 'highlight.js';

const LEFT_TOOLBAR =
  'undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | emoji save';

function applyVuepressTheme() {
  VMdEditor.use(vuepressTheme, {
    Prism,
    codeHighlightExtensionMap: {
      vue: 'markup',
    },
  });
}

function applyGithubTheme() {
  VMdEditor.use(githubTheme, {
    Hljs,
    codeHighlightExtensionMap: {
      vue: 'xml',
    },
  });
}

export default {
  data() {
    return {
      text,
      themeType: 'vuepress',
      editorKey: 0,
      leftToolbar: LEFT_TOOLBAR,
    };
  },
  created() {
    this.applyTheme();
  },
  methods: {
    applyTheme() {
      if (this.themeType === 'github') {
        applyGithubTheme();
      } else {
        applyVuepressTheme();
      }

      this.editorKey += 1;
    },
    handleThemeChange() {
      this.applyTheme();
    },
    handleFullscreenChange(v) {
      console.log(v);
    },
    handleUploadImage(e, insertImage, files) {
      console.log(files);

      insertImage({
        url: '111',
        desc: '111',
      });
    },
    handleSave(text) {
      const fileName = `v-md-editor-${this.createDateToken(new Date())}.md`;
      const blob = new Blob([text], {
        type: 'text/markdown;charset=utf-8',
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    },
    createDateToken(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hour = String(date.getHours()).padStart(2, '0');
      const minute = String(date.getMinutes()).padStart(2, '0');
      const second = String(date.getSeconds()).padStart(2, '0');

      return `${year}${month}${day}-${hour}${minute}${second}`;
    },
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
  },
};
</script>

<style lang="scss">
.demo-page {
  padding: 16px;
}

.demo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.demo-title {
  margin: 0 0 12px;
}

.demo-theme-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #374151;

  select {
    height: 30px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 0 8px;
    background: #fff;
  }
}

.demo-tip {
  margin: 0 0 12px;
  color: #6b7280;
  font-size: 13px;
}

.v-md-editor-preview {
  pre.v-md-mermaid {
    background: transparent;
    padding: 0;
  }

  pre.v-md-mermaid svg {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0;
    background-color: #ffffff !important;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 10px;
  }
}
</style>
