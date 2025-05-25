// Function to show/hide the recommendation popup
function showPopup(bool) {
    const popup = document.getElementById('popup');
    if (popup) {
        if (bool) {
            popup.style.display = 'flex';
        } else {
            popup.style.display = 'none';
        }
    }
}

// Function to add a recommendation
function addRecommendation() {
    const recommendationText = document.getElementById('new_recommendation').value;
    if (recommendationText.trim() !== '') {
        const recommendationsContainer = document.getElementById('all_recommendations');
        const newRecommendationDiv = document.createElement('div');
        newRecommendationDiv.className = 'recommendation';
        newRecommendationDiv.innerHTML = `
            <span>&#8220;</span>
            ${recommendationText}
            <span>&#8221;</span>
        `;
        recommendationsContainer.appendChild(newRecommendationDiv);
        document.getElementById('new_recommendation').value = ''; // Clear the textarea
        document.querySelector('#popup h3').textContent = 'Thank you for your recommendation!';
        showPopup(true);
    } else {
        document.querySelector('#popup h3').textContent = 'Please enter a recommendation message.';
        showPopup(true);
    }
}

// --- NEW/UPDATED CODE FOR SKILL MODAL ---

const skillDetails = {
    'ml': {
        title: 'AI & Machine Learning Expertise',
        info: `
            <p>My proficiency in AI and Machine Learning covers the entire lifecycle, from conceptualization to deployment and monitoring. I specialize in building intelligent systems that learn and adapt.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>End-to-End ML Pipelines:</strong> Designing, training, evaluating, and deploying robust machine learning models.</li>
                <li><strong>Advanced AI Techniques:</strong> Including Generative AI, Federated Learning, Neuro-symbolic AI, Differential Privacy, and Physics-Informed Neural Networks.</li>
                <li><strong>Intelligent Agent Development:</strong> Building chatbots, sentiment analysis tools, and product recommendation engines.</li>
                <li><strong>MLOps & Ethical AI:</strong> Implementing best practices for operationalizing ML models and ensuring fairness, transparency, and security in AI systems.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Developed predictive models for customer churn and sales forecasting.</li>
                <li>Implemented recommendation systems for e-commerce platforms.</li>
                <li>Built conversational AI agents for customer support and information retrieval.</li>
                <li>Designed and deployed computer vision models for object detection and image classification.</li>
            </ul>
        `
    },
    'data': {
        title: 'Big Data & Analytics Capabilities',
        info: `
            <p>I excel at transforming raw, complex datasets into clear, actionable insights. My skills span the entire data pipeline, ensuring data integrity and effective communication of findings.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Data Lifecycle Management:</strong> From scraping and validation to normalization, scaling, augmentation, and secure storage.</li>
                <li><strong>Data Visualization & Reporting:</strong> Creating compelling dashboards and reports to convey data stories effectively.</li>
                <li><strong>Big Data Technologies:</strong> Working with distributed processing frameworks for large-scale data handling.</li>
                <li><strong>Statistical Analysis:</strong> Applying statistical methods for in-depth data understanding.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Designed and implemented data warehousing solutions for business intelligence.</li>
                <li>Developed interactive dashboards for tracking key performance indicators (KPIs).</li>
                <li>Performed extensive data cleaning and feature engineering for machine learning projects.</li>
                <li>Conducted market basket analysis to identify product associations and improve sales strategies.</li>
            </ul>
        `
    },
    'web-app': {
        title: 'Full-Stack Web & App Development',
        info: `
            <p>As a full-stack developer, I build comprehensive web and application solutions, handling both front-end user interfaces and back-end server logic and databases.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Front-End Development:</strong> Crafting responsive, intuitive, and engaging user experiences.</li>
                <li><strong>Back-End Development:</strong> Building robust server-side applications and APIs.</li>
                <li><strong>Database Management:</strong> Designing and interacting with various database systems.</li>
                <li><strong>API Integration:</strong> Connecting different services and platforms through well-defined APIs.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Developed dynamic multi-page web applications for various business needs.</li>
                <li>Built RESTful APIs to power mobile and web applications.</li>
                <li>Created interactive dashboards for data visualization and management.</li>
                <li>Implemented user authentication and authorization systems.</li>
            </ul>
        `
    },
    'python': {
        title: 'Python Development',
        info: `
            <p>Python is my primary language for a wide range of applications, from data science and machine learning to web development and automation.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Data Science & ML:</strong> Extensive use of libraries like Pandas, NumPy, Scikit-Learn, TensorFlow, and PyTorch.</li>
                <li><strong>Web Development:</strong> Building back-end systems with frameworks like Django and Flask.</li>
                <li><strong>Scripting & Automation:</strong> Developing scripts for system administration, data processing, and cybersecurity tasks.</li>
                <li><strong>API Development:</strong> Creating and consuming RESTful APIs.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Developed data analysis scripts for large datasets.</li>
                <li>Built web scrapers for gathering public information.</li>
                <li>Created command-line tools for various automation tasks.</li>
                <li>Implemented machine learning algorithms from scratch for educational purposes.</li>
            </ul>
        `
    },
    'html': {
        title: 'HTML5 Proficiency',
        info: `
            <p>I build the foundational structure of web pages using clean, semantic HTML5, ensuring accessibility and search engine optimization.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Semantic Markup:</strong> Using appropriate HTML5 tags for better structure and meaning.</li>
                <li><strong>Accessibility:</strong> Implementing ARIA attributes and best practices for inclusive web design.</li>
                <li><strong>Form Design:</strong> Creating user-friendly and validated web forms.</li>
                <li><strong>Cross-Browser Compatibility:</strong> Ensuring consistent rendering across different web browsers.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Structured content for various responsive web layouts.</li>
                <li>Developed accessible navigation menus and interactive elements.</li>
                <li>Created HTML templates for email marketing campaigns.</li>
            </ul>
        `
    },
    'javascript': {
        title: 'JavaScript & TypeScript Development',
        info: `
            <p>I bring web pages to life with dynamic and interactive functionalities using JavaScript, and enhance code quality and scalability with TypeScript.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>DOM Manipulation:</strong> Creating dynamic content and interactive user interfaces.</li>
                <li><strong>Event Handling:</strong> Responding to user interactions and system events.</li>
                <li><strong>Asynchronous Programming:</strong> Managing data fetching and complex operations efficiently.</li>
                <li><strong>TypeScript:</strong> Leveraging static typing for robust and maintainable large-scale applications.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Developed client-side form validation and interactive UI components.</li>
                <li>Implemented dynamic content loading and filtering features.</li>
                <li>Built single-page applications using modern JavaScript frameworks.</li>
                <li>Created interactive data visualizations directly in the browser.</li>
            </ul>
        `
    },
    'cybersecurity': {
        title: 'Cybersecurity (CISSP Level)',
        info: `
            <p>My cybersecurity knowledge, aligned with CISSP principles, focuses on securing systems and data against evolving threats through proactive measures and incident response.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Security Architecture:</strong> Designing and implementing secure systems and networks.</li>
                <li><strong>Penetration Testing & Ethical Hacking:</strong> Identifying vulnerabilities through simulated attacks.</li>
                <li><strong>Encryption & Cryptography:</strong> Protecting data at rest and in transit.</li>
                <li><strong>Risk Management:</strong> Assessing and mitigating security risks.</li>
                <li><strong>Incident Response:</strong> Developing and executing plans for security breaches.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Conducted security audits and vulnerability assessments for web applications.</li>
                <li>Developed security policies and procedures for data protection.</li>
                <li>Implemented network segmentation and firewall rules for enhanced security.</li>
                <li>Created Python scripts for security automation and log analysis.</li>
            </ul>
        `
    },
    'r': {
        title: 'R Data Analysis',
        info: `
            <p>I utilize R for advanced statistical computing, data visualization, and complex data analysis, particularly in statistical modeling and scientific research contexts.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Statistical Modeling:</strong> Building and evaluating various statistical models (regression, classification, time series).</li>
                <li><strong>Data Visualization:</strong> Creating high-quality static and interactive plots for data exploration and presentation.</li>
                <li><strong>Data Wrangling:</strong> Efficiently cleaning, transforming, and manipulating diverse datasets.</li>
                <li><strong>Reproducible Research:</strong> Using RMarkdown for dynamic reporting and reproducible analysis.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Performed exploratory data analysis on large public datasets.</li>
                <li>Developed statistical models to predict outcomes in various domains.</li>
                <li>Created custom data visualization packages or scripts.</li>
                <li>Conducted A/B testing analysis for marketing campaigns.</li>
            </ul>
        `
    },
    'cloud': {
        title: 'Cloud Computing (AWS, GCP, Azure)',
        info: `
            <p>My expertise in cloud computing involves architecting, deploying, and managing scalable, secure, and cost-effective solutions across leading cloud platforms.</p>
            <h4>Key Areas:</h4>
            <ul>
                <li><strong>Infrastructure as Code (IaC):</strong> Automating infrastructure provisioning and management.</li>
                <li><strong>Serverless Architectures:</strong> Designing and deploying event-driven, serverless applications.</li>
                <li><strong>Cloud Security:</strong> Implementing robust security controls and compliance in cloud environments.</li>
                <li><strong>Cloud-Native ML Services:</strong> Utilizing platform-specific services for machine learning workloads.</li>
            </ul>
            <h4>Projects Undertaken:</h4>
            <ul>
                <li>Deployed scalable web applications using cloud services (e.g., EC2, App Engine, Azure App Service).</li>
                <li>Set up CI/CD pipelines for cloud-based deployments.</li>
                <li>Managed cloud databases and data warehousing solutions.</li>
                <li>Orchestrated containerized applications using Kubernetes services in the cloud.</li>
            </ul>
        `
    }
};

function showSkillInfo(skillKey) {
    const modal = document.getElementById('skill-modal');
    const titleElement = document.getElementById('modal-skill-title');
    const infoElement = document.getElementById('modal-skill-info');

    const details = skillDetails[skillKey];

    if (details) {
        titleElement.innerHTML = details.title;
        infoElement.innerHTML = details.info;
        modal.style.display = 'flex'; // Show the modal
    } else {
        console.error('Skill details not found for key:', skillKey);
    }
}

function closeSkillModal() {
    const modal = document.getElementById('skill-modal');
    modal.style.display = 'none'; // Hide the modal
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('skill-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}