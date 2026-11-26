# 巴蜀辣韵 · 川味火锅底料品牌站

纯静态站点，无需后端与构建工具。双击 `index.html` 即可本地查看，上传到 GitHub Pages 就是官网。

## 页面

| 文件 | 页面 | 内容 |
|---|---|---|
| `index.html` | 首页 | 首屏主张、四件稳定出品的事、六款代表作预览、出锅实拍、厂区实拍视频、联系方式与合作方式 |
| `work.html` | 产品 | 分 5 组共 24 款，每款配实物图与味型说明（不含规格参数） |

全站只保留这两页，导航就是：首页 / 产品；工厂视频与联系信息放在首页最下方（锚点 `#contact`），产品页的「拿样试味」按钮跳到 `index.html#contact`。原来的 `life.html`、`about.html`、`contact.html` 已移到 `_archive/` 备份，不参与发布。

## 产品线（24 款）

1. 牛油锅底 6 款：经典、特辣、轻辣、久煮不浑汤、串串香、牛油底料块
2. 清汤锅底 4 款：番茄、菌汤、金汤、番茄菌汤双拼
3. 鱼蛙火锅 4 款：麻辣鱼片、金汤鱼片、酸菜鱼、牛蛙底料
4. 其它产品 4 款：青花椒烤鱼料、麻辣香锅料、干锅小炒料、鲜毛肚（配套食材）
5. 风味酱 6 款：XO 酱、菌王酱、牛肉酱、沙茶酱、香辣酱、蒜蓉酱

统一卖点：**发酵工艺 · 久煮不浑汤 · 辣而不烧心**。首页四件事、产品页页头、首页底部的厂区段落都落在这一点上。

产品页不列净含量、装箱和配比数字，报价与参数走线下沟通。

## 素材来源

产品图从这 6 个目录筛选后，重新裁切压缩成 `assets/p01.jpg … p24.jpg`：

- `部分牛油锅底` → p01–p06
- `部分清汤` → p10（番茄菌汤双拼），p07 番茄沿用旧素材，p08/p09 用旧图
- `部分鱼蛙火锅` → p11–p14
- `部分其它产品展示` → p15–p19
- `部分原材料展示` → `raw-chili.jpg`、`raw-pepper-red.jpg`、`raw-pepper-green.jpg`
- `食材` → `food-beef.jpg`、`food-beef-cube.jpg`、`food-rumen.jpg`；另有 `show-1.jpg`（牛肉卷，首页图集）
- `工厂视频.mp4` → `assets/factory-tour.mp4`（720×406，H.264 Main，44 秒，2.2MB，已做 faststart）+ 封面 `factory-poster.jpg`

源视频是 HEVC 编码，浏览器兼容性差，必须转 H.264：

```
ffmpeg -i 工厂视频.mp4 -vf scale=720:404 -c:v libx264 -preset slow -crf 29 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 56k -ac 1 assets/factory-tour.mp4
```

## 目录

```
index.html  work.html
assets/     style.css  main.js  p01…p24.jpg  show-1…6.jpg  bg-*.jpg  food-*.jpg  raw-*.jpg
            factory-tour.mp4  factory-poster.jpg
.nojekyll   README.md
```

`.nojekyll` 不要删，它保证 `assets` 里的文件被原样发布。

## 改文字

文字都在 HTML 里，用记事本或 VS Code 打开对应页面直接改：

- 首页大标题：`index.html` 里 `hero-title` 那一段
- 产品卡片：`work.html` 里每个 `<article class="work">`，`<h3>` 是名字，`<p>` 是介绍，`<div class="meta">` 的两个 span 是分类标签
- 联系方式：`index.html` 底部 `id="contact"` 那一段，电话、微信（159 0823 5538 / 15908235538），地址「四川省成都市」

## 换图

1. 把新图放进 `assets/`，同名覆盖即可，例如 `assets/p01.jpg`
2. 要新增图位，在 `assets/style.css` 里按同类规则加一条
3. 推荐尺寸：横图 1200×750，竖图 900×1200，JPEG 质量 80，单张 300KB 以内

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



