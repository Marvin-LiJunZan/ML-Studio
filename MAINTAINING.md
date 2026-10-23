# 站点维护说明

面向维护者。产品介绍见 [README.md](README.md)。

纯静态站点，无构建步骤、无外部依赖（字体用系统栈，图标为内联 SVG）。
与桌面端共用同一套设计令牌：Iris 色阶、语义色、8pt 间距。

```
index.html              单页
assets/css/site.css     样式（含明暗两套令牌）
assets/js/theme-boot.js 首帧前定主题，防闪白
assets/js/site.js       主题切换 / 移动端导航 / 滚动入场
assets/img/             截图与 favicon
.nojekyll               关掉 GitHub Pages 的 Jekyll 处理
```

## 本地预览

```bash
cd website
python -m http.server 8030
# 打开 http://127.0.0.1:8030
```

直接双击 `index.html` 也能看，但主题偏好在 `file://` 下可能受限，建议走本地服务。

## 仓库与链接

站点仓库同时充当项目的公开发布页，源码在另一个私有仓库。
所有仓库地址集中在 `assets/js/site.js` 顶部的 `REPO_URL`：

```js
var REPO_URL = "https://github.com/Marvin-LiJunZan/ML-Studio";
```

带 `data-repo` 属性的链接会自动同步为它，带 `download-link` 的额外指向 `/releases`。
`index.html` 里另外把地址写死了一份作静态兜底——**改仓库时两处都要改**，
否则 JS 未执行时会退回旧地址。

## 部署

采用「仓库根目录 + 分支部署」，零配置：

- Settings → Pages → Source 选 `Deploy from a branch`
- 分支 `main`、目录 `/ (root)`
- 地址 `https://marvin-lijunzan.github.io/ML-Studio/`

静态站用不上构建步骤，所以没有走 Actions 流水线，少一个环节就少一处故障点。
推送 `main` 后约 30–60 秒自动重建。

## 发布安装包

GitHub Releases 挂在同一个仓库上。安装包由私有仓库的
`Build Desktop` 工作流产出，构建完成后上传到这里的 Release，
页面上的「前往 Releases 下载」即可用。

## 设计约束（改动时请守住）

- **对比度**：正文 16.2:1、次级文字 7.9:1、三级小字 4.8:1，均过 WCAG AA；
  三级色 `#686A78` 是按"最差背景"（`--bg-alt`）反推的下限，别再调浅。
- **可达性**：跳过导航链接、语义地标、`aria-expanded` 同步、键盘焦点环、
  `prefers-reduced-motion` 降级，均已就位。
- **CSP**：`index.html` 头部限制了同源资源，所以不要引入 CDN 字体或内联脚本——
  新增脚本请放 `assets/js/` 并在页面里用 `<script src>` 引入。
