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
git commit -m "Minor cosmetic changes"

# Push to main
echo -e "\nPushing to origin main..."
git push origin main

echo -e "\nDone! Check Netlify for the deployed site."
