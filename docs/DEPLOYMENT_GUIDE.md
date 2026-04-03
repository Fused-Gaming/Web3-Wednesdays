# Deployment Guide: learning.vln.gg

**Status:** Ready for deployment  
**Last Updated:** April 3, 2026  
**Target URL:** https://learning.vln.gg

---

## 📋 Quick Summary

The Web3-Wednesdays learning platform is a Next.js 14 app configured for Vercel deployment. The platform includes:

- ✅ **Module Pages** — Curriculum structure (Module 0-3)
- ✅ **Lab Links** — References to Foundry-based labs on GitHub
- ✅ **Resources Page** — Tools, documentation, and further reading
- ✅ **Security Warnings** — Prominent on all sensitive content
- ✅ **VLN Design System** — Dark theme with Tailwind CSS
- ✅ **Metadata & SEO** — Proper page titles and descriptions

---

## 🚀 Deployment Options

### Option A: Vercel (Recommended)

**Fastest deployment with automatic previews and CI/CD**

#### Prerequisites
- Vercel account (free)
- GitHub account with access to Fused-Gaming/Web3-Wednesdays repo

#### Steps

1. **Link Vercel to GitHub Repository**
   ```bash
   # Go to https://vercel.com/new
   # Select "Fused-Gaming/Web3-Wednesdays"
   # Configure project settings:
   ```

   **Project Settings:**
   - **Framework:** Next.js (auto-detected)
   - **Root Directory:** `./next-app`
   - **Build Command:** Leave default (npm run build)
   - **Install Command:** Leave default (npm install)
   - **Environment Variables:** None required (empty)

2. **Set Custom Domain**
   ```
   Project Settings → Domains → Add Domain
   Domain: learning.vln.gg
   ```

3. **Enable Auto-Deploy**
   ```
   Project Settings → Git → Auto-deploy from main branch
   ```

4. **Deploy**
   - Vercel auto-deploys on every push to `main`
   - OR manually deploy: `vercel deploy --prod`

#### Expected Build Time: ~60 seconds

---

### Option B: GitHub Pages

**Free hosting with GitHub Pages**

#### Prerequisites
- Repository access
- GitHub Pages enabled on repository

#### Steps

1. **Install Next.js Static Export**
   ```bash
   cd next-app
   npm install
   ```

