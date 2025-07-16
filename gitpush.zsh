#!/bin/bash
cd /Users/waynesheppard/Development/acme-marketing/bemorefree.com

# Show status
echo "Git Status:"
git status

# Add all changes
echo -e "\nAdding all changes..."
git add -A

# Commit
echo -e "\nCommitting changes..."
git commit -m "Transform site to Neutral Zone brand and philosophy

- Complete homepage redesign with non-directive messaging
- Add proper infrastructure: .env.example, updated .gitignore
- Configure GraphQL to use environment variables
- Create responsive BaseLayout with clean navigation
- Add About page explaining Neutral Zone approach
- Configure Tailwind with brand colors and typography
- Update README with comprehensive project info
- Create proper folder structure per PLANNING.md
- Update TASKS.md with completed items"

# Push to main
echo -e "\nPushing to origin main..."
git push origin main

echo -e "\nDone! Check Netlify for the deployed site."
