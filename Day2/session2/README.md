#Web-playground

1. configure Your identity:
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

2. check settings:
git config --list

3. set default branch to main:
git config --global init.defaultBranch main

4. create gitignore file
git add .gitignore
git commit -m "Add .gitignore file to exclude temp/build files"

5. stage and commit changes
git add .                     
git commit -m "Organize day1–day4 sessions into repo"

6. Explore history
git log

7. compare changes
it check unstaged change = git diff
it check staged change= git diff  --staged

8. restore changes
   git restore filename.txt
   we want to restore All then use=  git restore .

This repository is for practising Git-basics.
 
 ## Commit Convention


I follow [Conventional commits] (https://www.conventionalcommits.org/) for commit messages.