2. **Configure next.config.js for static export**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     distDir: 'out',
   };
   module.exports = nextConfig;
   ```

3. **Build Static Site**
   ```bash
   cd next-app
   npm run build
   # Output: out/
   ```

4. **Deploy to GitHub Pages**
   ```bash
   # Create gh-pages branch
   git checkout --orphan gh-pages
   git rm -rf .
   
   # Copy built files
   cp -r next-app/out/* .
   git add .
   git commit -m "Deploy learning platform to GitHub Pages"
   git push origin gh-pages
   ```

5. **Configure GitHub Pages**
   ```
   Settings → Pages → Source: Deploy from branch → gh-pages → /root
   ```

---

## 🔍 Pre-Deployment Checklist

Before deploying to production, verify:

- [ ] All module pages render correctly locally
  ```bash
  cd next-app && npm run dev
  # Visit http://localhost:3000
  # Check: /, /modules, /module-0, /resources
  ```

- [ ] Security warnings are visible on all pages
  - Navigate to `/module-0` and verify ⚠️ warning box

- [ ] Links work correctly
  - Module 0 → Lab 00 on GitHub
  - Resources → External links open in new tabs
  - Navigation between pages works

- [ ] Build succeeds without errors
  ```bash
  cd next-app && npm run build
  ```

- [ ] No TypeScript or ESLint errors
  ```bash
  npm run lint
  ```

- [ ] Page metadata is correct
  - Check browser tab title for each page
  - Verify OG meta tags (for social sharing)

---

## 🧪 Local Testing

### Run Locally with Next.js Dev Server

```bash
cd /home/user/Web3-Wednesdays/next-app
npm install          # First time only
npm run dev          # Starts http://localhost:3000
```

### Test All Pages

1. **Landing Page** (`/`)
   - Check hero section
   - Verify security warning box
   - Test module links

2. **Modules Overview** (`/modules`)
   - All 4 modules visible
   - Status indicators correct (LIVE vs Coming Soon)
   - Topic tags display properly

3. **Module 0** (`/module-0`)
   - Lab details visible
   - "View Lab on GitHub" link works
   - Security warning prominent
   - Quick start guide readable

4. **Resources** (`/resources`)
   - All resource categories load
   - External links open in new tabs
   - Section headers visible

### Build & Test Locally

```bash
cd next-app
npm run build          # Creates .next/ directory
npm run start          # Runs production build locally
# Visit http://localhost:3000
```

---

## 🌐 Domain Configuration (After Deploy)

### Add CNAME Record

Point `learning.vln.gg` to Vercel or GitHub Pages:

**For Vercel:**
```
CNAME: cname.vercel-dns.com
```

**For GitHub Pages:**
```
CNAME: fused-gaming.github.io
```

Update DNS settings with your registrar (likely with VLN domain provider).

---

## 📊 Deployment Status Monitoring

### Vercel Dashboard
```
https://vercel.com/fused-gaming/web3-wednesdays
- View deployment history
- Monitor build logs
- Check performance metrics
```

### GitHub Actions (if configured)
```
.github/workflows/ — Automated checks on PR
- Lint check
- Build verification
- Optional: Auto-deploy on main push
```

---

## 🔧 Post-Deployment Verification

After deploying to `learning.vln.gg`:

1. **Check HTTPS**
   ```bash
   curl -I https://learning.vln.gg
   # Should return HTTP 200 and Strict-Transport-Security header
   ```

2. **Verify Page Render**
   ```bash
   # Visit each page in browser
   - https://learning.vln.gg/
   - https://learning.vln.gg/modules
   - https://learning.vln.gg/module-0
   - https://learning.vln.gg/resources
   ```

3. **Test Links**
   - Click "View Lab on GitHub" → Should go to GitHub repo
   - Click resource links → Should open in new tab
   - Click module cards → Should navigate within site

4. **Check Mobile Responsiveness**
   - Open on phone/tablet
   - Grid layouts should stack properly
   - Text should be readable
   - Links should be clickable

5. **Validate Security Warnings**
   - ⚠️ boxes visible on Module 0
   - Footer warning visible
   - No warnings blocked by CSS

---

## 📝 Environment Variables (If Needed)

Currently, the platform requires **no environment variables**.

If future updates require environment variables (e.g., analytics, API keys):

**For Vercel:**
```
Project Settings → Environment Variables → Add
Name: VARIABLE_NAME
Value: value
```

**For GitHub Pages:**
Build-time only (set in CI workflow).

---

## 🚨 Troubleshooting

### Build Fails: "npm: command not found"
```bash
# Ensure Node.js 18+ installed
node --version
npm install
```

### Build Fails: "Cannot find module 'next'"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Page Shows 404 Error
```bash
# Check Next.js routing config
- Verify file exists: app/page-name/page.tsx
- Ensure no typos in href attributes
- Check next.config.js for routing overrides
```

### Styling Looks Off
```bash
# Rebuild Tailwind CSS
npm run build
# Clear browser cache (Cmd/Ctrl + Shift + R)
```

### Links Broken After Deploy
```bash
# Verify vercel.json or GitHub Pages configuration
# Check that root directory is correct
# Confirm CNAME record is set up
```

---

## 📚 Next Steps After Deployment

1. **Test Live Platform**
   - Share `learning.vln.gg` with team
   - Verify all pages accessible
   - Check security warnings visible

2. **Create Discord Announcements**
   - Post platform link in Discord
   - Update Discord "resources" channel

3. **Promote Curriculum**
   - Add link to GitHub README
   - Tweet from Web3 Wednesdays account
   - Share with Fused Gaming community

4. **Monitor Performance**
   - Set up basic analytics (optional)
   - Monitor Vercel dashboard for errors
   - Gather user feedback

5. **Plan Module 1 Content**
   - Begin Week 1 contract development
   - Assign lab creator roles
   - Schedule first live session

---

## 📞 Support

For deployment issues:
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Pages Docs:** https://pages.github.com/

For curriculum/content questions:
- See `CLAUDE.md` (project context)
- See `ARCHITECT.md` (curriculum design)
- Check Discord #dev-help channel

---

## 🎯 Success Criteria

✅ Deployment is successful when:

1. Platform accessible at `learning.vln.gg`
2. All pages load without errors (HTTP 200)
3. Security warnings visible on vulnerable content
4. Links navigate correctly
5. Mobile layout responsive
6. HTTPS enabled
7. Deploy time < 2 minutes (Vercel) or < 5 minutes (GitHub Pages)

---

**Platform Status: ✅ READY FOR DEPLOYMENT**

Next: Deploy to learning.vln.gg and announce to community.

