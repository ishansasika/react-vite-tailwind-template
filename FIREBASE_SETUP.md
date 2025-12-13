# Firebase Deployment Setup Guide

This guide will help you set up automatic deployment to Firebase Hosting using GitHub Actions.

## Prerequisites

- A GitHub repository
- A Firebase account

## Step-by-Step Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard
4. Once created, note your **Project ID** (shown in project settings)

### 2. Update Firebase Configuration

Update `.firebaserc` with your project ID:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

Also update the workflow file `.github/workflows/firebase-deploy.yml`:

```yaml
projectId: your-project-id  # Change this line
```

### 3. Generate Service Account Key

1. In Firebase Console, go to **Project Settings** (⚙️ icon)
2. Navigate to **Service Accounts** tab
3. Click **Generate New Private Key**
4. Click **Generate Key** in the confirmation dialog
5. A JSON file will download - **keep this secure!**

### 4. Add Secret to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Set:
   - **Name**: `FIREBASE_SERVICE_ACCOUNT`
   - **Value**: Paste the entire contents of the downloaded JSON file
5. Click **Add secret**

### 5. Enable Firebase Hosting

If you haven't initialized Firebase Hosting:

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize hosting (if needed)
firebase init hosting

# Select:
# - Use an existing project (select your project)
# - Public directory: dist
# - Configure as single-page app: Yes
# - Set up automatic builds with GitHub: No (we're using GitHub Actions)
```

### 6. Deploy

**Automatic Deployment:**
Just push to the main branch:

```bash
git add .
git commit -m "Setup Firebase deployment"
git push origin main
```

Watch the deployment in the **Actions** tab of your GitHub repository.

**Manual Deployment:**

```bash
npm run build
firebase deploy
```

## Configuration Files

### firebase.json
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

- `public: "dist"` - Vite builds to the `dist` folder
- `rewrites` - Enables client-side routing (SPA support)

### .firebaserc
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

## Your Live URLs

After deployment, your app will be available at:

- **Primary**: `https://your-project-id.web.app`
- **Alternative**: `https://your-project-id.firebaseapp.com`

## Troubleshooting

### Deployment fails with "Permission denied"
- Verify the `FIREBASE_SERVICE_ACCOUNT` secret is correctly set
- Ensure the JSON is complete and valid
- Check that the service account has the necessary permissions

### Build fails
- Check the Actions tab for detailed error logs
- Ensure all dependencies are in `package.json`
- Verify TypeScript compiles without errors locally: `npm run type-check`

### 404 on routes after deployment
- Ensure `firebase.json` has the rewrite rules (already configured)
- The rewrite to `/index.html` enables client-side routing

### Changes not reflecting
- Firebase Hosting caches content
- Try clearing your browser cache or use incognito mode
- Cache invalidation can take a few minutes

## Custom Domain (Optional)

To use a custom domain:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Wait for SSL certificate provisioning (can take up to 24 hours)

## Environment Variables

To use environment variables in production:

1. Create `.env.production`:
   ```
   VITE_API_URL=https://api.example.com
   ```

2. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. For sensitive values, use Firebase Functions environment config

## Monitoring

View deployment history and analytics:

1. Firebase Console → Hosting
2. Check:
   - Deployment history
   - Traffic analytics
   - Performance metrics

## Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [GitHub Actions for Firebase](https://github.com/marketplace/actions/deploy-to-firebase-hosting)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
