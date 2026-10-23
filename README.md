# ML Studio 产品站

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

## 上线前必改两处

1. **仓库地址**：`assets/js/site.js` 顶部的 `REPO_URL`，填了它，页面上所有
   GitHub / Releases 链接会自动指向你的仓库。留空则维持占位地址。
2. **下载按钮**：指向 `REPO_URL/releases`。若走 GitHub Releases 发布安装包，
   把 `ML-Studio-Setup-x.y.z.exe` 传上去即可，无需改页面。

## 部署到 GitHub Pages

### 方式一：独立仓库 + 分支部署（推荐，零配置）

把 `website/` 的内容作为仓库根目录推送：

```bash
cd website
git init
git add .
git commit -m "ML Studio site"
git branch -M main
git remote add origin https://github.com/<你的账号>/ml-studio-site.git
git push -u origin main
```

然后仓库 **Settings → Pages → Source** 选 `Deploy from a branch`，
分支 `main`、目录 `/ (root)`，保存后等一两分钟，
地址是 `https://<你的账号>.github.io/ml-studio-site/`。

### 方式二：独立仓库 + Actions

若想走 Actions 流水线，在仓库里加 `.github/workflows/pages.yml`，
用 `actions/upload-pages-artifact` 上传整个目录再 `deploy-pages`。
静态站用不上构建，方式一更省事。

### 方式三：放在主仓库子目录

主仓库根目录不是站点，Pages 的 `Deploy from a branch` 只能选 `/` 或 `/docs`。
要么把 `website/` 改名为 `docs/`，要么用 Actions 指定 `path: website`。
两种都可行，但都不如方式一干净。

## 设计约束（改动时请守住）

- **对比度**：正文 16.2:1、次级文字 7.9:1、三级小字 4.8:1，均过 WCAG AA；
  三级色 `#686A78` 是按"最差背景"（`--bg-alt`）反推的下限，别再调浅。
- **可达性**：跳过导航链接、语义地标、`aria-expanded` 同步、键盘焦点环、
  `prefers-reduced-motion` 降级，均已就位。
- **CSP**：`index.html` 头部限制了同源资源，所以不要引入 CDN 字体或内联脚本——
  新增脚本请放 `assets/js/` 并在页面里用 `<script src>` 引入。
