export const projects = [
  {
    id: "civicone",
    number: "01",
    title: "CIVICONE",
    subtitle: "Digital Identity & Sovereign Access Platform",
    category: "DIGITAL IDENTITY PLATFORM",
    description: "A digital identity and organization platform designed to connect citizens with government, education, healthcare, banking and financial services, and private-sector organizations.",
    featured: true,
    status: "Proof of Concept / Architecture",
    technologies: ["React", "Django", "Python", "REST API", "SSI & Crypto", "Digital Identity"],
    github: "https://github.com/charveshkumar",
    live: "",
    imageGradient: "from-red-900/40 via-zinc-900 to-black",
    accentColor: "#E50920",
    overview: "CIVICONE explores next-generation citizen identity management by centralizing verification and access across public and private sectors without compromising data sovereignty.",
    problem: "Citizens struggle with fragmented identity documentation across healthcare, education, banking, and government portals, leading to repeated manual verifications, security risks, and data silos.",
    solution: "A unified digital identity ecosystem utilizing self-sovereign identity principles, cryptographic tokens, and encrypted certificate locking to give users complete control over credentials.",
    features: [
      "Cross-Sector Integration: Connects government, education, healthcare, banking, and private services.",
      "Digital Certificate Management: Lock and unlock certificates, control view access for healthcare and insurance.",
      "Identity-Based Authorization: Granular permission controls powered by cryptographic proofs.",
      "Aadhaar Data Vault Concepts: Secure tokenization and vault architecture guidelines.",
      "Self-Sovereign Identity (SSI) Exploration: Explores JWS signatures and Zero-Knowledge Proof (ZKP) foundations."
    ],
    architecture: "React Frontend ↔ RESTful API Gateway ↔ Django Security Backend ↔ Cryptographic Vault & Database",
    developmentProcess: "Conceptualized the system schema based on decentralized identity frameworks, designed the user credential flow, implemented prototype UI modules in React, and architected API endpoints in Django.",
    challenges: "Balancing strict cryptographic security with an intuitive user experience for citizens accessing multi-sector documents.",
    results: "Established a robust architectural blueprint and front-end interface demonstrating seamless certificate access control."
  },
  {
    id: "academia-ai",
    number: "02",
    title: "ACADEMIA AI",
    subtitle: "Student Academic Resource & AI Tutor Platform",
    category: "GENERATIVE AI / EDUCATION",
    description: "A full-stack academic resource and AI learning platform designed for engineering students, centralizing lecture notes, presentations, question banks, syllabus materials, and AI-powered learning tools.",
    featured: true,
    status: "Active Development",
    technologies: ["Python", "React", "RAG", "LLMs", "Embeddings", "Vector Search", "Generative AI"],
    github: "https://github.com/charveshkumar",
    live: "",
    imageGradient: "from-zinc-900 via-neutral-900 to-red-950/40",
    accentColor: "#E50920",
    overview: "Academia AI transforms traditional study materials into an interactive, AI-enhanced knowledge portal built specifically around engineering curricula.",
    problem: "Engineering students spend excessive time scouring disparate drives and chat channels for relevant syllabus materials and lecture slides, lacking instant contextual assistance.",
    solution: "A structured repository paired with a Retrieval-Augmented Generation (RAG) agent that answers questions directly using institutional study material with explicit citations.",
    features: [
      "Hierarchical Academic Archive: Department → Batch → Year → Semester → Subject → Unit → Materials.",
      "RAG AI Tutor: Multi-turn conversational assistant providing cited answers strictly from course notes.",
      "Automatic Summarization & Question Generation: One-click creation of unit summaries and practice tests.",
      "Interactive 3D Flashcards: Memory retention tools rendered with sleek 3D flipping states.",
      "Community Q&A Forum: Collaborative discussion board tied directly to specific subject modules."
    ],
    architecture: "React Single Page App ↔ Fast-Retrieval Python Backend ↔ Vector Database (Embeddings) ↔ LLM Integration",
    developmentProcess: "Designed the 7-level taxonomy for academic assets, ingested textbook/lecture PDFs into vector chunks, and built the interactive React dashboard with citation tooltips.",
    challenges: "Preventing AI hallucinations by enforcing strict vector retrieval boundaries around specific course units.",
    results: "Built a fully functional prototype organizing CSE curriculum units with instant contextual Q&A capabilities."
  },
  {
    id: "tower-detection",
    number: "03",
    title: "AI TOWER DETECTION",
    subtitle: "Deep Learning Communication Tower Inspector",
    category: "COMPUTER VISION",
    description: "A computer vision system designed to detect and classify communication tower structures from images using deep-learning-based object detection powered by YOLO11m.",
    featured: true,
    status: "Completed Prototype",
    technologies: ["Python", "YOLO11m", "OpenCV", "Computer Vision", "Deep Learning", "Roboflow"],
    github: "https://github.com/charveshkumar",
    live: "",
    imageGradient: "from-red-950/50 via-zinc-900 to-black",
    accentColor: "#E50920",
    overview: "Automating visual inspection of telecommunication infrastructure through deep learning object detection pipelines.",
    problem: "Manual site inspections of telecom towers are slow, hazardous, and costly. Automated automated detection of structural types in drone imagery is essential for rapid asset tracking.",
    solution: "Trained a YOLO11m object detection model to scan aerial and ground-level images, bounding and classifying structural tower types in real-time.",
    features: [
      "Dataset Cleaning & Preprocessing: Filtered raw images, balanced class distributions, and applied spatial augmentations.",
      "Custom Annotation & Labeling: Bounding box annotation for supporting towers, monopole towers, and surrounding equipment.",
      "Model Training & Fine-Tuning: Trained YOLO11m using custom hyperparameters, early stopping, and loss monitoring.",
      "Class Differentiation: Accurate classification between lattice supporting towers and single-tube monopole structures.",
      "Inference Pipeline: OpenCV-driven visualization scripts rendering confidence scores and bounding boxes."
    ],
    architecture: "Image Dataset Ingestion → Annotation & Preprocessing → YOLO11m PyTorch Engine → OpenCV Visualizer",
    developmentProcess: "Collected diverse tower image samples, annotated bounding boxes across distinct classes, configured YOLO training pipelines in Python, and benchmarked validation performance.",
    challenges: "Handling varying background noise such as sky gradients, trees, and dense urban terrain behind thin metal lattice structures.",
    results: "Successfully trained model detecting monopole and lattice towers with high bounding box precision."
  },
  {
    id: "habit-tracker",
    number: "04",
    title: "HABIT TRACKER",
    subtitle: "Interactive Visual Progress & Consistency Dashboard",
    category: "WEB APPLICATION",
    description: "An interactive habit-tracking dashboard designed to visualize consistency, progress and daily habits through a modern user interface.",
    featured: true,
    status: "Production Ready",
    technologies: ["React", "Vite", "JavaScript", "Chart.js", "Tailwind CSS", "LocalStorage"],
    github: "https://github.com/charveshkumar",
    live: "",
    imageGradient: "from-zinc-900 via-neutral-900 to-zinc-950",
    accentColor: "#E50920",
    overview: "A sleek productivity tool designed to help users build momentum through visual streak tracking and analytical charts.",
    problem: "Most habit apps are cluttered, push subscription paywalls, or fail to give users visual motivation through clean historical analytics.",
    solution: "A lightweight, dark-themed dashboard leveraging Chart.js to render daily habit feeds, streak counters, and heatmaps with zero external server dependencies.",
    features: [
      "Habit Feed & Management: Add, edit, archive, and complete daily tasks with one-click toggles.",
      "Interactive Consistency Graph: Visual calendar heatmaps and completion trend charts powered by Chart.js.",
      "Custom Theme Adjustments: Sleek dark mode aesthetics with custom accent highlights.",
      "Offline LocalStorage Persistence: Instant state save and recovery directly inside the browser.",
      "Analytics Overview: Weekly completion rates, longest streaks, and productivity breakdowns."
    ],
    architecture: "React Component Hierarchy → Context API State Manager → Chart.js Renderer → Browser LocalStorage",
    developmentProcess: "Built reusable React component state hooks, configured dynamic canvas charts, and styled the UI with dark modern cards and smooth transitions.",
    challenges: "Calculating continuous streaks and handling missing dates cleanly in local state.",
    results: "Delivered an ultra-responsive client-side web application with instant data persistence."
  },
  {
    id: "student-dbms",
    number: "05",
    title: "STUDENT DBMS",
    subtitle: "Full-Stack Academic Data & Course Management System",
    category: "FULL-STACK WEB APPLICATION",
    description: "A Django-based Student Database Management System designed to manage students, courses, assignments and academic information.",
    featured: true,
    status: "Completed Project",
    technologies: ["Python", "Django", "SQLite", "HTML5", "CSS3", "Django ORM"],
    github: "https://github.com/charveshkumar",
    live: "",
    imageGradient: "from-red-950/30 via-zinc-900 to-black",
    accentColor: "#E50920",
    overview: "A structured full-stack web application implementing clean Model-View-Template (MVT) architecture for institutional records.",
    problem: "Manual spreadsheet management of student rosters, course enrollments, and assignment submissions is error-prone and insecure.",
    solution: "A centralized Django relational database platform providing role-based access for administrators, faculty, and students.",
    features: [
      "Student Roster Management: Full CRUD operations for student profiles, contact info, and academic standings.",
      "Course & Assignment Allocation: Map courses to instructors and track assignment submission statuses.",
      "Relational Database Operations: Built on Django ORM with SQLite for fast, structured queries.",
      "Django MVT Architecture: Decoupled view logic, model schemas, and clean responsive templates.",
      "Admin Panel Customization: Customized Django admin dashboard for instant administrative data oversight."
    ],
    architecture: "Django MVT (Model View Template) ↔ Django ORM ↔ SQLite Database Engine",
    developmentProcess: "Modeled relational database tables for Students, Courses, and Submissions, implemented Django views and forms, and styled template interfaces.",
    challenges: "Designing clean database foreign key relationships to prevent cascading deletion issues.",
    results: "Created a robust, functional academic database portal with instant query response times."
  }
];

