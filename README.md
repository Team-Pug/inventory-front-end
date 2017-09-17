## Go Team Pug Front End!

# Git Hub Procedure

When you are starting work on a new feature:

1. Open your terminal and check into the directory under the ```development``` branch.
2. Run ```git pull --rebase origin development```
3. a. If you are creating a feature branch, run ```git checkout -b <[your-initials]-[feature-name]>```
   b. If you are returning to an old branch that you have already pushed to origin, run ```git checkout <branch-name>``` then run ```git rebase development```

When you are ready to push your feature:

1. Commit all changes.
2. Run ```git push origin <branch-name>```
3. Submit a pull request to the Team Pug Git Hub ```development``` branch
