export const personalInfo = {
  name: "Pushkal Garg",
  title: "Machine Learning Researcher & Engineer",
  subtitle: "Building intelligent systems at the intersection of research and production",
  location: "Sydney, Australia",
  email: "gargpushkal07@gmail.com",
  phone: "+61 493 247 645",
  linkedin: "https://www.linkedin.com/in/pushkal-garg",
  github: "#",
  bio: [
    "Data Scientist with experience spanning academic research, large-scale analytics, and production systems across healthcare, finance, public policy, and web platforms.",
    "Authored 11+ peer-reviewed Springer publications and multiple applied research projects, translating data-driven insights into practical decision-support and optimization systems.",
    "Hands-on experience across 9+ research and industry roles, building, maintaining, and improving end-to-end data pipelines, analytical workflows, and software systems handling millions of records."
  ]
};

export const education = [
  {
    degree: "M.Sc Data Science and Decisions",
    specialization: "Business Specialization",
    institution: "University of New South Wales",
    location: "Sydney, Australia",
    period: "Sep 2025 – Sep 2027",
    status: "In Progress",
  },
  {
    degree: "B.Tech Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning (Hons.)",
    institution: "Manipal University Jaipur",
    location: "Jaipur, India",
    period: "June 2021 – June 2025",
    status: "Completed",
    achievement: "4x Student Excellence Awards for Research"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Delhi Public School, Greater Noida",
    location: "Greater Noida, India",
    period: "2021",
    grade: "90%",
    status: "Completed"
  }
];

export const experience = [
  {
  role: "Software Engineer",
  organization: "University of New South Wales (UNSW)",
  location: "Sydney, Australia",
  type: "On-Site",
  period: "Dec 2025 – Present",
  current: true,
  highlights: [
    "Maintaining and enhancing large-scale research databases supporting national-level biodiversity and ecological datasets, ensuring data integrity, consistency, and performance",
    "Investigating, debugging, and resolving data ingestion, transformation, and query-related issues while extending system functionality through automated workflows, schema improvements, and URL-based feature integrations"
  ],
  tags: ["Big Data Analytics", "Automation", "System Enhancement", "R"]
  },
  {
    role: "Research Assistant (Analytics)",
    organization: "H Lab",
    institution: "University of New South Wales (UNSW)",
    location: "Sydney, Australia",
    type: "On-Site",
    period: "Sept 2025 – Dec 2025",
    current: false,
    highlights: [
      "Analyzed 120K+ teacher–school commute records using ACARA and NESA datasets to uncover spatial efficiency and workforce distribution patterns",
      "Developing ML framework in collaboration with Australian education authorities to link housing trends with workforce distribution for policy insights"
    ],
    tags: ["Geospatial Analysis", "Policy Research", "ML", "Python"]
  },
  {
    role: "Research Assistant (ML)",
    organization: "Medicine & Health Lab",
    institution: "University of New South Wales (UNSW)",
    location: "Sydney, Australia",
    type: "On-Site",
    period: "Oct 2025 – Dec 2025",
    current: false,
    highlights: [
      "Developing predictive triage models classifying emergency patients across 5-tier Australasian Triage Scale (ATS 1-5) using Pegasus + ClinicalBERT for dialogue summarization & feature extraction",
      "Designed feedback loop architecture integrating doctor-validated triage corrections for automated model retraining, tracking prediction discrepancies to improve clinical accuracy over time"
    ],
    tags: ["NLP", "Healthcare AI", "ClinicalBERT", "Deep Learning"]
  },
  {
    role: "IT Intern (BI & AI)",
    organization: "Nippon India Mutual Fund (AMC)",
    location: "India",
    type: "On-Site",
    period: "Jan 2025 – Aug 2025",
    current: false,
    highlights: [
      "Engineered SIP analytics system analyzing 5M+ SIPs over 4 regions; identified 43% early-termination rate within 12 months, driving retention policy revamp",
      "Built end-to-end data automation using AWS (Athena, Glue, Sagemaker) with dynamic refresh logic, powering Tableau dashboards and reducing manual effort by 70%",
      "Designed 7+ high-impact dashboards (HNI, Distributors, Master KPIs) used across the organization from RMs to CXOs for strategic decision-making"
    ],
    tags: ["AWS", "Data Engineering", "Tableau", "Business Intelligence"]
  },
  {
    role: "Research and Development Intern",
    organization: "Defence Research Development Organisation (DRDO)",
    institution: "Ministry of Defence, Govt. of India",
    location: "India",
    type: "On-Site",
    period: "May 2024 – July 2024",
    current: false,
    highlights: [
      "Contributed to classified government research projects and authored 5 medical research papers for defense and medical journals",
      "Developed file management system supporting multiple document formats for research documentation"
    ],
    tags: ["Research", "Healthcare", "Government Projects"]
  },
  {
    role: "Summer Intern/Trainee",
    organization: "Defence Research Development Organisation (DRDO)",
    institution: "Ministry of Defence, Govt. of India",
    location: "India",
    type: "On-Site",
    period: "May 2023 – July 2023",
    current: false,
    highlights: [
      "Created 20+ data visualizations for research presentations, effectively communicating complex results",
      "Leveraged expertise in data modeling, statistical analysis, NLP, and machine learning"
    ],
    tags: ["Data Analysis", "Visualization", "NLP", "ML"]
  },
  {
    role: "Web Development Intern",
    organization: "The Urban Thela",
    location: "Remote",
    type: "Remote",
    period: "March 2023 – May 2023",
    current: false,
    highlights: [
      "Optimized theurbanthela.com for performance and created 50+ product mockups",
      "Developed modern user interfaces with JavaScript frameworks, HTML5, CSS3 & WordPress"
    ],
    tags: ["Web Development", "JavaScript", "WordPress", "UI/UX"]
  }
];

