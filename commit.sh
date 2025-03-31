#!/bin/bash

# Function to generate conventional commit message
generate_commit_message() {
    local file="$1"
    local type=""
    local message=""

    # Determine commit type based on file path
    case "$file" in
        package-lock.json)
            type="chore(deps)"
            message="update package lock dependencies"
            ;;
        package.json)
            type="chore(deps)"
            message="update project dependencies"
            ;;
        .gitignore)
            type="chore"
            message="add gitignore configuration"
            ;;
        README.md)
            type="docs"
            message="add project documentation"
            ;;
        .env)
            type="chore"
            message="add environment variables"
            ;;
        eslint.config.mjs)
            type="config"
            message="add ESLint configuration"
            ;;
        next.config.mjs)
            type="config"
            message="add Next.js build configuration"
            ;;
        jsconfig.json)
            type="config"
            message="add JavaScript configuration"
            ;;
        postcss.config.mjs)
            type="config"
            message="add PostCSS configuration"
            ;;
        tailwind.config.mjs)
            type="config"
            message="add Tailwind CSS configuration"
            ;;
        middleware.ts)
            type="feat"
            message="add middleware functionality"
            ;;
        app/*)
            type="feat(app)"
            message="add app routes and pages"
            ;;
        components/*)
            type="feat(components)"
            message="add UI components"
            ;;
        context/*)
            type="feat(context)"
            message="add application context providers"
            ;;
        lib/*)
            type="feat(lib)"
            message="add utility functions and libraries"
            ;;
        models/*)
            type="feat(models)"
            message="add data models"
            ;;
        config/*)
            type="config"
            message="add configuration files"
            ;;
        assets/*)
            type="assets"
            message="add source assets"
            ;;
        public/*)
            type="assets"
            message="add public assets"
            ;;
        *)
            type="chore"
            message="add or update ${file##*/}"
            ;;
    esac

    echo "${type}: ${message}"
}

# Function to check if git repository
check_git_repo() {
    if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
        echo "Error: Not a git repository. Please initialize git first."
        exit 1
    fi
}

# Function to setup remote repository
setup_remote_repo() {
    # Check if origin remote already exists
    if ! git remote | grep -q "^origin$"; then
        echo "Setting up remote repository..."
        git remote add origin https://github.com/Entue250/ecommerce-platform.git
        echo "Remote repository setup complete!"
    else
        # Update the remote URL if it exists but is incorrect
        current_url=$(git remote get-url origin)
        if [ "$current_url" != "https://github.com/Entue250/ecommerce-platform.git" ]; then
            echo "Updating remote repository URL..."
            git remote set-url origin https://github.com/Entue250/ecommerce-platform.git
            echo "Remote repository URL updated!"
        else
            echo "Remote repository already correctly set up."
        fi
    fi
}

# Function to handle repository setup
handle_repository_setup() {
    # Rename master branch to main if needed
    current_branch=$(git branch --show-current)
    if [ "$current_branch" = "master" ]; then
        echo "Renaming master branch to main..."
        git branch -m master main
        echo "Branch renamed to main."
        current_branch="main"
    elif [ "$current_branch" != "main" ]; then
        # If we're not on main, create or switch to main branch
        if git show-ref --verify --quiet refs/heads/main; then
            # main branch exists, switch to it
            echo "Switching to main branch..."
            git checkout main
        else
            # main branch doesn't exist, create it
            echo "Creating main branch..."
            git checkout -b main
        fi
    fi

    # Check if there's already a remote branch
    if git ls-remote --heads origin main | grep -q main; then
        echo "Remote main branch exists."
        
        echo "Since you are setting up a new local repository for an existing GitHub project,"
        echo "you need to decide how to handle the diverging histories:"
        echo "1. Force push your current code (will OVERWRITE any existing code on GitHub)"
        echo "2. Pull remote changes first (will attempt to merge with your local code)"
        read -p "Enter your choice (1 or 2): " choice
        
        case $choice in
            1)
                echo "You chose to force push your local repository."
                ;;
            2)
                echo "Pulling remote changes before pushing..."
                
                # Try to pull, but this might fail if histories are unrelated
                if ! git pull origin main --allow-unrelated-histories; then
                    echo "Pull failed. The histories may be unrelated."
                    echo "1. Force push anyway (OVERWRITE remote)"
                    echo "2. Create a fresh clone and manually copy your files"
                    read -p "Enter your choice (1 or 2): " fallback_choice
                    
                    case $fallback_choice in
                        1)
                            echo "You chose to force push despite pull failure."
                            ;;
                        2)
                            echo "Please follow these steps manually:"
                            echo "1. git clone https://github.com/Entue250/ecommerce-platform.git temp-repo"
                            echo "2. Copy your files to temp-repo"
                            echo "3. cd temp-repo"
                            echo "4. git add ."
                            echo "5. git commit -m \"feat: add ecommerce project files\""
                            echo "6. git push"
                            exit 0
                            ;;
                        *)
                            echo "Invalid choice. Exiting."
                            exit 1
                            ;;
                    esac
                fi
                ;;
            *)
                echo "Invalid choice. Exiting."
                exit 1
                ;;
        esac
    fi
}

