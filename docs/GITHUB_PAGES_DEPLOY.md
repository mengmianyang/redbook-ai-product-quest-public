# GitHub Pages部署说明

这个目录已经是纯静态网页，不需要安装依赖，也不需要构建命令。

## 本地打开

直接打开：

```powershell
start .\docs\index.html
```

也可以用本地服务器预览：

```powershell
python -m http.server 8765 --directory docs
```

然后访问：

```text
http://localhost:8765/
```

## 推荐部署方式

当前资料目录里有很多视频和原始课程文件，不建议全部推到GitHub。推荐只把 `docs/` 目录放进一个新的GitHub仓库。

1. 新建一个GitHub仓库，例如 `redbook-ai-product-quest`。
2. 把本地 `docs/` 目录提交到仓库。
3. 进入仓库 `Settings -> Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. `Branch` 选择 `main`，目录选择 `/docs`。
6. 保存后等待GitHub生成网址。

生成的网址通常是：

```text
https://你的用户名.github.io/redbook-ai-product-quest/
```

## 如果要从当前目录初始化仓库

确认你只想提交 `docs/` 目录后，可以执行：

```powershell
git init
git checkout -b main
git add docs
git commit -m "Add 21-day Xiaohongshu AI product quest site"
git remote add origin https://github.com/你的用户名/redbook-ai-product-quest.git
git push -u origin main
```

然后按上面的GitHub Pages设置发布。