export const projects = [
  {
    title: "Enhanced Disease Detection: ML & DL",
    description: "Predictive model forecasting 70+ diseases from 250+ symptoms using deep learning and machine learning algorithms",
    impact: "91.74% accuracy achieved",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Streamlit"],
    highlights: [
      "Created dynamic frontend application for real-time disease prediction",
      "Utilized advanced feature engineering and data analysis for model optimization",
      "Implemented efficient disease identification system"
    ],
    category: "Healthcare AI"
  },
  {
    title: "Depression Among Students: Data Analysis Study",
    description: "Comprehensive data-driven study analyzing depression patterns in 150+ students using psychologically certified surveys",
    impact: "Personalized recommendations provided to 50+ students",
    tech: ["Python", "Scikit-learn", "Tableau", "SQL", "Power BI", "Pandas", "Matplotlib"],
    highlights: [
      "Conducted surveys with psychologically certified questions",
      "Applied advanced preprocessing with one-hot encoding",
      "Created visualizations offering actionable insights through scatterplots and charts"
    ],
    category: "Mental Health Analytics"
  },
  {
    title: "ETF Investor Profile Base Analysis",
    description: "Large-scale investor behavior analysis of 1.38 Crore ETF investors using cloud-based data processing",
    impact: "Identified 1% HNI investors holding 91.25% of ETF AUM",
    tech: ["AWS Athena", "SQL", "Tableau", "Python", "Pandas"],
    highlights: [
      "Analyzed patterns across AUM categories and tenure",
      "Derived strategic insights for re-engaging dormant investors",
      "Built scalable analysis pipeline on AWS infrastructure"
    ],
    category: "Financial Analytics"
  },
  {
  title: "Dynamic Full Stack Website for Local Dining Establishment",
  description: "Developed a dynamic full stack website enabling customers to browse menus, place online reservations, and access restaurant information.",
  impact: "Achieved ~20% reduction in ordering and reservation processing time",
  tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache"],
  highlights: [
    "Built responsive full stack web application with database-driven menu and reservation system",
    "Implemented backend logic using PHP and MySQL to streamline ordering workflows"
  ],
  category: "Full Stack Development"
}
];

