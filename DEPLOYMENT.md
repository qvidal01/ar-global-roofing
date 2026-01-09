# Deployment Guide

This guide covers deploying the AR Global Roofing website to Vercel.

## Prerequisites

- GitHub account with the repository
- Vercel account (sign up at https://vercel.com)
- Google Analytics 4 property created
- Microsoft Clarity project created

## Step 1: Prepare Environment Variables

You'll need the following environment variables for production:

### Required for Analytics
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
```

### Optional (for future features)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
RESEND_API_KEY=
CONTACT_EMAIL_TO=info@arglobalroofing.com
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. **Import Project**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository: `qvidal01/AR_Global`
   - Click "Import"

2. **Configure Project**
   - Framework Preset: Next.js (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Add Environment Variables**
   - Click "Environment Variables"
   - Add each variable from Step 1
   - Select environment: Production, Preview, Development (all three)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts to:
# - Link to existing project or create new
# - Set environment variables
# - Confirm deployment
```

## Step 3: Configure Custom Domain

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add `www.arglobalroofing.com`
   - Add `arglobalroofing.com`

2. **Update DNS Records**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A records for root domain:
     - `76.76.19.19`
     - `76.76.19.61`
   - Or use Vercel nameservers (recommended)

3. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes
   - SSL certificate auto-generates

## Step 4: Verify Deployment

### Check Core Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form validates properly
- [ ] Location pages load for all 6 cities
- [ ] Service pages display correctly
- [ ] Portfolio filtering works
- [ ] Mobile menu functions properly

### Verify Analytics
- [ ] Google Analytics is tracking pageviews
- [ ] Microsoft Clarity is recording sessions
- [ ] Event tracking fires for:
  - CTA clicks
  - Phone number clicks
  - Form submissions

### SEO Verification
- [ ] Visit `https://yourdomain.com/sitemap.xml`
- [ ] Visit `https://yourdomain.com/robots.txt`
- [ ] Check structured data: https://search.google.com/test/rich-results
- [ ] Verify meta tags are present on all pages

### Performance Check
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Test mobile responsiveness

## Step 5: Post-Deployment Configuration

### Google Search Console
1. Add property: `https://arglobalroofing.com`
2. Verify ownership (Vercel automatically adds meta tag)
3. Submit sitemap: `https://arglobalroofing.com/sitemap.xml`

### Google Analytics 4
1. Confirm real-time data is coming in
2. Set up conversion events:
   - `form_submit_success`
   - `phone_click`
   - `cta_click`

### Microsoft Clarity
1. Verify session recordings are capturing
2. Set up custom tags for important pages
3. Review heatmaps after 24 hours

## Continuous Deployment

Vercel automatically deploys on every push to `main` branch:

1. Make changes locally
2. Commit and push to GitHub
3. Vercel detects push and starts build
4. Preview deployments for branches
5. Production deployment on `main` merge

### Preview Deployments
- Every PR gets a unique preview URL
- Test changes before merging
- Share with stakeholders for review

## Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# Check build logs in Vercel dashboard
# Common issues:
# - TypeScript errors
# - Missing environment variables
# - Import path issues
```

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Re-deploy after adding/changing variables
- Check variable names match exactly (case-sensitive)

### Analytics Not Tracking
- Verify environment variables are set in Vercel
- Check browser console for errors
- Confirm GA/Clarity IDs are correct
- Test in incognito mode (extensions can block)

### Custom Domain Not Working
- Verify DNS records are correct
- Wait up to 48 hours for DNS propagation
- Check domain status in Vercel dashboard
- Try DNS lookup: `nslookup arglobalroofing.com`

## Rollback

If you need to rollback a deployment:

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"
4. Confirm the rollback

## Monitoring

### Vercel Analytics
- Real User Metrics (RUM)
- Web Vitals tracking
- Top pages by traffic

### Error Monitoring
- Check Vercel logs for runtime errors
- Set up error boundaries in React components
- Consider adding Sentry for production error tracking

## Performance Optimization

After deployment, monitor and optimize:

1. **Images**
   - Use Next.js Image component
   - Optimize source images before upload
   - Consider CDN for media assets

2. **Bundle Size**
   - Run `npm run build` and check bundle sizes
   - Analyze with `@next/bundle-analyzer`
   - Code-split large components

3. **Caching**
   - Leverage Vercel Edge Network CDN
   - Set appropriate cache headers
   - Use `revalidate` for ISR pages

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- AR Global Roofing team: contact@arglobalroofing.com
