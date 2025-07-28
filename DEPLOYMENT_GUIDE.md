# North Island Fly Website - Deployment Guide

A modern, responsive website for Captain Dave Flanagan's North Island Fly & Light Tackle fishing guide service.

## 🎣 Project Overview

This is a single-page website built with:
- **Nuxt 4** (Latest version with all modern features)
- **Nuxt UI** (Latest UI framework with Tailwind CSS)
- **Tailwind CSS** (Modern styling)
- **Vue 3** (Composition API)
- **Static Site Generation** (For fast loading and SEO)

## 🚀 Quick Deployment to GitHub Pages

### Option 1: Using the Pre-built Files

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `north-island-fly` or `fishing-guide-website`
   - Make it public (required for free GitHub Pages)

2. **Upload the project files**
   - Download the `north-island-fly-website.tar.gz` file
   - Extract it to your local machine
   - Upload all files to your GitHub repository

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose the `main` branch and `/docs` folder
   - Click "Save"

4. **Access your website**
   - Your site will be available at: `https://[your-username].github.io/[repository-name]`
   - It may take a few minutes to deploy initially

### Option 2: Using GitHub Actions (Automated)

1. **Create repository and upload files** (same as Option 1, steps 1-2)

2. **Enable GitHub Pages with Actions**
   - Go to repository Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The included `.github/workflows/deploy.yml` will automatically build and deploy

3. **Automatic deployment**
   - Every time you push changes to the `main` branch, the site will automatically rebuild and deploy

## 🛠️ Local Development

If you want to modify the website:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000 in your browser

3. **Build for production**
   ```bash
   npm run generate
   ```
   - Files will be generated in `.output/public/`

4. **Deploy**
   ```bash
   ./deploy.sh
   ```
   - Runs the build script and copies files to `docs/` folder

## 📱 Features Included

- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional design with Nuxt UI components
- **Fast Loading** - Static site generation for optimal performance
- **SEO Optimized** - Proper meta tags and structured data
- **Contact Form** - Ready-to-use contact form (needs backend integration)
- **Newsletter Signup** - Email subscription functionality
- **Image Gallery** - Showcase fishing photos
- **Service Pages** - Complete information about fishing services
- **Smooth Scrolling** - Modern navigation experience

## 🎨 Customization

### Colors and Branding
- Main brand colors are defined in the Tailwind config
- Blue theme reflects the marine/fishing aesthetic
- Easy to customize in `nuxt.config.ts` and component files

### Content Updates
- All content is in `pages/index.vue`
- Images can be replaced in the `public/images/` folder
- Contact information is easily editable in the contact section

### Adding More Pages
- Create new `.vue` files in the `pages/` directory
- Nuxt will automatically create routes for them

## 📞 Contact Information

The website includes Captain Dave's contact information:
- **Phone**: (631) 935-5719
- **Service Area**: Long Island Sound, NY
- **Specialties**: Fly Fishing & Light Tackle Guide

## 🔧 Technical Support

If you need help with deployment or customization:
1. Check the included `README.md` for basic instructions
2. Run `./deploy.sh` for automated building and deployment
3. The website uses standard web technologies and can be hosted anywhere

## 🌊 Happy Fishing!

Your modern fishing guide website is ready to cast off! The site showcases Captain Dave's expertise and provides visitors with all the information they need to book their next fishing adventure.

---

**Built with ❤️ using the latest and greatest web technologies**