export const research = [
  {
    title: "Optimized Machine Learning-based Symptom Analysis for Disease Diagnosis",
    venue: "Springer Book Series (Lecture Notes in Networks and Systems)",
    year: "2025",
    award: "Best Paper Award",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-6329-3_41",
    contribution: "Employed 8+ ML algorithms with GridSearch optimization. Achieved 92.76% accuracy with Gaussian Naive Bayes and GS Decision Tree",
    tags: ["Machine Learning", "Healthcare", "Optimization"],
    abstract: "Comprehensive evaluation of diverse machine learning algorithms including Extra Trees, Gaussian Naive Bayes, Bagging, SGD, LDA, Nearest Centroid, Passive Aggressive Classifier and Ridge Classifier for disease diagnosis from symptoms."
  },
  {
    title: "Predictive Symptom Analysis of Machine Learning Techniques and Deep Learning for Disease Diagnosis",
    venue: "Springer Book Series (Smart Innovation, Systems and Technologies)",
    year: "2024",
    link: "https://doi.org/10.1007/978-981-97-7717-4_29",
    contribution: "Developed disease prediction system with 9+ algorithms. K-Nearest Neighbor achieved 91.74% accuracy, Deep Learning 91.68%",
    tags: ["Deep Learning", "Healthcare", "Ensemble Methods"],
    abstract: "Comparative study of Multinomial Naive Bayes, Random Forest, KNN, Logistic Regression, SVM, Decision Tree, MLP, Deep Learning, and Voting Classifier for predictive symptom analysis."
  },
  {
    title: "Applications of Machine Learning in Marketing: Personalization, Targeting, and Customer Engagement",
    venue: "Springer Book Series (Lecture Notes in Networks and Systems)",
    year: "2025",
    link: "https://doi.org/10.1007/978-981-96-3311-1_12",
    contribution: "Evaluated ML-driven personalization across 5+ marketing functions. Mapped model effectiveness to marketing KPIs",
    tags: ["Business Intelligence", "ML Applications", "Marketing"],
    abstract: "Comprehensive analysis of machine learning applications in modern marketing including segmentation, churn prediction, campaign optimization, and their impact on ROI and engagement metrics."
  },
  {
    title: "Strategic Integration of Artificial Intelligence in Business Decision-Making: A Framework for SMEs and Corporates",
    venue: "SpringerOpen (Journal of Innovation and Entrepreneurship)",
    year: "2025",
    contribution: "Designed SIBAD Framework: five-stage, dual-path AI strategy model for scalable, ethical integration across organizations",
    tags: ["AI Strategy", "Business Framework", "Ethics"],
    abstract: "Presents the Strategic Integration of Business and AI Decision-making (SIBAD) Framework, integrating TOE, Dynamic Capabilities, and AI Governance into a scalable decision system."
  },
  {
    title: "Optimizing Brain Tumor Detection through DCGAN-Enhanced CNN and LightGBM Classifier Integration",
    venue: "Springer Book Series (Lecture Notes in Networks and Systems)",
    year: "2024",
    link: "https://doi.org/10.1007/978-981-96-5370-6_20",
    contribution: "Improved classification accuracy from 94.32% to 98.89% by integrating GANs and LightGBM with VGG19",
    tags: ["Computer Vision", "Healthcare", "GANs", "Deep Learning"],
    abstract: "Developed automated brain tumor classification system using VGG19 for feature extraction, DCGANs for data augmentation, and LightGBM classifier achieving state-of-the-art accuracy."
  },
  {
    title: "End-to-End Encryption: Evolution, Barriers, and Emerging Trends",
    venue: "Springer Book Series (Deep Quantum Neural Networks: Pioneering AI for 6G/7G Communication Systems)",
    year: "2025",
    link: "https://link.springer.com/chapter/10.1007/978-981-95-1683-4_8",
    contribution:
      "Conducted a multidisciplinary review of end-to-end encryption systems, analyzing cryptographic foundations, platform-level deployments, and socio-ethical challenges.",
    tags: ["Cryptography", "Security", "Privacy"],
    abstract:
      "This paper presents a comprehensive review of End-to-End Encryption (E2EE) in modern communication systems. It examines core cryptographic techniques such as AES, RSA, and Diffie–Hellman key exchange alongside real-world implementations in platforms like WhatsApp. Beyond technical considerations, the study addresses usability issues, interface vulnerabilities, and socio-ethical challenges, identifying research gaps in automated authentication and audio-channel security. The work emphasizes the need for interdisciplinary collaboration to balance privacy, usability, lawful access, and public trust."
  },
  {
    title: "Plant Disease Detection Using Deep Learning",
    venue: "Springer Book Series (Lecture Notes in Networks and Systems)",
    year: "2024",
    link: "https://doi.org/10.1007/978-981-96-2700-4_27",
    contribution:
      "Implemented transfer learning-based CNN models for automated plant disease detection using large-scale agricultural image datasets.",
    tags: ["Computer Vision", "Agricultural AI", "Deep Learning"],
    abstract:
      "This study presents an automated plant disease detection framework leveraging transfer learning with pre-trained CNN architectures such as ResNet50 and MobileNetV2. Using the PlantVillage dataset containing over 54,000 images, the system achieved strong performance across accuracy, precision, recall, and F1-score metrics, demonstrating the feasibility of deep learning-based diagnostics for agricultural applications."
  },
  {
    title: "Analysis of End-to-End Encryption Research: Developments, Limitations, and Future Directions",
    venue: "ACM – International Symposium of Data Science",
    year: "2023",
    link: "http://drive.google.com/file/d/1_i-IqWDGhMG0SEsFDkBqWVEeI5zg2vaF/view?usp=sharing",
    contribution:
      "Performed a critical interdisciplinary synthesis of end-to-end encryption research spanning cryptography, policy, usability, and societal trust.",
    tags: ["Security", "Policy", "Interdisciplinary Research"],
    abstract:
      "This paper synthesizes contemporary research on end-to-end encryption by integrating technical developments in cryptography with legal, policy, and usability considerations. It highlights key limitations in current E2EE implementations and emphasizes the importance of cross-disciplinary collaboration to address challenges related to privacy, lawful access, system usability, and public trust."
  },
  {
    title: "Controlled Text Generation with Tonal Preservation and Semantic Fidelity",
    venue: "IEEE Xplore",
    year: "2023",
    contribution:
      "Developed a controlled text generation approach combining GPT-2 with rule-based tone control and embedding-based semantic validation.",
    tags: ["NLP", "Text Generation", "Language Models"],
    abstract:
      "This work proposes a controlled text generation framework that preserves semantic meaning while maintaining tonal consistency. The method integrates GPT-2 with rule-based tone modulation, FAISS-based similarity filtering, and cross-validation evaluation. Experimental results demonstrate improved tone consistency with minimal semantic degradation, highlighting a practical balance between controllability and natural language generation quality."
  },
  {
    title: "Additional Research Papers",
    venue: "Various Springer Publications",
    year: "2024-2025",
    contribution: "3+ additional peer-reviewed papers covering ML applications, healthcare AI, and business intelligence",
    tags: ["ML", "AI", "Healthcare", "Business"],
    abstract: "Multiple publications addressing various aspects of machine learning, artificial intelligence applications in healthcare, business decision-making, and computational intelligence."
  }
];

