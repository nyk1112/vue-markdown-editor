<template>
  <div class="demo-page">
    <h2 class="demo-title">VMd 编辑器 Demo</h2>
    <v-md-editor
      v-model="text"
      height="500px"
      autofocus
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

export default {
  data() {
    return {
      text,
    };
  },
  methods: {
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
    handleSave(v, html) {
      console.log(v, html);
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

.demo-title {
  margin: 0 0 12px;
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
