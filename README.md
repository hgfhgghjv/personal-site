# 个人主页 · 多页静态网站

商务稳重风格的五星级个人主页，纯静态（HTML + CSS + 少量原生 JS），可直接部署到 GitHub Pages。

## 页面结构

| 文件 | 页面 | 内容 |
| --- | --- | --- |
| `index.html` | 首页 | 首屏大字、个人定位、三个能力方向 |
| `about.html` | 关于 | 个人简介、出品照片位、经历时间线、能力条 |
| `work.html` | 出品 | 3 个案例卡片（含缩略图） |
| `life.html` | 日常 | 3 张出品图集 + 习惯说明 |
| `contact.html` | 联系 | 联系方式列表 + 留言表单（唤起邮件客户端） |
| `assets/style.css` | — | 全站样式（配色、排版、响应式） |
| `assets/main.js` | — | 导航折叠、滚动入场动效、能力条动画 |

## 背景图片怎么放

所有图片都放在 `assets/` 目录，**按下面的文件名命名，直接丢进去就自动生效**，不用改代码：

| 文件名 | 用在哪里 | 建议尺寸 |
| --- | --- | --- |
| `bg-home.jpg` | 首页整页背景 | 2000×1200，横向构图 |
| `bg-about.jpg` | 关于页背景 | 2000×1125 |
| `bg-work.jpg` | 出品页背景 | 2000×1125 |
| `bg-life.jpg` | 日常页背景 | 2000×1250 |
| `bg-contact.jpg` | 联系页背景 | 2000×1125 |
| `portrait.jpg` | 关于页左侧竖图 | 竖版 4:5，1200×1500 |
| `work-1.jpg` ~ `work-3.jpg` | 出品缩略图 | 16:10 横图，1200×750 |
| `life-1.jpg` ~ `life-3.jpg` | 日常图集 | 4:3，1200×850 |

说明：
- 图片没放之前，页面用深色渐变兜底，不会出现破图或空白块。
- 背景会自动叠加一层深色遮罩，保证文字始终清晰；原图偏亮也没关系。
- 想换背景图不换文件名，直接覆盖同名文件即可。
- 体积控制在单张 500KB 以内，页面加载会更快（可用 WebP 转 JPG 压缩）。

## 要替换的文案

搜这几个占位内容，整段替换成你自己的：

- `YOUR NAME` —— 姓名或品牌名（导航、页脚、大标题都有）
- `把复杂的事情，做成简单的结果` —— 首页一句话定位
- `hello@example.com` / `138 0000 0000` / `your_wechat_id` —— 联系方式（`contact.html` 与表单脚本里各有一处邮箱）
- 各页的段落文字、时间线、项目名、数字，都是示例，按实际情况改。

> 公开页面上的手机号和住址请谨慎填写，可以只留邮箱或微信。

## 本地预览

直接双击 `index.html` 就能看。想更接近线上环境，可以在本目录执行：

```bash
python -m http.server 8000
```

然后浏览器打开 `http://localhost:8000`。

## 部署到 GitHub Pages

### 方式一：网页上传（最简单，不用装 Git）

1. 在 GitHub 新建一个仓库，名字随意，比如 `my-site`，可见性选 **Public**（Private 仓库用 Pages 需要付费套餐）。
2. 进入仓库，点 `Add file` → `Upload files`，把这个文件夹里的**全部文件**拖进去（包括 `assets` 整个目录），提交。
3. 仓库 `Settings` → 左侧 `Pages` → `Build and deployment` 的 `Source` 选 **Deploy from a branch**，分支选 `main`，目录选 `/ (root)`，保存。
4. 等 1～2 分钟，访问 `https://<你的用户名>.github.io/my-site/` 即可。

### 方式二：命令行推送

在本目录执行：

```bash
git init
git add .
git commit -m "init personal site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

推送后再按上面第 3 步开启 Pages。

### 自定义域名（可选）

在仓库根目录新建 `CNAME` 文件，内容写你的域名（如 `www.example.com`），再到域名服务商处把 CNAME 记录指向 `<用户名>.github.io`。

## 注意

- 根目录已放 `.nojekyll`，避免 GitHub Pages 用 Jekyll 处理文件时忽略某些目录。
- 页面里的字体通过公共镜像加载，断网时自动回退到系统字体，布局不受影响。
- 留言表单是纯前端方案，依赖访客本机邮件客户端；想收集表单数据需要接第三方表单服务（如 Formspree）。