export const skills = {
  "Machine Learning & AI": [
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Recommender Systems",
    "Ensemble Methods",
    "Neural Networks"
  ],
  "Data Science & Analytics": [
    "Statistical Analysis",
    "Data Modeling",
    "Data Visualization",
    "Big Data Analytics",
    "Predictive Modeling",
    "A/B Testing"
  ],
  "Cloud & Infrastructure": [
    "AWS (Glue, SageMaker, Athena)",
    "Data Pipelines",
    "ETL Processes",
    "Cloud Architecture",
    "Distributed Systems"
  ],
  "Programming & Tools": [
    "Python",
    "SQL / MySQL",
    "R",
    "C",
    "PHP",
    "HTML/CSS"
  ],
  "Frameworks & Libraries": [
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "OpenCV",
    "Streamlit"
  ],
  "Business Intelligence": [
    "Tableau",
    "Power BI",
    "Dashboard Design",
    "KPI Development",
    "Strategic Analytics"
  ],
  "Development": [
    "Full Stack Development",
    "Web Development",
    "API Design",
    "Database Design",
    "WordPress"
  ]
};

export const awards = [
  {
    title: "Best Paper Award",
    organization: "Springer Conference",
    year: "2025",
    description: "Optimized Machine Learning-based Symptom Analysis for Disease Diagnosis"
  },
  {
    title: "Student Excellence Awards (4x)",
    organization: "Manipal University Jaipur",
    year: "2021-2025",
    description: "Excellence in Research and Academic Performance"
  },
  {
    title: "2nd Place - CryptX",
    organization: "Randomize MUJ",
    year: "2023-2024",
    description: "Cryptic Hunt - CTF Format"
  },
  {
    title: "2nd Place - WebStorm Wizard CTF",
    organization: "SCSE MUJ",
    year: "2023-2024",
    description: "Cybersecurity Capture The Flag Competition"
  },
  {
    title: "2nd Place - Cypher Crusade",
    organization: "ACM SIGAI MUJ",
    year: "2023-2024",
    description: "Cryptography and Cipher Solving"
  },
  {
    title: "3rd Place - Decode",
    organization: "ACM MUJ",
    year: "2023-2024",
    description: "Pan-India Cryptic Hunt"
  },
  {
    title: "3rd Place - Brea(cout)",
    organization: "IEEE MUJ",
    year: "2023-2024",
    description: "Technical Competition"
  },
  {
    title: "2nd Place - Innovates",
    organization: "ACM SIGBED MUJ",
    year: "2023-2024",
    description: "Innovation Challenge"
  },
  {
    title: "IELTS Academic - 8.0/9.0",
    organization: "IDP",
    year: "2024",
    description: "Listening: 9/9, Reading: 9/9, Writing: 7/9, Speaking: 7/9"
  }
];

