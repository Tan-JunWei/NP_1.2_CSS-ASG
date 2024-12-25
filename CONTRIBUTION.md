# Contributing

## Development
> [!IMPORTANT]
> Please regularly pull changes from the remote repository to your local repository to keep it up to date!!
> 
> Use either terminal or VS Code GUI

## Git Pull

### CLI Approach (Terminal)
- Navigate to correct directory then run:
```bash
git pull
```

### VS Code GUI Approach
-  Navigate to `Source Control` in VS Code
-  Click `Pull`
<div align="center">
  <img align="center" width="900" src="./admin_pics/VSCode_Pull.png" alt="Example" />
  <h4>Git pull in VS Code</h4>
</div>

## Committing

Try to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages, using the following prefixes:

> [!TIP]
>
>- **`feat`**: For new features or functionalities  
  _Example: Adding new capabilities or enhancing parts of the app_
>
>- **`fix`**: For bug fixes or resolving issues  
  _Example: Fixing something that wasn't working correctly_
>
>- **`refactor`**: For improving code without changing its behavior  
  _Example: Refactoring for better readability or performance (no new features or bug fixes)_
>
>- **`chore`**: For routine tasks or maintenance  
  _Example: Cleaning up files, updating dependencies, or improving documentation (like `README.md`)_


### Why Follow This Convention?

- Clarity: Each prefix gives a clear indication of the type of change made.
- Consistency: Helps everyone working on the project understand what each commit does, even without reading the full commit message.

### Commit messages examples
```bash
git commit -m "chore: Add new dependency (package-name)"
git commit -m "feat: Add new button component (component-name)"
git commit -m "fix: Resolve rendering bug in (component-name)"
```

### Commit messages in VS Code

1. Navigate to `Source Control` in VS Code
2. Type the commit message in the `Message` field
3. Click `Commit`
4. Click `Sync`

`Sync` in VS Code synchronizes your **local** repository with the **remote** repository, pushing your commits and pulling any changes from the remote.

<div align="center">
  <img align="center" width="900" src="./admin_pics/VSCode_Commit.png" alt="Example" />
  <h4>Git commit message in VS Code</h4>
</div>

<!-- 1. Ensure that you are on the `dev` branch when working on new changes. Pull the latest changes before working on new
   changes.
   ```bash
   git checkout -b dev
   ```
2. Make your changes
3. Stage your changes
   ```bash
   # Adding a specific file:
   git add (file-name)

    # Adding all files:
    git add .
   ```
4. Commit and push your changes
   ```bash
    git commit -m "chore: Add new dependency (package-name)"
    git push
    ```
5. Create a pull request on GitHub to merge your changes into the `main` branch. Ensure that all status checks pass AND
   that someone else has reviewed your changes before merging.

   Creating PR:

   ![image](https://github.com/Kairos-T/CSS/assets/80029462/2b358465-081d-4a45-a184-ac3c7ce4381c)

   Editing PR details:
   ![image](https://github.com/Kairos-T/CSS/assets/80029462/5e9c2a37-50ca-4cc6-bc63-e64f513d7a5a)

   Checks (Request review - or... let them know somewhere else)
   ![image](https://github.com/Kairos-T/CSS/assets/80029462/5a66fccf-3934-4e2f-80fd-9339222d6182) -->
