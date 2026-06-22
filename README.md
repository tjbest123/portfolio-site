# Cloud Engineering Portfolio 🚀

Welcome to the source code for my professional Cloud Engineering and DevOps portfolio! This repository contains the raw HTML, CSS, and JavaScript that powers my interactive capability matrix and project showcase.

## 🏗️ Architecture & Deployment

This project is built from the ground up without heavy frontend frameworks to demonstrate an understanding of core web technologies and raw performance. 

It is designed to be hosted statically via **AWS S3 Static Website Hosting**, demonstrating foundational cloud infrastructure concepts.

### **Tech Stack**
- **Structure:** HTML5
- **Styling:** Vanilla CSS3 (Custom properties, Flexbox, CSS Grid)
- **Logic & Interactions:** Vanilla JavaScript (ES6+)
- **Hosting / Infrastructure:** Amazon Web Services (S3)

## 🌟 Key Features

- **Dynamic Data Injection:** The `js/data.js` file acts as a localized database, cleanly decoupling the content from the HTML structure.
- **Capability Matrix:** A fully responsive, flex-based UI that presents skills as glowing technical pills alongside AWS credential plaques.
- **Interactive Terminal:** An automated terminal typing animation in the hero section that executes a mock shell script.
- **Formspree Integration:** A fully functional, serverless contact form.

## 🚀 Running Locally

Because this is a static site with no node modules or build steps, running it locally is incredibly easy.

1. Clone the repository:
   ```bash
   git clone https://github.com/tjbest123/portfolio-site.git
   ```
2. Navigate into the directory:
   ```bash
   cd portfolio-site
   ```
3. Open `index.html` in your web browser of choice, or use a local development server like Python's `http.server` or VS Code Live Server to avoid CORS issues if you expand on the JavaScript:
   ```bash
   python -m http.server 8000
   ```

## 📜 License
This project is open-source and available under the MIT License. Feel free to use the layout and structure for your own portfolio!