export const additionalProjects = [
  {
    title: "Email Spam Detection",
    category: "AI / DEEP LEARNING",
    description: "Developed a NLP spam-classification model using TensorFlow to distinguish spam from non-spam emails. Utilized tokenization, text padding, EarlyStopping, and ReduceLROnPlateau callbacks.",
    technologies: ["Python", "TensorFlow", "NLP", "Scikit-Learn"]
  },
  {
    title: "Netflix Dataset EDA",
    category: "DATA SCIENCE & ANALYTICS",
    description: "Exploratory Data Analysis (EDA) on Netflix content dataset using Python, Pandas, Matplotlib, and Seaborn to uncover release trends, genre distribution, and rating analytics.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Django To-Do Application",
    category: "FULL-STACK WEB",
    description: "A clean Django task management application supporting full CRUD operations, category tags, completion status tracking, and responsive UI.",
    technologies: ["Python", "Django", "SQLite", "HTML/CSS"]
  },
  {
    title: "Python Web Scraping Suite",
    category: "AUTOMATION & SCRAPING",
    description: "Automated web scrapers built with BeautifulSoup and Requests to extract structured datasets, product prices, and research headlines into clean JSON/CSV feeds.",
    technologies: ["Python", "BeautifulSoup", "Requests", "JSON/CSV"]
  },
  {
    title: "Train Booking System",
    category: "PYTHON APPLICATION",
    description: "A core Python application simulating train seat reservation, ticket generation, fare calculation, and passenger record management.",
    technologies: ["Python", "File I/O", "CLI"]
  },
  {
    title: "PDF-to-Audio Converter",
    category: "UTILITY / AI SPEECH",
    description: "A Python utility script that extracts text content from PDF documents and converts it into natural-sounding speech audio files.",
    technologies: ["Python", "PyPDF2", "gTTS", "PyTTSx3"]
  }
];