# Function to commit changes
commit_changes() {
    # Get all tracked modified files
    modified_files=$(git ls-files -m)
    
    # Get all untracked files
    untracked_files=$(git ls-files --others --exclude-standard)
    
    echo "Starting commit process..."

    # Process modified files
    if [ -n "$modified_files" ]; then
        echo "Processing modified files..."
        for file in $modified_files; do
            commit_message=$(generate_commit_message "$file")
            git add "$file"
            git commit -m "$commit_message"
            echo "Committed modified file: $file with message - $commit_message"
        done
    else
        echo "No modified files to commit."
    fi

    # Process untracked files
    if [ -n "$untracked_files" ]; then
        echo "Processing untracked files..."
        for file in $untracked_files; do
            commit_message=$(generate_commit_message "$file")
            git add "$file"
            git commit -m "$commit_message"
            echo "Committed untracked file: $file with message - $commit_message"
        done
    else
        echo "No untracked files to commit."
    fi
}

# Function to push changes to GitHub
push_to_github() {
    echo "Pushing to main branch on GitHub..."
    
    # Try normal push first
    if git push -u origin main; then
        echo "All changes have been pushed to main branch successfully!"
    else
        echo "Regular push failed."
        echo "This usually happens when the remote repository has changes that your local repository doesn't have."
        
        echo "Options:"
        echo "1. Force push (OVERWRITES remote repository content)"
        echo "2. Cancel (your commits will remain local only)"
        read -p "Enter your choice (1 or 2): " push_choice
        
        case $push_choice in
            1)
                echo "Force pushing to GitHub..."
                if git push -f -u origin main; then
                    echo "Force push successful! All remote content has been replaced with your local content."
                else
                    echo "Force push failed. You may need to check your GitHub credentials or repository permissions."
                fi
                ;;
            2)
                echo "Push canceled. Your changes remain committed locally but are not on GitHub."
                ;;
            *)
                echo "Invalid choice. Push canceled."
                ;;
        esac
    fi
}

# Function to handle initial commit for ecommerce project
handle_initial_commit() {
    # Check if this is a new repository with no commits
    if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
        echo "This appears to be a new repository with no commits."
        echo "Would you like to commit all files with a single initial commit? (y/n)"
        read -p "Enter your choice: " initial_choice
        
        case $initial_choice in
            [Yy]*)
                echo "Creating initial commit with all files..."
                git add .
                git commit -m "feat: initial commit of ecommerce platform"
                echo "Initial commit created successfully!"
                return 0  # Skip individual file commits
                ;;
            *)
                echo "Proceeding with individual file commits..."
                return 1  # Continue with individual file commits
                ;;
        esac
    fi
    return 1  # Continue with individual file commits by default
}

# Main function
main() {
    check_git_repo
    setup_remote_repo
    handle_repository_setup
    
    # Only proceed with individual commits if initial commit isn't created
    if ! handle_initial_commit; then
        commit_changes
    fi
    
    push_to_github
}

# Run the script
main