export const leadership = [
  {
    role: "General Secretary & Director of International Collaborations",
    organization: "International Student Cell",
    institution: "Manipal University Jaipur",
    period: "Dec 2023 – Dec 2024",
    highlights: [
      "Led organization of 50+ events, meetings, and delegation visits",
      "Promoted global opportunities for 8000+ students including exchanges, internships, and research collaborations",
      "Facilitated cross-cultural experiences across 20+ countries"
    ]
  },
  {
    role: "Technical Secretary",
    organization: "Association of Computing Machinery, SIGAI",
    institution: "Manipal University Jaipur",
    period: "May 2022 – May 2024",
    highlights: [
      "Oversaw Project and Research teams ensuring technical quality assurance",
      "Spearheaded implementation of programs fostering AI culture for 8000+ students",
      "Managed technical workshops and research initiatives"
    ]
  }
];

export const certifications = [
  {
    name: "IELTS Academic",
    issuer: "IDP",
    year: "2024",
    score: "8.0/9.0",
    details: "Listening: 9/9, Reading: 9/9, Writing: 7/9, Speaking: 7/9"
  },
  {
    name: "Google Data Analytics Specialization",
    issuer: "Google",
    year: "2023-2024"
  },
  {
    name: "Kaggle Machine Learning Specialization",
    issuer: "Kaggle",
    year: "2023-2024"
  },
  {
    name: "FreeCodeCamp Responsive Web Design Specialization",
    issuer: "FreeCodeCamp",
    year: "2023"
  },
  {
    name: "Design and Analysis of Algorithms",
    issuer: "NPTEL",
    year: "2023",
    grade: "Merit"
  }
];
