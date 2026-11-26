# 巴蜀底料 · 川味火锅底料品牌站

纯静态站点，无需后端与构建工具。双击 `index.html` 即可本地查看，上传到 GitHub Pages 就是官网。

## 页面

| 文件 | 页面 | 内容 |
|---|---|---|
| `index.html` | 首页 | 首屏主张、四件稳定出品的事、五条产品线导航、厂区实拍视频、联系方式与合作方式 |
| `work.html` | 产品 | 分 5 组共 22 款，每款配实物图与味型说明（不含规格参数） |

全站只保留这两页，导航就是：首页 / 产品；工厂视频与联系信息放在首页最下方（锚点 `#contact`），产品页的「拿样试味」按钮跳到 `index.html#contact`。原来的 `life.html`、`about.html`、`contact.html` 已移到 `_archive/` 备份，不参与发布。

## 产品线（22 款）

1. 牛油与底料 6 款：牛油火锅底料、牛油底料·清亮型、牛油底料·香辣型、清油火锅底料、鱼子状底料、小火锅底料
2. 清汤与金汤 3 款：番茄锅底、菌汤麻辣烫底料、金汤酸菜鱼底料
3. 鱼与特色 3 款：鱼火锅底料、串串香底料、干拌麻辣烫底料
4. 烤鱼与干锅 3 款：青花椒烤鱼料、香辣烤鱼料、干锅料
5. 原料与出品 7 款：干辣椒段、红花椒、青花椒、金瓜、鲜牛肉、鲜腰片、久煮不浑汤出品样

统一卖点：**发酵工艺 · 久煮不浑汤 · 辣而不烧心**。首页四件事、产品页页头、首页底部的厂区段落都落在这一点上。

产品页不列净含量、装箱和配比数字，报价与参数走线下沟通。首页不放产品图，只用文字品类导航跳转到产品页，全站 22 张产品图各用一次，不重复。

## 素材来源

产品图取自 `桌面/ll` 目录里的 22 张实拍（按文件名语义配款），统一裁成 3:2、1000×667、JPEG 质量 76，落到 `assets/n01.jpg … n22.jpg`（共约 2.5MB）。

| 图位 | 源文件 | 图位 | 源文件 |
|---|---|---|---|
| n01 | 牛油锅底 | n12 | 干拌麻辣烫 |
| n02 | 牛油锅底 (2) | n13 | 烤鱼 |
| n03 | 牛油锅 | n14 | 烤鱼 (2) |
| n04 | 清油底料 | n15 | 干锅 |
| n05 | 鱼子状底料 | n16 | 辣椒原材料 |
| n06 | 小火锅 | n17 | 红花椒原材料 |
| n07 | 番茄锅 | n18 | 青花椒 |
| n08 | 菌汤麻辣烫 | n19 | 金汤原材料金瓜 |
| n09 | 金汤酸菜鱼火锅 | n20 | 牛肉 |
| n10 | 鱼火锅 | n21 | 腰片 |
| n11 | 串串底料 | n22 | 久煮不浑汤展示 |

厂区视频 `assets/factory-tour.mp4`（720×406，H.264 Main，44 秒，2.2MB，已做 faststart）+ 封面 `factory-poster.jpg`。

源视频是 HEVC 编码，浏览器兼容性差，必须转 H.264：

```
ffmpeg -i 工厂视频.mp4 -vf scale=720:404 -c:v libx264 -preset slow -crf 29 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 56k -ac 1 assets/factory-tour.mp4
```

## 目录

```
index.html  work.html
assets/     style.css  main.js  n01…n22.jpg  factory-tour.mp4  factory-poster.jpg  bg-*.jpg
            旧图位 p01…p24.jpg、show-*.jpg、food-*.jpg、raw-*.jpg 已不被引用，可留可删
.nojekyll   README.md
preview/    预览-首页.jpg  预览-产品页.jpg
```

`.nojekyll` 不要删，它保证 `assets` 里的文件被原样发布。

## 手机适配

- 断点：1100（品类导航 5→3 列、四列产品 4→3 列）、900（联系双栏→单栏）、760（汉堡菜单、首屏单栏、产品卡单列）、560（产品网格单列）、400（品类导航单列）
- 汉堡菜单逻辑在 `assets/main.js`（`.nav-toggle` 点击切换 `.nav.open`），不需要额外脚本
- 视频控件在手机上不会再被字幕压住：`.video-block .cap` 已改成视频下方的一条信息栏

## 改文字

文字都在 HTML 里，用记事本或 VS Code 打开对应页面直接改：

- 首页大标题：`index.html` 里的 `<h1 class="reveal d1">`
- 产品卡片：`work.html` 里每个 `<article class="work">`，`<h3>` 是名字，`<p>` 是介绍，`<div class="meta">` 的两个 span 是分类标签
- 首页品类导航：`index.html` 的 `.cat-grid` 五张卡（编号、款数、简介、链接到 `work.html#g1`…`#g5`）
- 联系方式：`index.html` 底部 `id="contact"` 那一段，电话、微信（159 0823 5538 / 15908235538），地址「四川省成都市」

## 换图

1. 把新图放进 `assets/`，同名覆盖即可，例如 `assets/n05.jpg`
2. 要新增图位，在 `assets/style.css` 的「产品图位 n01 - n22」段按同样格式加一条 `.work .thumb.n23{background-image:url("n23.jpg"),var(--ph);}`，再在 `work.html` 加一张卡
3. 推荐尺寸：3:2 横图 1000×667，JPEG 质量 76，单张 150KB 左右

## 配色

`assets/style.css` 顶部 `:root` 里改：

```css
--gold: #c8923f;   /* 主色，暖金 */
--ink: #0b0705;    /* 底色，暗棕黑 */
--text: #f0e9e1;   /* 正文 */
```

## 上传到 GitHub Pages

```bash
git init
git add .
git commit -m "update site"
git branch -M main
git remote add origin https://github.com/hgfhgghjv/personal-site.git
git push -u origin main
```

仓库 Settings → Pages → Source 选 `main` / `(root)`，几十秒后访问
`https://hgfhgghjv.github.io/personal-site/`。

网页端上传注意：一次选太多文件（尤其带 mp4）容易整批失败，每批 ≤12 个文件、mp4 单独一批更稳。
