export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  project: string;
  rating: number;
  quote: string;
  result: string;
  initials: string;
  gradient: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'development' | 'products' | 'pricing';
  highlight?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vikram-roy',
    name: 'Vikramaditya Roy',
    role: 'Managing Director',
    company: 'Apex Industrial Infrastructure',
    location: 'Mumbai / Pune',
    industry: 'Heavy Manufacturing',
    project: 'Turnstile & Biometric Cloud Attendance System',
    rating: 5,
    quote: 'Bloody Developer engineered our entire biometric IoT turnstile access system across 4 factories. Shift entry queues dropped from 40 minutes down to seconds, and automated payroll sync saved us ₹18 Lakhs in unrecorded leakage.',
    result: '85% Queue Reduction & ₹1.8M/yr Saved',
    initials: 'VR',
    gradient: 'from-[#ff2638] to-[#990012]',
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'VP of Technology & Operations',
    company: 'NovaCare Health Systems',
    location: 'Bangalore',
    industry: 'Healthcare Technology',
    project: 'HIPAA-Compliant Diagnostic & Telehealth Portal',
    rating: 5,
    quote: 'Most software agencies talk a lot but deliver buggy MVPs. The Bloody Developer team is fundamentally different: deep engineering discipline, clean codebases, and relentless execution on security and uptime.',
    result: '10,000+ Consultations with Zero Downtime',
    initials: 'SJ',
    gradient: 'from-[#06b6d4] to-[#0e7490]',
  },
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    company: 'UrbanSpree E-Commerce',
    location: 'Delhi NCR',
    industry: 'Retail & Commerce',
    project: 'Multi-Vendor Marketplace & Growth Campaigns',
    rating: 5,
    quote: 'Our previous platform crashed every time we ran a festival flash sale. Bloody Developer re-architected our marketplace to handle 10x traffic bursts effortlessly, while their digital marketing team drove a 3.4x ROAS on ad spend.',
    result: '+240% GMV & 3.4x ROAS',
    initials: 'AM',
    gradient: 'from-[#a855f7] to-[#6b21a8]',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Head of Academics & Administration',
    company: 'Crestview Academy Group',
    location: 'Hyderabad',
    industry: 'Education',
    project: 'School Management & Fee Automation Suite',
    rating: 5,
    quote: 'Managing 5 schools with thousands of students used to mean endless spreadsheets and delayed fee reconciliations. Their school management suite automated our collections to 96% on time and made parents genuinely happy.',
    result: '96% On-Time Online Fee Collection',
    initials: 'PS',
    gradient: 'from-[#10b981] to-[#047857]',
  },
  {
    id: 'rohit-verma',
    name: 'Rohit Verma',
    role: 'Operations Director',
    company: 'Artisan Roast Hospitality Group',
    location: 'Goa / Mumbai',
    industry: 'Hospitality & F&B',
    project: 'Multi-Branch Café POS & Kitchen Display System',
    rating: 5,
    quote: 'Their offline-first café POS solved our internet outage nightmares. Even when the cloud network drops during stormy days, our billing, KDS tickets, and table QR orders continue seamlessly without skipping a beat.',
    result: '35% Faster Table Turnover & 100% Offline Resilience',
    initials: 'RV',
    gradient: 'from-[#f59e0b] to-[#b45309]',
  },
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    role: 'Chief Operating Officer',
    company: 'LogiFlow Express',
    location: 'Ahmedabad',
    industry: 'Logistics & Supply Chain',
    project: 'Custom Dispatch CRM & Driver Tracking',
    rating: 5,
    quote: 'We approached Bloody Developer with an urgent 6-week deadline for our fleet overhaul. Not only did they ship on time, but their post-launch support and proactive performance monitoring have been world-class.',
    result: '12x Faster Route Dispatch Cycles',
    initials: 'AD',
    gradient: 'from-[#3b82f6] to-[#1d4ed8]',
  },
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'development',
    question: 'How fast can you launch a project or deploy a software system?',
    answer: 'For our ready-to-deploy software products (Attendance, Café POS, Task Management, E-Commerce, School Management, CRM), we can customize branding and deploy to your cloud within 3 to 7 business days. For bespoke custom software development, typical production MVPs are engineered and shipped in 4 to 8 weeks following agile milestone sprints.',
    highlight: 'Ready suites ship in 3-7 days; custom MVPs in 4-8 weeks',
  },
  {
    id: 'faq-2',
    category: 'development',
    question: 'Do I own 100% of the intellectual property (IP) and source code?',
    answer: 'Yes, absolutely. For all custom development engagements, full intellectual property, source code repositories, databases, design assets, and cloud configurations belong 100% to your company upon final milestone payment. We sign binding NDAs and IP assignment contracts before writing a single line of code.',
    highlight: '100% IP & source code ownership under strict NDA',
  },
  {
    id: 'faq-3',
    category: 'products',
    question: 'Can your ready software products be customized for our proprietary workflows?',
    answer: 'Yes! Unlike rigid commercial off-the-shelf software, all Bloody Developer software products are built on modular microservice architectures. We regularly customize business rules, approval hierarchies, biometric hardware drivers, payment gateways, and third-party ERP integrations to fit your exact operational requirements.',
    highlight: 'Modular codebase allows deep customization without vendor lock-in',
  },
  {
    id: 'faq-4',
    category: 'development',
    question: 'How do you handle post-launch maintenance, security, and bug fixes?',
    answer: 'Every custom deployment includes an initial 30-to-60-day warranty covering bug fixes and performance tuning. Beyond launch, we offer flexible SLA-backed maintenance retainers providing 24/7 cloud health monitoring, automated database backups, security patches, and on-demand feature iterations.',
    highlight: 'Comprehensive warranty + 24/7 SLA maintenance retainers',
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'How does your digital marketing differ from traditional marketing agencies?',
    answer: 'We are software engineers and data specialists first. We do not just run ads for vanity impressions; we build custom high-converting landing pages, integrate server-side tracking (CAPI) to bypass browser ad-blockers, configure automated CRM lead-nurturing bots, and optimize ad spend strictly against real revenue and ROI metrics.',
    highlight: 'Engineering-driven growth: CAPI tracking, CRO, and revenue-tied ROAS',
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'What is your pricing model and payment structure?',
    answer: 'We provide transparent, milestone-based quotes with zero hidden fees. Typically, projects are structured into: (1) Initial Discovery & Architecture Sprint (25-30%), (2) Core Milestone Deliverables (40-50%), and (3) Final Staging, Deployment & Handover (20-25%). For ongoing marketing or dedicated engineering teams, we offer predictable monthly retainers.',
    highlight: 'Transparent milestone payments with zero surprise charges',
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'What technologies and frameworks do your engineers specialize in?',
    answer: 'Our core stack focuses on modern, battle-tested technologies: React 19, Next.js, TypeScript, Tailwind CSS on the frontend; Node.js, Express, Python (FastAPI/Django), and Go on the backend; PostgreSQL, MySQL, Redis, and MongoDB for data; and Docker, Kubernetes, AWS, and Cloudflare for cloud deployment.',
    highlight: 'Modern enterprise stack: React 19, TypeScript, Node.js, Python, PostgreSQL, AWS',
  },
];

