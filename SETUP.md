# Setup Instructions

Follow these steps to set up this template for your own project.

## 1️⃣ Update Repository Configuration

### Update `vite.config.ts`

Open `vite.config.ts` and replace `your-repo-name` with your actual GitHub repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-actual-repo-name/',  // ← Update this!
})
```

**Example:**
- If your repo is `https://github.com/johndoe/my-awesome-app`
- Change to: `base: '/my-awesome-app/'`

## 2️⃣ Customize the Project

### Update `package.json`

```json
{
  "name": "your-project-name",
  "version": "0.1.0",
  ...
}
```

### Update Project Content

1. **Logo and Branding** - Update in `src/app/components/header/Header.tsx` and `src/app/components/footer/Footer.tsx`
2. **Page Content** - Customize pages in `src/app/pages/`
3. **Colors** - Modify the blue-purple gradient theme in Tailwind classes or `tailwind.config.js`
4. **Meta Tags** - Update `index.html` for SEO

## 3️⃣ Deploy to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

**Quick version:**

1. Ensure `vite.config.ts` is updated (Step 1)
2. Push to GitHub
3. Enable GitHub Pages in repo settings (Source: GitHub Actions)
4. Your site will be live at `https://YOUR_USERNAME.github.io/your-repo-name/`

## 4️⃣ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization Tips

### Change Color Theme
The template uses blue-purple gradients. To change:
- Find and replace: `from-blue-500/600 to-purple-600`
- Update in components or extend `tailwind.config.js`

### Add New Pages
1. Create folder: `src/app/pages/my-page/`
2. Create files: `MyPage.tsx` and `index.ts`
3. Add route in `src/App.tsx`
4. Add navigation link in `Header.tsx`

### Remove Dark Mode
If you don't need dark mode, remove all `dark:` classes from components.

## 📚 Documentation

- [README.md](./README.md) - Project overview and features
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [CLAUDE.md](./CLAUDE.md) - Architecture and development guide

## ⚠️ Common Issues

### Blank page after deployment?
- Check `vite.config.ts` base path matches your repo name exactly
- Ensure repo name is case-sensitive correct

### 404 on routes?
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for client-side routing fix

### Build fails?
- Run `npm install` to ensure dependencies are installed
- Check Node version (requires 16+)

## 🚀 You're Ready!

Your template is set up. Start customizing and building your amazing app!
