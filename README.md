# Shreesha Incorporated Pvt. Ltd. – Corporate Portfolio Website

Official corporate portfolio website for **Shreesha Incorporated Pvt. Ltd.**, a premier Nepal-based authorized importer and national distributor of **MumBuds USA** and **Bambo Nature** (Denmark) baby-care, maternal-care, and personal hygiene products.

---

## 🌟 Highlights & Features

- **Authoritative Corporate Positioning**: Accurately showcases the company's role as a national distributor and importer (not a manufacturer or single-brand retailer) based in Maharajgunj-3, Kathmandu.
- **Scandinavian-Inspired Design System**: Corporate identity (`#215172`), warm cream backgrounds (`#FCFAF6`), muted natural green accents (`#3D8568`), generous whitespace, and responsive typography.
- **Strictly Verified Product Catalog**: Complete specification matching the official schedules:
  - **MumBuds Tape Diapers**: NB22 (2–5 kg, 22 pcs, 10 pkt/ctn), S42 (4–8 kg, 42 pcs, 6 pkt/ctn), M40 (7–12 kg, 40 pcs, 6 pkt/ctn), L38 (9–14 kg, 38 pcs, 6 pkt/ctn), XL36 (12–17 kg, 36 pcs, 6 pkt/ctn), XXL34 (16–22 kg, 34 pcs, 6 pkt/ctn).
  - **MumBuds Pants Diapers**: M40 (7–12 kg, 40 pcs, 6 pkt/ctn), L38 (9–14 kg, 38 pcs, 6 pkt/ctn), XL36 (12–17 kg, 36 pcs, 6 pkt/ctn), XXL34 (16–22 kg, 34 pcs, 6 pkt/ctn).
  - **MumBuds Period Panties**: M/L3 (660 mm, 60–105 cm, 3 pcs, 36 pkt/ctn) & L/XL3 (660 mm, 70–120 cm, 3 pcs, 36 pkt/ctn).
  - **MumBuds Baby Wipes**: 100 wipes/pack (10 pkt/ctn).
  - **Bambo Nature Tape Diapers**: Size 1 XS (2–4 kg, 22 pcs, 6 pkt/ctn) to Size 6 XXL (16+ kg, 20 pcs, 6 pkt/ctn).
  - **Bambo Nature Pants Diapers**: Size 4 L (7–12 kg, 20 pcs, 6 pkt/ctn), Size 5 XL (11–17 kg, 19 pcs, 5 pkt/ctn), Size 6 XXL (15+ kg, 18 pcs, 5 pkt/ctn).
  - **Bambo Nature Wet Wipes**: Plastic-Free Wet Wipes (50 pcs, 14 pkt/ctn).
  - **Bambo Nature Baby Care & Maternity**: Baby Oil (100 ml, 6 pkt/ctn), Hair & Body Wash (150 ml, 6 pkt/ctn), Sunscreen SPF50 (100 ml, 6 pkt/ctn), and Abena Maternity Pads Premium (15 pcs, 18 pkt/ctn).
- **Interactive Search & Category Filters**: Search by size, name, or product category across brands.
- **Distribution & Alliances Map**: Details the 4-stage logistics pipeline, 7-province coverage in Nepal, and verified retail collaborations.
- **Functional Frontend Mailto Inquiry System**: Pre-formats structured trade messages into the visitor's default email client, plus instant click-to-call and click-to-email.
- **Zero Backend / Zero Paid Subscriptions**: 100% frontend static build engineered for free hosting on Vercel.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS transitions
- **Deployment**: Vercel (Free Tier)

---

## 🚀 Getting Started Locally

### 1. Prerequisites

Ensure you have **Node.js** (v18.17+ or v20/v22) and **npm** installed on your computer.

### 2. Installation

Clone or open the workspace folder and install dependencies:

```bash
cd "Shreesha Incorporated"
npm install
```

### 3. Running Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Running Production Build

Test the production build:

```bash
npm run build
npm run start
```

---

## 🌐 Free Vercel Deployment Instructions

This website requires **no database, no backend server, and no paid subscriptions**. It deploys directly to Vercel's free tier.

### Option A: Deploy via GitHub (Recommended)

1. **Initialize Git & Commit Locally**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Shreesha Incorporated corporate portal"
   ```

2. **Push to GitHub**:
   - Go to [GitHub.com](https://github.com) and create a new repository (e.g., `shreesha-incorporated`).
   - Run the commands provided by GitHub:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/shreesha-incorporated.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in (using GitHub).
   - Click **"Add New..."** > **"Project"**.
   - Select your `shreesha-incorporated` repository and click **"Import"**.
   - Keep default settings:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `next build`
     - Output Directory: `.next`
   - Click **"Deploy"**.
   - Within 1 minute, your website will be live on a `*.vercel.app` URL with free SSL!

### Option B: Deploy via Vercel CLI

If you have the Vercel CLI installed:

```bash
npm i -g vercel
vercel
```

Follow the prompts to link your account and deploy.

---

## 🔗 Connecting a Custom Domain (e.g. `shreeshaincorporated.com`)

1. In your **Vercel Project Dashboard**, navigate to **Settings** > **Domains**.
2. Enter your custom domain name (e.g., `shreeshaincorporated.com` or `www.shreeshaincorporated.com`).
3. Vercel will provide standard DNS records:
   - **Type A**: `76.76.21.21` (for apex domain `shreeshaincorporated.com`)
   - **CNAME**: `cname.vercel-dns.com` (for `www`)
4. Add these DNS records at your domain registrar (e.g. Namecheap, GoDaddy, Cloudflare, or Nepal Mercantile/register.com.np).
5. Vercel automatically provisions and renews a free Let's Encrypt SSL certificate.

---

## 🏢 Company Contact & Information Reference

- **Company**: Shreesha Incorporated Pvt. Ltd.
- **Business Role**: Importer and National Distributor
- **Headquarters**: Maharajgunj-3, Kathmandu, Nepal
- **Phone**: 9826278287
- **Email**: shreeshaincorporated@gmail.com
- **Represented Brands**:
  - MumBuds USA: [https://mumbudsnepal.com/](https://mumbudsnepal.com/)
  - Bambo Nature: [https://bambo.com/](https://bambo.com/)
