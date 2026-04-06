/* eslint-disable */

export default `# VMd Editor Demo

当前页面使用组件库中的 \\<v-md-editor /> 组件。

你可以在左侧编辑，右侧使用编辑器内置预览实时查看效果。

## 主题切换

- 页面顶部下拉框支持在 vuepress 与 github 主题之间切换。

## 基础能力

- **加粗**、*斜体*、~~删除线~~
- 有序/无序列表、表格、引用
- 代码高亮、行号、复制代码
- 目录导航、任务列表

## 任务列表示例

- [x] 接入编辑器组件
- [x] 接入 emoji 工具栏
- [x] 使用编辑器内置预览
- [x] 接入 save 导出 md
- [x] 接入主题切换
- [ ] 根据业务继续扩展工具栏

## Emoji

- 直接输入：:smile: :rocket: :tada:
- 也可以使用工具栏中的 emoji 菜单插入。

## 代码高亮与高亮行

\`\`\`js{2}
const lib = 'v-md-editor';
console.log('Current demo uses', lib);
\`\`\`

## 数学公式

行内公式：$E = mc^2$

$$
\\int_0^1 x^2\\,dx = \\frac{1}{3}
$$

## Mermaid

\`\`\`mermaid
flowchart LR
  A[Write Markdown] --> B[Edit in v-md-editor]
  B --> C[Built-in Preview]
  C --> D[Publish Document]
\`\`\`

## 导出 md

点击工具栏右侧的 save 按钮，将导出当前内容为 .md 文件。

> 你可以把这段内容替换为你的业务模板。
`;
