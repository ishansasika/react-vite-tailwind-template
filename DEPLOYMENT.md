# Deployment Guide - GitHub Pages

This guide will help you deploy your React Vite app to GitHub Pages for free.

## Prerequisites

1. A GitHub account
2. Git installed on your machine
3. Your project pushed to a GitHub repository

## Automatic Deployment (Recommended)

The repository is already configured for automatic deployment using GitHub Actions. Follow these steps:

### Step 1: Push to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. Save the settings

### Step 3: Deploy

The deployment will happen automatically when you push to the `main` branch. The GitHub Action workflow will:
- Build your project
- Deploy to GitHub Pages

You can monitor the deployment:
1. Go to the **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow

Once complete, your site will be live at:
```
https://YOUR_USERNAME.github.io/your-repo-name/
```

## Important Configuration

### Base Path
The `vite.config.ts` needs to be configured with your repository name:
```typescript
base: '/your-repo-name/'
```

**IMPORTANT**: Replace `your-repo-name` with your actual GitHub repository name. The base path must match your GitHub repository name exactly (case-sensitive).

### Custom Domain (Optional)

To use a custom domain:

1. Add a `public/CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. Update `vite.config.ts`:
   ```typescript
   base: '/'  // Change to root for custom domain
   ```

3. Configure DNS:
   - Add a CNAME record pointing to: `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs

4. In GitHub Settings → Pages, add your custom domain

## Manual Deployment (Alternative)

If you prefer manual deployment:

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Add Deploy Scripts

Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

This will build and deploy to the `gh-pages` branch.

### Step 4: Configure GitHub Pages

1. Go to Settings → Pages
2. Source: Select **Deploy from a branch**
3. Branch: Select **gh-pages** and **/ (root)**
4. Save

## Updating Your Site

### With GitHub Actions (Automatic)
Simply push to main:
```bash
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and redeploy.

### With Manual Deployment
Run:
```bash
npm run deploy
```

## Troubleshooting

### Blank Page After Deployment
- Check that `base` in `vite.config.ts` matches your repository name
- Ensure the repository name in the base path has correct capitalization

### 404 Errors on Routes
GitHub Pages doesn't handle client-side routing by default. Add a `404.html` in `public/` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
</html>
```

Then add this to `index.html` in the `<script>` tag:
```javascript
(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();
```

### Build Fails
- Check Node version (requires Node 16+)
- Run `npm install` to ensure all dependencies are installed
- Check the Actions tab for detailed error logs

## Environment Variables

For environment-specific variables:

1. Create `.env.production`:
   ```
   VITE_API_URL=https://api.production.com
   ```

2. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. For GitHub Actions, add secrets in Settings → Secrets and variables → Actions

## Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
