# ✅ SEO Setup Checklist

## Priority 1: Critical (Do These First!)

### 1. Update Domain URLs ⚠️ CRITICAL
- [ ] Open VS Code
- [ ] Press `Ctrl+Shift+H` (Windows) or `Cmd+Shift+H` (Mac)
- [ ] Find: `https://mohanprasath.dev/`
- [ ] Replace with: `https://your-actual-domain.com/`
- [ ] Click "Replace All"
- [ ] Save all files (`Ctrl+K, S`)

**Files that will be updated:**
- index.html (multiple locations)
- robots.txt
- sitemap.xml

---

### 2. Create Required Images
- [ ] Create `assets/og-image.jpg` (1200×630px) using [Canva](https://canva.com)
- [ ] Add your professional photo as `assets/profile.jpg` (400×400px)
- [ ] Optional: Create `assets/screenshot-desktop.jpg` (1920×1080px)
- [ ] Optional: Create `assets/screenshot-mobile.jpg` (720×1280px)

**Need help?** See [assets/README.md](assets/README.md)

---

### 3. Optimize All Images
- [ ] Visit [TinyPNG](https://tinypng.com)
- [ ] Drag & drop all images from assets/ folder
- [ ] Download compressed versions
- [ ] Replace original files
- [ ] Target: Each image under 500KB

---

## Priority 2: Essential Setup (30 minutes)

### 4. Update Social Media Links
Open `index.html` and search for these, then update:
- [ ] LinkedIn URL: `https://linkedin.com/in/mohanprasath`
- [ ] GitHub URL: `https://github.com/mohanprasath-dev`
- [ ] Twitter handle: `@mohanprasath`

**Location in file:** Look in the `<script type="application/ld+json">` section

---

### 5. Update Personal Information in JSON-LD
In `index.html`, update your structured data:
- [ ] University/College name
- [ ] Current job title
- [ ] Company/Organization name
- [ ] Skills list (add your actual skills)
- [ ] Languages you know

---

### 6. Set Up Google Search Console
- [ ] Visit [Google Search Console](https://search.google.com/search-console)
- [ ] Click "Start Now" and log in with Google account
- [ ] Choose "URL prefix" method
- [ ] Enter your website URL: `https://your-domain.com`
- [ ] Verify using HTML meta tag:
  - [ ] Copy the meta tag Google provides
  - [ ] Add to `<head>` section of index.html
  - [ ] Upload/deploy website
  - [ ] Click "Verify" in Search Console

---

### 7. Submit Sitemap
**In Google Search Console:**
- [ ] Click "Sitemaps" in left sidebar
- [ ] Enter: `sitemap.xml`
- [ ] Click "Submit"
- [ ] Wait for confirmation (green checkmark)

---

### 8. Request Indexing
**In Google Search Console:**
- [ ] Click "URL Inspection" at top
- [ ] Enter your homepage URL
- [ ] Click "Test Live URL"
- [ ] Click "Request Indexing"
- [ ] Repeat for key pages (e.g., /#about, /#projects)

---

## Priority 3: Analytics & Tracking (15 minutes)

### 9. Set Up Google Analytics
- [ ] Visit [Google Analytics](https://analytics.google.com)
- [ ] Create account and property
- [ ] Copy "Measurement ID" (G-XXXXXXXXXX)
- [ ] Add tracking code to index.html before `</head>`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 10. Optional: Microsoft Clarity (Heatmaps)
- [ ] Visit [Microsoft Clarity](https://clarity.microsoft.com)
- [ ] Sign up (free)
- [ ] Create project
- [ ] Copy tracking code
- [ ] Add to index.html before `</head>`

---

## Priority 4: Testing (20 minutes)

### 11. Test Meta Tags
- [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Test Open Graph
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Test Twitter Cards
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) - Test LinkedIn preview

**Fix any errors before proceeding!**

---

### 12. Test Structured Data
- [ ] Visit [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Enter your URL or paste HTML
- [ ] Check for errors
- [ ] Verify all 3 schemas appear:
  - [ ] Person
  - [ ] WebSite
  - [ ] ProfilePage

---

### 13. Test Mobile-Friendly
- [ ] Visit [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Enter your URL
- [ ] Wait for results
- [ ] Goal: "Page is mobile-friendly" ✅

---

### 14. Test Page Speed
- [ ] Visit [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Enter your URL
- [ ] Check both Mobile and Desktop scores
- [ ] Goal: 90+ score (green)
- [ ] If lower, follow optimization suggestions

---

### 15. Test Core Files
Check these URLs work:
- [ ] `your-domain.com/robots.txt` - Should show robots file
- [ ] `your-domain.com/sitemap.xml` - Should show XML sitemap
- [ ] `your-domain.com/site.webmanifest` - Should show JSON manifest

---

## Priority 5: Social & Backlinks (1 hour)

### 16. Update GitHub Profile
- [ ] Add portfolio URL to GitHub profile bio
- [ ] Pin this repository
- [ ] Add portfolio URL to repository description
- [ ] Create detailed README with link

---

### 17. Update LinkedIn Profile
- [ ] Add portfolio to "Featured" section
- [ ] Add to "Contact Info"
- [ ] Create post announcing portfolio
  - [ ] Include screenshot
  - [ ] Use hashtags: #webdevelopment #portfolio #AI #ML
  - [ ] Tag relevant connections

---

### 18. Create/Update Other Profiles
- [ ] Twitter/X: Add URL to bio, create introduction thread
- [ ] Dev.to: Create account, add portfolio link
- [ ] Hashnode: Create blog, link portfolio
- [ ] Medium: Add to profile
- [ ] Stack Overflow: Add to profile

---

### 19. Share Portfolio
Share on these platforms with relevant hashtags:
- [ ] LinkedIn post with #opentowork #hiring #webdeveloper
- [ ] Twitter thread about your journey
- [ ] Dev.to article: "How I built my portfolio"
- [ ] Reddit: r/webdev (follow rules, don't spam)
- [ ] Facebook (personal network)

---

### 20. Build Initial Backlinks
- [ ] Add portfolio to GitHub profile README
- [ ] Create Dev.to profile with portfolio link
- [ ] Answer questions on Stack Overflow (add portfolio in signature)
- [ ] Comment on relevant blog posts (add portfolio URL)
- [ ] Join developer communities (add portfolio to profiles)

---

## Priority 6: Content & Ongoing (Weekly)

### 21. Add Blog/Articles (Optional but Powerful for SEO)
- [ ] Create blog section on portfolio OR
- [ ] Start blog on Dev.to/Hashnode and link back
- [ ] Write about:
  - [ ] Your projects (case studies)
  - [ ] Technologies you use
  - [ ] Tutorials or how-tos
  - [ ] Your learning journey

---

### 22. Monitor & Improve
**Weekly Tasks:**
- [ ] Check Google Search Console for:
  - [ ] Indexing status
  - [ ] Search appearance
  - [ ] Performance metrics
  - [ ] Coverage issues
- [ ] Check Google Analytics:
  - [ ] Visitor count
  - [ ] Traffic sources
  - [ ] Popular pages
  - [ ] Bounce rate

**Monthly Tasks:**
- [ ] Update portfolio with new projects
- [ ] Write new blog post or article
- [ ] Build 5 new backlinks
- [ ] Check and fix any broken links
- [ ] Update sitemap if structure changed
- [ ] Refresh social media images if design changed

---

## 📊 Success Metrics

### Week 1-2:
- [ ] Site submitted to search engines
- [ ] Sitemap submitted and accepted
- [ ] No indexing errors in Search Console

### Week 3-4:
- [ ] Pages indexed by Google
- [ ] Appear in search for "Mohan Prasath [your city]"
- [ ] Social profiles linking to portfolio

### Month 2-3:
- [ ] Ranking on first page for your name
- [ ] Rich snippets showing in search results
- [ ] Traffic from organic search

### Month 3-6:
- [ ] Top 3 results for your name
- [ ] Traffic from multiple sources
- [ ] Backlinks from reputable sites

---

## 🎯 Quick Win Checklist (Do Today!)

Minimum viable SEO setup (30 minutes):
- [x] ~~SEO files created~~ (Done automatically!)
- [ ] Update domain URLs (5 min)
- [ ] Create og-image.jpg (10 min)
- [ ] Submit to Google Search Console (10 min)
- [ ] Share on LinkedIn (5 min)

---

## 🆘 Troubleshooting

### "Images not showing in social preview"
- Check image dimensions: og-image must be 1200×630px
- Verify URL is absolute: `https://domain.com/assets/og-image.jpg`
- Clear cache using Facebook Debugger
- Wait 24 hours for Twitter/LinkedIn to update cache

### "Site not indexed by Google"
- Verify ownership in Search Console
- Check robots.txt isn't blocking
- Request indexing manually
- Wait 1-2 weeks for normal indexing

### "Low PageSpeed score"
- Compress all images (use TinyPNG)
- Minify CSS and JavaScript
- Enable caching (.htaccess already configured!)
- Use CDN for libraries (already done!)

### "Structured data errors"
- Use Rich Results Test to identify exact error
- Check JSON-LD syntax is valid
- Ensure all required fields are filled
- Update URLs to your actual domain

---

## 📞 Need Help?

**Documentation:**
- [SEO-GUIDE.md](SEO-GUIDE.md) - Complete guide
- [SEO-QUICK-START.md](SEO-QUICK-START.md) - Quick reference
- [assets/README.md](assets/README.md) - Image creation guide

**Helpful Resources:**
- Google Search Console Help
- Google SEO Starter Guide
- Dev.to SEO tag
- Reddit r/SEO

---

## ✅ Completion Status

**Total Tasks:** 22 priority tasks + ongoing  
**Completed:** ___ / 22

**Minimum for launch:** Complete Priority 1 & 2 (tasks 1-8)  
**Recommended for best results:** Complete all Priority 1-5

---

**You've got this!** 🚀

Each checkmark brings you closer to ranking #1 for your name on Google!
