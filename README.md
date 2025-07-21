# 提交 Pull Request (PR) 指南

欢迎贡献你的代码！以下是关于如何提交 Pull Request (PR) 的指南。通过遵循这些步骤，我们可以确保代码合并过程高效、清晰且一致。

## 目录
- [提交 Pull Request (PR) 指南](#提交-pull-request-pr-指南)
  - [目录](#目录)
  - [准备工作](#准备工作)
  - [提交 PR](#提交-pr)
  - [PR 检查与审核](#pr-检查与审核)
  - [常见问题](#常见问题)
    - [1. 我可以提交多个 PR 吗？](#1-我可以提交多个-pr-吗)
    - [2. 如何解决冲突？](#2-如何解决冲突)
    - [3.如何更新我的fork?](#3如何更新我的fork)
    - [4.BYD还真认真看啊](#4byd还真认真看啊)

## 准备工作

1. **Fork 项目**：
   - 点击 GitHub 仓库页面右上方的 `Fork` 按钮，将项目 fork 到你的个人账户。

2. **克隆到本地**：
   - 在你自己的仓库中，点击 "Code" 按钮，复制 URL。
   - 然后克隆到你的本地机器：
     ```bash
     git clone https://github.com/你的用户名/仓库名.git
     ```

3. **创建一个新的分支**：
   - 在进行任何修改之前，确保切换到一个新的分支：
     ```bash
     git checkout -b feature/your-feature-name
     ```
     这有助于避免直接在主分支上进行工作。

4. **安装依赖**：
   - 如果项目使用了某些依赖，记得在开始修改之前安装它们：
     ```bash
     pnpm install
     ```

## 提交 PR

1. **进行修改**：
   - 在本地进行你想要的修改。确保代码符合项目的代码风格和规范。
   - 修改文档、修复 bug、添加功能等内容，都可以提交 PR。

2. **本地测试**：
   - 在提交前，运行本地测试确保修改不会破坏任何功能：
     ```bash
     pnpm run dev
     ```

3. **提交更改**：
   - 在本地提交你修改的文件：
     ```bash
     git add .
     git commit -m "描述你做的修改"
     ```

4. **推送到远程仓库**：
   - 将你的更改推送到 GitHub 上：
     ```bash
     git push origin feature/your-feature-name
     ```

5. **创建 Pull Request**：
   - 登录到 GitHub，打开你 fork 的项目。
   - 你会看到一个 “Compare & Pull Request” 按钮，点击它。
   - 添加 PR 标题和描述，清楚地描述你所做的更改，并提交 PR。

## PR 检查与审核

1. **PR 审核**：
   - 提交 PR 后，项目维护者会审核你的代码。如果有任何问题或改进建议，他们会在 PR 下留言。
   - 请根据反馈修改你的代码，并推送到同一个分支，这样 PR 会自动更新。

2. **合并 PR**：
   - 一旦 PR 审核通过，项目维护者会将其合并到主分支。你会收到合并的通知。

3. **删除分支**：
   - 合并完成后，你可以删除本地和远程的分支：
     ```bash
     git branch -d feature/your-feature-name  # 删除本地分支
     git push origin --delete feature/your-feature-name  # 删除远程分支
     ```

## 常见问题

### 1. 我可以提交多个 PR 吗？

当然可以！你可以根据需要为每个功能、bug 修复等提交独立的 PR。每个 PR 应该包含一个明确的修改目的。

### 2. 如何解决冲突？

如果在 PR 审核时出现了合并冲突，GitHub 会提示你如何解决。你可以在本地合并最新的主分支，并解决冲突：
```bash
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main
```
然后解决冲突，并提交修改。

### 3.如何更新我的fork?
如果你 fork 的仓库有了新的更新，记得将这些更改同步到你的仓库：
```bash
git remote add upstream https://github.com/原仓库/仓库名.git
git fetch upstream
git checkout main
git merge upstream/main
```

### 4.BYD还真认真看啊
还真看啊