# 🚀 DEPLOY TO learning.vln.gg — QUICK START

**Status:** Ready to Deploy ✅  
**Build Verified:** YES (8 pages, 87.4 kB First Load JS)  
**Deployment Time:** 10-15 minutes  

---

## ✅ PRE-DEPLOYMENT VERIFICATION (DONE)

- ✅ Dependencies installed (`npm install`)
- ✅ Build successful (`npm run build`)
- ✅ All 8 pages compiled
- ✅ No TypeScript errors
- ✅ No build warnings
- ✅ Production-ready

---

## 🎯 DEPLOYMENT: CHOOSE YOUR METHOD

### Method A: VERCEL (Recommended) ⭐

**Fastest & easiest option with auto-deploy**

#### Step 1: Go to Vercel Dashboard
```
https://vercel.com/new
```

#### Step 2: Import Git Repository
- Click "Continue with GitHub"
- Select: `Fused-Gaming/Web3-Wednesdays`
- Click "Import"

#### Step 3: Configure Project
**Root Directory:** `next-app`  
**Framework Preset:** Next.js (auto-detected)  
**Build Command:** `npm run build`  
**Install Command:** `npm install`  
**Environment Variables:** Leave empty (none needed)  

Click "Deploy"

⏱️ **Deploy Time:** 2-3 minutes

#### Step 4: Wait for Deployment
```
✓ Building...
✓ Uploading files...
✓ Creating deployment...
✓ Success! Your site is live at: [vercel-url].vercel.app
```

#### Step 5: Add Custom Domain
1. Go to Project Settings → Domains
2. Click "Add Custom Domain"
3. Enter: `learning.vln.gg`
4. Click "Add"
5. Configure DNS (Vercel will provide CNAME record)

```
CNAME: cname.vercel-dns.com
```

#### Step 6: Verify Deployment
```
curl https://learning.vln.gg
# Should return HTTP 200
```

---

### Method B: GitHub Pages (Free Alternative)

**If you prefer GitHub Pages instead of Vercel:**

#### Step 1: Update next.config.js

Edit `next-app/next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this line
};
module.exports = nextConfig;
```

#### Step 2: Rebuild
```bash
cd next-app
npm run build
```

#### Step 3: Deploy to gh-pages Branch
```bash
git checkout --orphan gh-pages
git rm -rf .
cp -r .next/* .
cp -r public/* .
git add .
git commit -m "Deploy learning platform to GitHub Pages"
git push origin gh-pages -f
```

#### Step 4: Configure GitHub Pages
Settings → Pages → Source: `gh-pages` branch

#### Step 5: Configure Domain
Add CNAME file:
```bash
echo "learning.vln.gg" > CNAME
git add CNAME
git commit -m "Add CNAME for learning.vln.gg"
git push origin gh-pages
```

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deployment, verify these 5 points:

- [ ] **Site Loads**
  ```
  Visit https://learning.vln.gg in browser
  Should see: "Web3 Wednesdays" heading, 4 module cards
  ```

- [ ] **All Pages Work**
  - [ ] `/` (landing)
  - [ ] `/modules` (curriculum overview)
  - [ ] `/module-0` (onboarding with lab info)
  - [ ] `/resources` (tools & references)

- [ ] **Security Warnings Visible**
  - [ ] ⚠️ box on `/module-0`
  - [ ] ⚠️ warning in footer
  - [ ] No warning blocked by styling

- [ ] **Links Work**
  - [ ] "View Lab on GitHub" links to: https://github.com/Fused-Gaming/Web3-Wednesdays/tree/main/module-0-onboarding/labs/lab-00-reentrancy
  - [ ] Resources links open in new tabs
  - [ ] Module navigation works

- [ ] **Mobile Responsive**
  - [ ] Open on phone/tablet
  - [ ] Grids stack properly
  - [ ] Text readable
  - [ ] Links clickable

---

## 🎉 DEPLOYMENT COMPLETE!

Once verified, your platform is live at: **https://learning.vln.gg**

### Next Steps:

1. **Announce in Discord**
   ```
   📢 Web3 Wednesdays learning platform is LIVE!
   🎓 https://learning.vln.gg
   Week 0 lab ready for hands-on learning
   ```

2. **Share with Team**
   - Send learning.vln.gg link
   - Test with facilitators
   - Gather feedback

3. **Set Up Discord Server** (next task)
   - Create channels
   - Configure roles
   - Add welcome message

4. **Schedule First Session**
   - Confirm date/time
   - Create Zoom link
   - Promote session

---

## 🚨 TROUBLESHOOTING

**If deployment fails:**

1. **Check Build Log**
   - Vercel: View in dashboard → Deployments → Failed build
   - GitHub Pages: Check GitHub Actions tab

2. **Common Issues**
   ```
   "Cannot find module 'next'"
   → Run: npm install
   
   "Port already in use"
   → Close other dev servers or use: npm run build && npm start
   
   "CNAME not resolving"
   → Wait 10-15 minutes for DNS propagation
   ```

3. **Rollback**
   - Vercel: Click "Deployments" → Previous version → Redeploy
   - GitHub Pages: Push to main → rebuild

---

## 📊 DEPLOYMENT SUMMARY

| Step | Time | Status |
|------|------|--------|
| **Build** | 2-3 min | ✅ Done |
| **Deploy to Vercel** | 2-3 min | ⏳ TODO |
| **Configure Domain** | 1-2 min | ⏳ TODO |
| **DNS Propagation** | 5-15 min | ⏳ TODO |
| **Verify 5-Point Check** | 3-5 min | ⏳ TODO |
| **Total Time** | 15-20 min | |

---

## 📞 NEED HELP?

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **DNS Issues?** Contact your domain registrar (VLN)

---

**Ready to deploy? Follow Method A (Vercel) above! 🚀**
