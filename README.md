# SDB Social Impact Website

**Domain:** SDBsocialimpact.com
**Hosting:** AWS
**Built with:** Claude Code

## About

SDB Social Impact is a consulting firm specializing in strategic operations and impact measurement for mission-driven organizations. Founded by Stacey D. Burns, an experienced interim COO with over 15 years in the social impact sector, the company partners with nonprofits and social enterprises to build operational strength and prove the power of their impact.

## Mission

> "Your Mission Is Powerful. Let's Make Sure Your Operations Are, Too."

We help nonprofits and social enterprises shape strategy, stabilize operations, and prove value. We speak both nonprofit and business fluently—bringing clarity, structure, and insight to your mission.

## Services

### COO Services Consult
**Duration:** 1 hour

Strategy, Organizational Development, and Leadership Coaching for Social Impact Organizations. Get high-level operational leadership without the full-time cost. Implement the changes that move your mission forward.

### Social Return on Investment (SROI) Consult
**Duration:** 45 minutes

Understanding and Enhancing the Value of your Impact. Prove the value of your work through rigorous, internationally aligned SROI studies.

## Why Choose Us

- **Personalized Support** - We focus on your unique needs
- **Sector Expertise** - Whether you're in healthcare, housing, or the arts—we get your world and tailor our support accordingly
- **Proven Results** - Our SROI studies have helped organizations secure crucial funding
- **Flexible Engagement** - High-level operational leadership without the full-time cost

## Project Structure

```
sdbsocialimpact/
├── public/
│   ├── index.html
│   ├── images/
│   └── assets/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── package.json
├── README.md
└── .gitignore
```

## Pages

- **Home** - Hero section, services overview, testimonials, and call-to-action
- **Services** - Detailed service offerings with booking functionality
- **About/Our Journey** - Company story and founder background
- **Blog/Insights** - Articles on social impact, evaluation techniques, and strategic consulting
- **Contact** - Service booking and inquiry form

## Tech Stack (Recommended)

- **Frontend:** React/Next.js or HTML/CSS/JavaScript
- **Styling:** Tailwind CSS or custom CSS
- **Hosting:** AWS (S3 + CloudFront for static, or Amplify for full-stack)
- **Domain:** SDBsocialimpact.com

## AWS Deployment

1. Configure AWS CLI with credentials
2. Create S3 bucket for static hosting
3. Set up CloudFront distribution for CDN
4. Configure Route 53 for domain DNS
5. Enable HTTPS with AWS Certificate Manager

## Getting Started

```bash
# Clone the repository
git clone https://github.com/dan-adam-ain/SDB_Social_Impact.git

# Navigate to project directory
cd SDB_Social_Impact

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Design Notes

- **Color Scheme:** Dark theme with black background, white/cream text, and accent buttons
- **Typography:** Elegant serif fonts for headings, clean sans-serif for body
- **Logo:** Circular design featuring "SDB SOCIAL impact" in script and serif fonts
- **Style:** Professional, sophisticated, mission-driven aesthetic

## Contact

For inquiries about services, use the "Let's Chat!" button or the Contact page to book a consultation.

---

© SDB Social Impact
