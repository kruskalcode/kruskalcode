# KruskalCode Static Website

A complete static Next.js 14 website for KruskalCode, an Islamabad-based software agency focused on web, mobile, cloud, AI, DevOps, consulting, and staffing services.

## Tech Stack

- Next.js 14 App Router
- Material UI v5
- Emotion
- Framer Motion
- MUI Icons
- Static export for shared hosting

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build Static HTML

```bash
npm run build
```

The site is configured with:

```js
output: "export";
trailingSlash: true;
images: { unoptimized: true };
```

After the build finishes, static files are generated in the `out/` directory.

## Deploy to GoDaddy Shared Hosting

1. Run `npm run build`.
2. In GoDaddy File Manager, open your hosting document root, usually `public_html/`.
3. Upload everything inside the generated `out/` folder into `public_html/`.
4. Make sure `.htaccess` is present after upload. It is copied from `public/.htaccess` during the static export.
5. Visit `https://kruskalcode.com` and test `/`, `/about/`, `/services/`, `/services/web-design-development/`, `/portfolio/`, and `/contact/`.

## Updating Content

- Company details, service content, testimonials, and portfolio items live in `data/site.js`.
- MUI theme settings live in `theme/theme.js`.
- Shared layout components live in `components/`.
- App Router pages live in `app/`.

## Contact

- Email: `info@kruskalcode.com`
- Phone: `+923314442274`
- Scheduling: `https://cal.com/kruskalcode`

## Google Ads conversion tracking

The site is prepared for Google Ads. Tags load **only** when IDs are set, so leaving them empty does not inject extra scripts.

1. Copy `.env.example` to `.env.local` (or set the same keys on hosting).
2. Add your Google Tag Manager and/or GA4 IDs if you already use them. Do not duplicate the same tag in both GTM and the native `gtag` snippet unless you intend to.
3. Create conversion actions in Google Ads and paste:
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` (`AW-XXXXXXXXX`)
   - `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` — **successful form submissions only** (`contact_form_submit` / `project_inquiry_submit` / `generate_lead`)
   - `NEXT_PUBLIC_GOOGLE_ADS_CONSULT_LABEL` — consultation calendar clicks
   - `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` — `tel:` clicks
   - `NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL` — `mailto:` clicks
4. Set `NEXT_PUBLIC_FORM_ENDPOINT` (and access key if required) so inquiries are delivered without relying on the mailto fallback.
5. Rebuild and deploy. Conversion IDs are inlined at build time.

Primary Google Search Ads landing page: `/custom-software-development/`
