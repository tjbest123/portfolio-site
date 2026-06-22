document.addEventListener('DOMContentLoaded', () => {
    // --- MATRIX ANIMATION ---
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 16;
        let columns = Math.floor(canvas.width / fontSize);
        let drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)'; // Fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41'; // Matrix Green
            ctx.font = fontSize + 'px "Fira Code", monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 33); // ~30fps
    }

    // --- TYPEWRITER ANIMATION ---
    const typewriterText = document.getElementById('typewriter-text');
    if (typewriterText) {
        const lines = [
            "Provisioning infrastructure with Terraform...",
            "Containerizing applications with Docker...",
            "Orchestrating pods with Kubernetes...",
            "Automating CI/CD with GitHub Actions...",
            "Mastering Linux command line & shell scripting...",
            "Studying for AWS Solutions Architect (SAA-C03)...",
            "Engineering a custom 50TB home media server..."
        ];
        
        let lineIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentLine = lines[lineIndex];
            
            if (isDeleting) {
                typewriterText.textContent = currentLine.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterText.textContent = currentLine.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 30 : 60;
            
            if (!isDeleting && charIndex === currentLine.length) {
                typeSpeed = 2500; // Pause at end of line
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                lineIndex = (lineIndex + 1) % lines.length;
                typeSpeed = 500; // Pause before starting new line
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        setTimeout(typeWriter, 1500); // Initial start delay
    }

    // --- LOAD DATA ---
    document.getElementById('bio-text').innerHTML = portfolioData.personal.bio;
    
    // Set Links
    document.getElementById('link-email').href = `mailto:${portfolioData.personal.email}`;
    document.getElementById('link-linkedin').href = portfolioData.personal.linkedin;
    document.getElementById('link-github').href = portfolioData.personal.github;

    // Load Skills
    const skillsGrid = document.getElementById('skills-grid');
    portfolioData.skills.forEach(skill => {
        const skillPill = document.createElement('div');
        skillPill.className = 'skill-pill';
        skillPill.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <span class="skill-name">${skill.name}</span>
        `;
        skillsGrid.appendChild(skillPill);
    });

    // Load Projects
    const projectsGrid = document.getElementById('projects-grid');
    const renderProjects = (filter = 'all') => {
        projectsGrid.innerHTML = '';
        const filtered = filter === 'all' 
            ? portfolioData.projects 
            : portfolioData.projects.filter(p => p.type === filter);
        
        filtered.forEach(project => {
            const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-content">
                    <div class="project-type">${project.type === 'n8n' ? 'n8n Automation' : 'Cloud Infra'}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">${techTags}</div>
                    <div class="project-links" style="display: flex; gap: 1rem; margin-top: auto; padding-top: 1rem;">
                        ${project.github !== '#' ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">↗ GitHub</a>` : ''}
                        ${project.link !== '#' ? `<a href="${project.link}" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">📄 View Documentation</a>` : ''}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    };
    renderProjects();

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(e.target.dataset.filter);
        });
    });

    // Load Experience
    const timeline = document.getElementById('timeline');
    portfolioData.experience.forEach(job => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${job.date}</div>
            <h3 class="timeline-title">${job.title}</h3>
            <div class="timeline-company">${job.company}</div>
            <p class="timeline-desc">${job.description}</p>
        `;
        timeline.appendChild(item);
    });

    // Set Footer Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- INTERACTIVITY ---
    
    // Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 255, 65, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 5, 5, 0.95)';
            navLinks.style.padding = '20px';
            navLinks.style.textAlign = 'center';
        }
    });
});
