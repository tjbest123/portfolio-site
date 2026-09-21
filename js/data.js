const portfolioData = {
    personal: {
        bio: "<p>Hi, my name is Travis, a New York based cloud professional and AWS Certified Cloud Practitioner with a unique background in project management and operations.</p><p>Transitioning from coordinating complex project logistics to architecting digital environments, I specialize in translating operational bottlenecks into secure, automated cloud solutions. My entry into tech started with generative AI and workflow automation with n8n, which sparked a deep interest in infrastructure as code and resilient systems design.</p><p>Currently engaged in a cloud engineering apprenticeship though New York State, my technical focus spans the AWS ecosystem, Python, Linux, Terraform, and Docker. Whether I'm building automated data pipelines or studying for my AWS Solutions Architect certification, my goal is always to design scalable, highly available infrastructure.</p>",
        email: "travisjohnson5261@gmail.com",
        linkedin: "https://linkedin.com/in/travisjohnson5261",
        github: "https://github.com/tjbest123"
    },
    skills: [

        { name: "AWS Core (EC2, S3, VPC, IAM)", icon: "<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' alt='AWS'>" },
        { name: "AWS (RDS, Lambda, ASG)", icon: "<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' alt='AWS'>" },
        { name: "n8n Automation", icon: "<img src='https://cdn.simpleicons.org/n8n' alt='n8n'>" },
        { name: "Python", icon: "<img src='https://cdn.simpleicons.org/python' alt='Python'>" },
        { name: "Linux", icon: "<img src='https://cdn.simpleicons.org/linux' alt='Linux'>" },
        { name: "Terraform (Learning)", icon: "<img src='https://cdn.simpleicons.org/terraform' alt='Terraform'>" },
        { name: "Docker & K8s (Learning)", icon: "<img src='https://cdn.simpleicons.org/docker' alt='Docker'> <img src='https://cdn.simpleicons.org/kubernetes' alt='Kubernetes'>" }
    ],
    projects: [
        {
            id: 1,
            title: "AI News Anchor & Video Generator",
            type: "n8n",
            description: "An advanced multi-modal n8n workflow that scrapes 20+ RSS feeds daily, uses Claude & Gemini to write a 1600-word news script, generates voiceover via OpenAI TTS, stitches the audio to a background image using FFmpeg, and automatically uploads the final video to YouTube.",
            tech: ["n8n", "Anthropic Claude", "OpenAI TTS", "FFmpeg", "YouTube API"],
            link: "news-generator-docs.html",
            github: "https://github.com/tjbest123/n8n-automations/tree/main/news-generator"
        },
        {
            id: 2,
            title: "AI Recruiter & Job Hunter",
            type: "n8n",
            description: "Automated job hunting pipeline that scrapes Google Jobs via SerpApi for specific Project Management roles. It utilizes LangChain and Claude to evaluate each listing against my resume, scoring the 'fit' and logging qualified leads directly into Google Sheets.",
            tech: ["n8n", "LangChain", "SerpApi", "Google Sheets", "JavaScript"],
            link: "job-hunter-docs.html",
            github: "https://github.com/tjbest123/n8n-automations/tree/main/job-hunter"
        },
        {
            id: 3,
            title: "Viral Content Reverse-Engineer",
            type: "n8n",
            description: "A YouTube Data API scraper that identifies high-performing Minecraft Shorts from small creators. It uses an AI strategist agent to analyze viral hooks and generate solo-player script adaptations, logging the insights into Google Sheets.",
            tech: ["n8n", "YouTube API", "Google Gemini", "JavaScript", "Google Sheets"],
            link: "minecraft-scraper-docs.html",
            github: "https://github.com/tjbest123/n8n-automations/tree/main/youtube-scraper"
        },
        {
            id: 4,
            title: "Serverless AWS Portfolio Architecture",
            type: "cloud",
            description: "Engineered a secure, globally distributed static portfolio website hosted entirely on AWS. Utilizing S3 for origin storage, CloudFront for global CDN edge caching, AWS Certificate Manager for SSL/TLS encryption, and Route 53 for custom domain DNS routing.",
            tech: ["AWS S3", "CloudFront", "Route 53", "ACM", "HTML/CSS/JS"],
            link: "cloud-resume-docs.html",
            github: "https://github.com/tjbest123/portfolio-site"
        }
    ],
    experience: [
        {
            date: "Jan 2024 - March 2026",
            title: "Assistant Project Manager",
            company: " Juliel & Co | New York, NY",
            description: "Coordinated budgets, schedules, and deliverables for 50+ projects. Negotiated vendor contracts contributing to $100K+ in revenue and directed logistics among 30+ stakeholders."
        },
        {
            date: "Sept 2023 - Dec 2023",
            title: "Operations & Procurement Coordinator",
            company: "New York Decks | New York, NY",
            description: "Streamlined material tracking and documentation across multiple projects, reducing costs by 8%. Minimized material handling time by 20% through cross-team coordination."
        },
        {
            date: "June 2023 - June 2024",
            title: "Assistant Project Manager",
            company: "Brooklyn Navy Yard Development Corporation | New York, NY",
            description: "Analyzed 100+ vendor RFPs and prepared cost comparison reports. Developed and maintained rent schedules for 100+ tenants in a multi-use property."
        },
        {
            date: "Oct 2018 - Mar 2020",
            title: "Business Analyst",
            company: "Mec Café | New York, NY",
            description: "Audited 5,000+ monthly transactions, identifying inefficiencies and streamlining financial reporting. Increased profitability by 39% via operations streamlining and market analysis."
        }
    ]
};
