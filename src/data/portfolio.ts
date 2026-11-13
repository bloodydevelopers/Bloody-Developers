export interface CaseStudyMetric {
  label: string;
  value: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'custom-dev' | 'saas-erp' | 'mobile' | 'marketing';
  categoryLabel: string;
  client: string;
  industry: string;
  timeline: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: CaseStudyMetric[];
  techStack: string[];
  serviceTrigger: string;
  featured?: boolean;
}

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'custom-dev', label: 'Custom Software' },
  { id: 'saas-erp', label: 'Enterprise & ERP' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'marketing', label: 'Digital Growth' },
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'turnstile-biometric-attendance',
    title: 'Enterprise Turnstile & IoT Attendance Ecosystem',
    subtitle: 'Unified biometric cloud synchronization for 15,000+ staff across 4 production plants',
    category: 'saas-erp',
    categoryLabel: 'Enterprise & ERP',
    client: 'Apex Industrial Infrastructure Group',
    industry: 'Manufacturing & Heavy Industries',
    timeline: '8 Weeks Engineering & Hardware Rollout',
    challenge: '15,000+ daily workers across 4 geographically separated factories caused severe 40-minute queue bottlenecks at shift changes, with fragmented punch-card machines leading to frequent payroll discrepancies.',
    solution: 'Designed and deployed an edge-computed IoT biometric integration connecting 24 optical flap turnstiles with a low-latency central cloud ERP dashboard, real-time facial recognition verification, and automatic overtime calculations.',
    impact: 'Eliminated entry gate bottlenecks completely, delivered zero-latency shift payroll syncing, and recovered ₹18 Lakhs in annual unrecorded attendance leakage.',
    metrics: [
      { value: '99.98%', label: 'Sync Accuracy', detail: 'Zero lost punch events' },
      { value: '85%', label: 'Queue Time Reduction', detail: 'Sub-second turnstile pass' },
      { value: '₹1.8M/yr', label: 'Leakage Recovered', detail: 'Automated shift accounting' },
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'MQTT IoT', 'Redis', 'Docker'],
    serviceTrigger: 'Attendance Management System',
    featured: true,
  },
  {
    id: 'b2b-multivendor-marketplace',
    title: 'High-Concurrency Multi-Vendor B2B Marketplace',
    subtitle: 'Digitizing wholesale trade with instant split commissions and live warehouse inventory',
    category: 'custom-dev',
    categoryLabel: 'Custom Software',
    client: 'Vanguard Retail Wholesale Network',
    industry: 'Supply Chain & Commerce',
    timeline: '10 Weeks End-to-End Build',
    challenge: 'A network of 450+ distributors relied on disjointed manual phone and WhatsApp purchase orders, leading to 35% dispatch errors, lost invoices, and 14-day vendor settlement delays.',
    solution: 'Built a high-performance web marketplace portal featuring dynamic buyer-specific tiered pricing, automated multi-vendor escrow settlements, real-time stock reservations, and GST-compliant invoicing.',
    impact: 'Transformed traditional offline wholesale into a streamlined automated digital machine, accelerating settlement cycles from 14 days down to 24 hours.',
    metrics: [
      { value: '12x', label: 'Order Velocity', detail: 'Faster order fulfillment' },
      { value: '< 200ms', label: 'Search Latency', detail: 'Instant catalog indexing' },
      { value: '+240%', label: 'Annual GMV Growth', detail: 'Direct platform transactions' },
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Stripe API', 'PostgreSQL'],
    serviceTrigger: 'Multi-Vendor E-Commerce',
    featured: true,
  },
  {
    id: 'performance-marketing-cro-engine',
    title: 'Precision Performance Marketing & CRO Engine',
    subtitle: 'Data-driven customer acquisition funnel scaling qualified pipeline by 3.4x ROAS',
    category: 'marketing',
    categoryLabel: 'Digital Growth',
    client: 'TechEdu Pro Skills Platform',
    industry: 'EdTech & Professional Certification',
    timeline: 'Continuous 90-Day Scaling Sprint',
    challenge: 'Client faced a skyrocketing customer acquisition cost (> ₹1,450/lead) on Google and Meta ads with low-converting generic landing pages and high cold-traffic drop-off rates.',
    solution: 'Architected high-velocity landing pages with sub-second mobile load times, implemented multi-touch server-side conversion tracking (CAPI), and orchestrated targeted Meta + Google Performance Max campaign funnels with WhatsApp nurturing bots.',
    impact: 'Cut acquisition costs in half while dramatically increasing lead quality and enrollment revenue within the first 6 weeks of deployment.',
    metrics: [
      { value: '3.4x', label: 'Direct ROAS', detail: 'Verified return on ad spend' },
      { value: '-58%', label: 'CPA Reduction', detail: 'Lower acquisition cost per lead' },
      { value: '+180%', label: 'Conversion Lift', detail: 'Optimized landing page funnel' },
    ],
    techStack: ['Meta Ads API', 'Google Performance Max', 'Server-Side CAPI', 'CRO A/B Testing', 'WhatsApp Webhook'],
    serviceTrigger: 'Digital Marketing & Growth',
    featured: true,
  },
  {
    id: 'omnichannel-cafe-pos-suite',
    title: 'Cloud-Native Multi-Branch Café & POS Suite',
    subtitle: 'Centralizing menu pricing, kitchen display systems, and automated ingredient depletion',
    category: 'mobile',
    categoryLabel: 'Mobile Apps',
    client: 'Artisan Roast Craft Café Network (8 Locations)',
    industry: 'Hospitality & Food Services',
    timeline: '6 Weeks Deployment & Staff Training',
    challenge: 'Franchise chain suffered from desynchronized prices across delivery aggregators, food wastage from unmonitored raw inventory, and slow counter billing during peak morning rush.',
    solution: 'Engineered an offline-first POS app paired with live Kitchen Display System (KDS), table QR ordering, automated ingredient depletion alerts, and centralized executive analytics across all 8 branches.',
    impact: 'Increased table turnover by 35% during peak hours and virtually eliminated ingredient over-ordering across all locations.',
    metrics: [
      { value: '35%', label: 'Faster Table Turns', detail: 'Quick bill & QR ordering' },
      { value: '-22%', label: 'Food Waste Cut', detail: 'Automated recipe depletion' },
      { value: '100%', label: 'Offline Resilience', detail: 'Zero downtime during network cuts' },
    ],
    techStack: ['React Native / Electron', 'Tailwind CSS', 'WebSockets', 'SQLite', 'Cloud Sync'],
    serviceTrigger: 'Café Management System',
    featured: false,
  },
  {
    id: 'k12-school-education-erp',
    title: 'Unified Multi-Campus K-12 School Management ERP',
    subtitle: 'Connecting 4,200 students, parents, faculty, and fee accounting in one secure portal',
    category: 'saas-erp',
    categoryLabel: 'Enterprise & ERP',
    client: 'Crestview Educational Society',
    industry: 'Education & Academics',
    timeline: '7 Weeks Migration & Setup',
    challenge: 'Administrative staff spent hundreds of hours reconciling offline fee registers and paper report cards, while parents had zero real-time visibility into student attendance or bus tracking.',
    solution: 'Deployed a comprehensive School ERP suite with role-based dashboards for admins, teachers, and parents, automated fee reminder SMS/WhatsApp triggers, and integrated GPS transport tracking.',
    impact: 'Achieved 96% on-time online fee collections in term 1 and saved administrative staff over 120 man-hours every examination cycle.',
    metrics: [
      { value: '96%', label: 'Online Fee Collection', detail: 'Automated gateway receipts' },
      { value: '120+ hrs', label: 'Admin Time Saved', detail: 'Automated report cards & grading' },
      { value: '4,200+', label: 'Active Daily Users', detail: 'Parents, teachers & staff' },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Payment Gateway SDK', 'SMS Gateway'],
    serviceTrigger: 'School Management System',
    featured: false,
  },
  {
    id: 'healthcare-hipaa-telehealth-portal',
    title: 'HIPAA-Compliant Diagnostic & Consultation Platform',
    subtitle: 'Encrypted patient health records, doctor scheduling, and WebRTC video appointments',
    category: 'custom-dev',
    categoryLabel: 'Custom Software',
    client: 'PulseCare Specialty Clinics',
    industry: 'Healthcare & Telemedicine',
    timeline: '9 Weeks Custom Architecture',
    challenge: 'Specialist doctors struggled with cumbersome third-party video tools that lacked medical history context and violated clinical data privacy standards.',
    solution: 'Engineered a secure, end-to-end encrypted telemedicine portal featuring low-bandwidth WebRTC video calls, digital prescription generation, integrated lab report viewing, and SMS reminders.',
    impact: 'Enabled 40+ clinical specialists to consult patients nationally with a 4.9/5 patient satisfaction score and zero security breaches.',
    metrics: [
      { value: '100%', label: 'HIPAA Compliance', detail: 'End-to-end encrypted sessions' },
      { value: '< 1%', label: 'No-Show Rate', detail: 'Automated SMS appointment alerts' },
      { value: '4.9 / 5', label: 'Patient Rating', detail: '10,000+ completed consultations' },
    ],
    techStack: ['React', 'WebRTC', 'FastAPI / Python', 'PostgreSQL', 'AWS KMS Encryption'],
    serviceTrigger: 'Custom Software Development',
    featured: false,
  },
];

