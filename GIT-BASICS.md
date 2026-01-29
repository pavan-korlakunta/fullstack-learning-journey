# Git Basics - Complete Beginner's Guide 🎯

Git is a version control system that helps you track changes in your code. Think of it as a time machine for your projects!

## Table of Contents
1. [What is Git?](#what-is-git)
2. [Installation](#installation)
3. [Basic Commands](#basic-commands)
4. [Practice Exercises](#practice-exercises)
5. [Common Workflows](#common-workflows)

---

## What is Git?

**Git** is a tool that:
- Tracks changes in your files
- Lets you go back to previous versions
- Helps multiple people work on the same project
- Keeps your code safe and organized

**Key Concepts:**
- **Repository (repo)**: A folder where Git tracks your files
- **Commit**: A saved snapshot of your code at a point in time
- **Branch**: A separate line of development
- **Remote**: A copy of your repository on the internet (like GitHub)

---

## Installation

### Windows
1. Download Git from: https://git-scm.com/download/win
2. Run the installer (use default settings)
3. Open PowerShell or Command Prompt
4. Verify installation:
   ```bash
   git --version
   ```

### Mac
```bash
# Using Homebrew
brew install git

# Or download from: https://git-scm.com/download/mac
```

### Linux
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git       # CentOS/RHEL
```

---

## Basic Commands

### 1. Configuration (Do this first!)

Set your name and email (Git uses this to identify your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Check your configuration:
```bash
git config --list
```

### 2. Initialize a Repository

Create a new Git repository in your current folder:
```bash
git init
```

This creates a hidden `.git` folder that tracks your files.

### 3. Check Status

See what files have changed:
```bash
git status
```

This shows:
- Files that are new (untracked)
- Files that have been modified
- Files ready to be committed

### 4. Add Files to Staging

**Staging** means preparing files to be saved (committed).

Add a specific file:
```bash
git add filename.txt
```

Add all files in current directory:
```bash
git add .
```

Add all files in the entire project:
```bash
git add -A
```

### 5. Commit (Save Changes)

Create a snapshot of your changes:
```bash
git commit -m "Your message describing what changed"
```

**Good commit messages:**
- ✅ `git commit -m "Add login form"`
- ✅ `git commit -m "Fix button styling"`
- ❌ `git commit -m "changes"`
- ❌ `git commit -m "asdf"`

### 6. View History

See all your commits:
```bash
git log
```

More readable format:
```bash
git log --oneline
```

### 7. See Changes

View what changed in files:
```bash
git diff
```

See changes in a specific file:
```bash
git diff filename.txt
```

### 8. Create a Branch

Branches let you work on features without affecting the main code:

```bash
git branch feature-name
```

Switch to a branch:
```bash
git checkout feature-name
```

Create and switch in one command:
```bash
git checkout -b feature-name
```

See all branches:
```bash
git branch
```

### 9. Merge Branches

Combine changes from one branch into another:

```bash
# First, switch to the branch you want to merge INTO
git checkout main

# Then merge the other branch
git merge feature-name
```

### 10. Remote Repositories (GitHub)

**Add a remote repository:**
```bash
git remote add origin https://github.com/yourusername/your-repo.git
```

**Push your code to GitHub:**
```bash
git push -u origin main
```

**Pull changes from GitHub:**
```bash
git pull origin main
```

**Clone (download) a repository:**
```bash
git clone https://github.com/username/repo-name.git
```

---

## Practice Exercises

### Exercise 1: Your First Repository

1. Create a new folder:
   ```bash
   mkdir my-first-repo
   cd my-first-repo
   ```

2. Initialize Git:
   ```bash
   git init
   ```

3. Create a file:
   ```bash
   echo "# My First Project" > README.md
   ```

4. Check status:
   ```bash
   git status
   ```

5. Add the file:
   ```bash
   git add README.md
   ```

6. Commit:
   ```bash
   git commit -m "Add README file"
   ```

7. View history:
   ```bash
   git log
   ```

### Exercise 2: Making Changes

1. Edit `README.md` and add some text
2. Check what changed:
   ```bash
   git status
   git diff
   ```
3. Add and commit:
   ```bash
   git add README.md
   git commit -m "Update README with project description"
   ```

### Exercise 3: Working with Branches

1. Create a new branch:
   ```bash
   git checkout -b add-features
   ```

2. Create a new file:
   ```bash
   echo "Feature list" > features.txt
   ```

3. Add and commit:
   ```bash
   git add features.txt
   git commit -m "Add features list"
   ```

4. Switch back to main:
   ```bash
   git checkout main
   ```

5. Merge the branch:
   ```bash
   git merge add-features
   ```

---

## Common Workflows

### Daily Workflow

```bash
# 1. Check what changed
git status

# 2. Add your changes
git add .

# 3. Commit with a message
git commit -m "Describe your changes"

# 4. Push to GitHub (if using remote)
git push
```

### Starting Work on a New Feature

```bash
# 1. Create and switch to new branch
git checkout -b new-feature

# 2. Make your changes
# ... edit files ...

# 3. Commit changes
git add .
git commit -m "Add new feature"

# 4. Switch back to main
git checkout main

# 5. Merge feature
git merge new-feature
```

### Getting Latest Changes from GitHub

```bash
# Pull latest changes
git pull origin main
```

---

## Important Notes

### .gitignore File

Create a `.gitignore` file to tell Git which files to ignore:

```
# Example .gitignore
node_modules/
*.log
.env
.DS_Store
```

### Undoing Changes

**Unstage a file (before committing):**
```bash
git reset filename.txt
```

**Undo changes in a file (be careful!):**
```bash
git checkout -- filename.txt
```

**Undo last commit (keep changes):**
```bash
git reset --soft HEAD~1
```

---

## Quick Reference Cheat Sheet

| Command | What it does |
|---------|-------------|
| `git init` | Start tracking a folder |
| `git status` | See what changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes |
| `git log` | View commit history |
| `git branch` | List branches |
| `git checkout -b name` | Create new branch |
| `git merge branch` | Combine branches |
| `git push` | Upload to GitHub |
| `git pull` | Download from GitHub |
| `git clone url` | Download a repository |

---

## Next Steps

Once you're comfortable with these commands:

1. ✅ Practice all exercises above
2. ✅ Create a GitHub account
3. ✅ Push your first repository to GitHub
4. ✅ Try working with branches
5. ✅ Move to Phase 2: HTML & CSS!

---

## Need Help?

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com
- **Visual Git Guide**: https://learngitbranching.js.org

---

**Remember**: Practice makes perfect! Try these commands yourself and don't worry about making mistakes - that's how you learn! 🎓
