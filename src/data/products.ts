export interface ProductModule {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductStat {
  label: string;
  value: string;
  hint: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  extendedDescription: string;
  iconName: string;
  image: string;
  ctaText?: string;
  features: string[];
  modules: ProductModule[];
  metrics: string;
  stats: ProductStat[];
  tech: string[];
  specs: { label: string; value: string }[];
  useCases: string[];
  faqs: ProductFaq[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'attendance',
    title: 'Employee Attendance Management System',
    subtitle: 'Automated biometric time tracking, geo-fenced check-ins, and one-click payroll compliance.',
    category: 'Workforce & HR Intelligence',
    description: 'Smart attendance management system to make staff attendance management easier for businesses and organisations. Manage employee attendance, set working hours, register leaves and manage your workforce data all on one platform.',
    ctaText: 'Refer to Attendance Software',
    extendedDescription: 'An enterprise-grade workforce tracking platform engineered to eliminate ghost punching, streamline complex rotational shifts, and automate audit-ready payroll calculations. Features AI-powered facial recognition, GPS geo-fenced mobile punches, automated overtime rules, and bidirectional sync with enterprise ERPs.',
    iconName: 'Users',
    image: '/assets/products/product_attendance.jpg',
    metrics: '99.4% Attendance Accuracy',
    features: [
      'Biometric & Geo-fencing punch in/out',
      'Shift scheduling & automated overtime calculation',
      'Leave request approval workflows',
      'Exportable audit-ready payroll reports',
      'Real-time employee presence map'
    ],
    stats: [
      { label: 'Tracking Accuracy', value: '99.4%', hint: 'Biometric verified' },
      { label: 'Check-In Speed', value: '< 0.8s', hint: 'Instant face/QR scan' },
      { label: 'Payroll Time Saved', value: '85%', hint: 'Automated calculations' },
      { label: 'Ghost Punching', value: '0%', hint: 'Hardware & GPS verified' }
    ],
    modules: [
      {
        title: 'Biometric & Facial Check-In',
        description: 'Sub-second AI face recognition with liveness detection and anti-spoofing algorithms for wall tablets and turnstiles.',
        iconName: 'ScanFace'
      },
      {
        title: 'Geo-Fenced Mobile Punch',
        description: 'Allows field agents and remote teams to clock in strictly within verified GPS coordinates and Wi-Fi beacons.',
        iconName: 'MapPin'
      },
      {
        title: 'Rotational Shift Engine',
        description: 'Auto-generates multi-shift rotas, tracks grace periods, night differentials, and breaks with instant push notifications.',
        iconName: 'Calendar'
      },
      {
        title: 'Tiered Leave Management',
        description: 'Multi-level approval chains for paid time off, sick leave, and casual leaves with live balance calculation.',
        iconName: 'Clock'
      },
      {
        title: 'Audit-Ready Payroll Integration',
        description: 'Exports statutory compliance and payroll work hours directly into Quickbooks, SAP, Zoho, and custom ERPs.',
        iconName: 'FileSpreadsheet'
      },
      {
        title: 'Real-Time Presence Telemetry',
        description: 'Live interactive bird-eye map of on-duty personnel across global branches, departments, and project sites.',
        iconName: 'Activity'
      }
    ],
    tech: ['React 19', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS', 'Docker'],
    specs: [
      { label: 'Deployment', value: 'Cloud SaaS / On-Premise Docker' },
      { label: 'Hardware Compatibility', value: 'ZKTeco, Hikvision, iPads, Android Tablets' },
      { label: 'Security & Compliance', value: 'SOC 2 Type II, GDPR, AES-256' },
      { label: 'API Integrations', value: 'RESTful API & Webhooks' }
    ],
    useCases: [
      'Corporate Offices & Tech Campuses',
      'Manufacturing Plants & Factories',
      'Hospitals & Healthcare Facilities',
      'Retail Chains & Hospitality'
    ],
    faqs: [
      {
        question: 'Can the system integrate with existing biometric hardware?',
        answer: 'Yes. Our platform supports universal TCP/IP communication protocols and REST webhooks for leading biometric hardware including ZKTeco, Hikvision, Suprema, and custom IoT devices.'
      },
      {
        question: 'How does offline mobile clocking work for field staff?',
        answer: 'When employees punch in without an active internet connection, timestamps and cryptographic GPS coordinates are stored securely in offline encrypted SQLite storage and auto-synced the moment connectivity restores.'
      },
      {
        question: 'Does the system calculate complex overtime and night allowances?',
        answer: 'Yes. Our rules engine allows you to configure exact working hour thresholds, weekend multipliers, public holiday differentials, and custom overtime rules matching your local labor laws.'
      }
    ]
  },
  {
    id: 'cafe',
    title: 'Cafe Management Software',
    subtitle: 'High-speed cloud POS, kitchen display system (KDS), real-time recipe depletion, and digital QR ordering.',
    category: 'Hospitality & Retail Tech',
    description: 'By integrating a café management system, you can simplify billing, order processing, and other routine business tasks, thereby streamlining your café operations. Enhance communication between your front-end and back-end processes, manage your menu items, monitor your orders, and control your inventory.',
    ctaText: 'Discover More About Cafe Software',
    extendedDescription: 'Engineered specifically for high-velocity coffee shops, roasteries, and quick-service restaurant chains. Unifies counter orders, drive-thru queues, QR table ordering, and kitchen display systems (KDS) while automatically depleting raw ingredients (beans, syrups, milk) down to the milliliter.',
    iconName: 'Coffee',
    image: '/assets/products/product_cafe.png',
    metrics: '< 1.8s Order Processing Speed',
    features: [
      'Touchscreen POS & Kitchen Display System (KDS)',
      'Live recipe-based ingredient depletion tracking',
      'Digital QR code table ordering & split bill payments',
      'Multi-counter and drive-thru order queue sync',
      'Daily profit margin & best-seller telemetry'
    ],
    stats: [
      { label: 'Order Processing', value: '< 1.8s', hint: 'Ultra-fast counter checkout' },
      { label: 'Food Waste Reduced', value: '-32%', hint: 'Live ingredient tracking' },
      { label: 'Average Table Turn', value: '+24%', hint: 'Instant QR code ordering' },
      { label: 'Uptime Reliability', value: '99.99%', hint: 'Works offline & online' }
    ],
    modules: [
      {
        title: 'Ultra-Fast Touchscreen POS',
        description: 'Optimized touch interface supporting customizable modifiers, combo deals, discounts, and split billing in seconds.',
        iconName: 'Smartphone'
      },
      {
        title: 'Interactive Kitchen Display (KDS)',
        description: 'Color-coded digital ticket management for baristas and kitchen staff with order timer alerts and audio cues.',
        iconName: 'Monitor'
      },
      {
        title: 'Smart Ingredient Inventory',
        description: 'Sub-gram recipe depletion with automated reorder triggers when milk, coffee beans, or packaging drops below threshold.',
        iconName: 'PackageCheck'
      },
      {
        title: 'Contactless Table QR Ordering',
        description: 'Patrons scan table QR codes to browse customized menus, order, and pay directly from their smartphone browser.',
        iconName: 'QrCode'
      },
      {
        title: 'Multi-Terminal Order Queue',
        description: 'Real-time WebSocket synchronization across cashier desks, drive-thru pickup windows, and mobile servers.',
        iconName: 'RefreshCw'
      },
      {
        title: 'Financial & Sales Telemetry',
        description: 'Detailed analytics tracking peak rush hours, top-grossing items, waste logs, and real-time cashier shift balancing.',
        iconName: 'TrendingUp'
      }
    ],
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Redis', 'WebSockets'],
    specs: [
      { label: 'Hardware Support', value: 'iPads, Android POS, Thermal Receipt Printers, Cash Drawers' },
      { label: 'Offline Capability', value: 'Full offline checkout with auto-sync' },
      { label: 'Payment Integrations', value: 'Stripe Terminal, Square, Razorpay, Cash' },
      { label: 'Scale', value: 'Single boutique cafes to 100+ outlet franchises' }
    ],
    useCases: [
      'Specialty Coffee Roasters & Cafes',
      'Quick-Service Restaurants (QSR)',
      'Boba & Bakery Outlets',
      'Multi-Branch Drive-Thru Chains'
    ],
    faqs: [
      {
        question: 'Does the POS work during internet outages?',
        answer: 'Yes! The POS maintains full local caching. You can continue taking orders and printing kitchen tickets offline. As soon as the network returns, all transactions and inventory adjustments automatically sync to the cloud.'
      },
      {
        question: 'How granular is the recipe-based inventory depletion?',
        answer: 'Extremely granular. For example, a single Large Vanilla Latte automatically depletes 18g of espresso beans, 250ml of oat milk, 2 pumps of vanilla syrup, and 1 paper cup with lid.'
      },
      {
        question: 'Can we manage multiple branches from a single dashboard?',
        answer: 'Yes. Centralized franchise management allows you to update menus, adjust pricing, push seasonal specials, and view consolidated revenue across all locations in real time.'
      }
    ]
  },
  {
    id: 'task',
    title: 'Applications for Project and Task Management',
    subtitle: 'Agile Kanban boards, automated sprint velocity tracking, time logging, and high-performance team collaboration.',
    category: 'Productivity & Engineering Tools',
    description: 'An all-in-one task management solution that enables businesses to manage projects, assign tasks, and track performance can be used to increase team productivity. Gaining a more comprehensive understanding of your team\'s activities will enable you to more effectively manage daily tasks, monitor project deadlines, and enhance communication.',
    ctaText: 'See Task Management Software',
    extendedDescription: 'A high-velocity project management platform built for modern engineering and product teams. Combines interactive Kanban workflows, milestone roadmaps, automated sprint burn-down charts, and deep issue-tracking telemetry without Jira-like bloat.',
    iconName: 'CheckSquare',
    image: '/assets/products/product_task.png',
    metrics: '+42% Sprint Velocity',
    features: [
      'Agile Kanban boards, Gantt timelines & sprints',
      'Granular role-based assignments and milestones',
      'Integrated team discussion threads & file sharing',
      'Time logging & automated burn-down charts',
      'Custom webhook triggers & Slack/Teams alerts'
    ],
    stats: [
      { label: 'Sprint Velocity', value: '+42%', hint: 'Faster cycle time' },
      { label: 'Meeting Overhead', value: '-35%', hint: 'Asynchronous updates' },
      { label: 'On-Time Delivery', value: '94.8%', hint: 'Milestone predictability' },
      { label: 'Response Latency', value: '< 60ms', hint: 'Instant client-side UI' }
    ],
    modules: [
      {
        title: 'Fluid Kanban & Sprint Boards',
        description: 'Drag-and-drop workflow stages with custom swimlanes, WIP limits, sub-tasks, and quick filtering by assignee.',
        iconName: 'Kanban'
      },
      {
        title: 'Interactive Gantt & Roadmaps',
        description: 'Visualize project milestones, task dependencies, critical paths, and resource allocation across quarters.',
        iconName: 'CalendarRange'
      },
      {
        title: 'Automated Velocity & Burndown',
        description: 'Real-time burn-down and burn-up charts tracking story points, team capacity, and automated sprint reports.',
        iconName: 'LineChart'
      },
      {
        title: 'Time Tracking & Timesheets',
        description: 'One-click timer widgets, manual billable hour logs, and automated client invoicing exports.',
        iconName: 'Timer'
      },
      {
        title: 'Threaded Context Discussions',
        description: 'Rich-text task commenting, @mentions, code snippet highlighting, and asset version attachments.',
        iconName: 'MessagesSquare'
      },
      {
        title: 'CI/CD & Chat Automation',
        description: 'Automate ticket transitions on Git commits/PR merges, with real-time webhooks for Slack, Discord, and Teams.',
        iconName: 'GitPullRequest'
      }
    ],
    tech: ['Next.js', 'React 19', 'GraphQL', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    specs: [
      { label: 'Architecture', value: 'Event-driven microservices' },
      { label: 'Integrations', value: 'GitHub, GitLab, Jira import, Slack, Teams' },
      { label: 'Security', value: 'End-to-End TLS 1.3, Granular RBAC, Audit Logs' },
      { label: 'Data Export', value: 'Full JSON, CSV, and PDF report exports' }
    ],
    useCases: [
      'Software Engineering & Product Teams',
      'Digital Agencies & Consultancies',
      'Marketing & Campaign Operations',
      'Enterprise Cross-Department Projects'
    ],
    faqs: [
      {
        question: 'Can we migrate existing projects from Jira or Trello?',
        answer: 'Yes! Our automated migration tool imports your existing boards, custom fields, attachments, and historical comments from Jira, Trello, Asana, or CSV with zero downtime.'
      },
      {
        question: 'Does it support custom fields and role-based permissions?',
        answer: 'Absolutely. You can define custom dropdowns, text fields, dates, formulas, and configure role-based access down to individual board columns and task confidentiality.'
      },
      {
        question: 'Is there support for automated sprint rollovers?',
        answer: 'Yes. Incomplete backlog items can automatically roll over into the next sprint, complete with carrying story points and velocity adjustments.'
      }
    ]
  },
  {
    id: 'school',
    title: 'School Management Software',
    subtitle: 'Comprehensive student dossiers, automated GPA calculation, fee invoicing, and interactive parent-teacher portals.',
    category: 'EdTech & Institutional ERP',
    description: 'Digitalise school administration with a complete school management system to ease the academic and administrative processes. A single digital platform for student information, attendance, examinations, academic records and all the school’s vital functions.',
    ctaText: 'Check out School Management Software',
    extendedDescription: 'An all-in-one educational ERP built for K-12 schools, colleges, and university campuses. Centralizes student academic records, automated examination grading, digital tuition fee processing, timetable generation, and secure parent communication channels into a unified portal.',
    iconName: 'GraduationCap',
    image: '/assets/products/product_school.png',
    metrics: 'Over 120,000 Students Managed',
    features: [
      'Comprehensive student & faculty digital dossiers',
      'Automated grading, GPA calculation & report cards',
      'Tuition fee collection & digital invoice receipts',
      'Parent portal with real-time homework & attendance',
      'Library catalog & transportation bus tracking'
    ],
    stats: [
      { label: 'Students Managed', value: '120k+', hint: 'Across 45+ institutions' },
      { label: 'Fee Collection Delay', value: '-70%', hint: 'Automated SMS & gateway' },
      { label: 'Report Generation', value: '1 Click', hint: 'Instant GPA & transcripts' },
      { label: 'Parent Engagement', value: '96%', hint: 'Mobile portal adoption' }
    ],
    modules: [
      {
        title: 'Student & Faculty Dossiers',
        description: 'Complete 360-degree student profiles containing academic history, medical records, disciplinary notes, and parent info.',
        iconName: 'UserCheck'
      },
      {
        title: 'Automated Examination & GPA',
        description: 'Configurable grading scales (percentage, GPA, letter grade) with instant digital report card and transcript generation.',
        iconName: 'Award'
      },
      {
        title: 'Fee Collection & Accounting',
        description: 'Multi-term tuition billing, automated late fee rules, split installment plans, and digital receipt generation.',
        iconName: 'CreditCard'
      },
      {
        title: 'Dedicated Parent & Student Portal',
        description: 'Mobile-responsive interface for parents to inspect daily attendance, view homework assignments, and message faculty.',
        iconName: 'HeartHandshake'
      },
      {
        title: 'Intelligent Timetable Scheduler',
        description: 'Conflict-free classroom and faculty scheduling algorithm considering room capacities and instructor availability.',
        iconName: 'CalendarDays'
      },
      {
        title: 'Library & Asset Logistics',
        description: 'Barcode-driven book check-in/out, overdue penalty calculations, and physical campus asset tracking.',
        iconName: 'BookOpen'
      }
    ],
    tech: ['React 19', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'AWS S3', 'Docker'],
    specs: [
      { label: 'Deployment', value: 'Dedicated Cloud Instance or Multi-Tenant SaaS' },
      { label: 'Security', value: 'FERPA & GDPR compliant student data encryption' },
      { label: 'Notification Rails', value: 'SMS Gateway, WhatsApp Business API, Push' },
      { label: 'Reporting', value: 'National Board & Ministry compliance templates' }
    ],
    useCases: [
      'K-12 Private & Public Schools',
      'Colleges & Higher Education Institutes',
      'Multi-Campus Educational Groups',
      'Vocational Training Centers'
    ],
    faqs: [
      {
        question: 'Can parents pay tuition fees online directly through the portal?',
        answer: 'Yes. The portal integrates with Stripe, PayPal, Razorpay, and direct bank debit. Parents receive instant digital receipts and accounts ledger updates in real time.'
      },
      {
        question: 'Is student data private and compliant with education privacy standards?',
        answer: 'Strictly compliant. We adhere to FERPA and GDPR standards with zero third-party tracking, end-to-end encrypted file uploads, and role-based data isolation.'
      },
      {
        question: 'Does the system support multiple academic semesters and custom terms?',
        answer: 'Yes. The academic calendar is completely configurable, supporting semesters, trimesters, quarterly terms, and custom modular academic cycles.'
      }
    ]
  },
  {
    id: 'single-vendor',
    title: 'Single Vendor E-commerce Platform',
    subtitle: 'Blazing-fast headless storefront, 1-click checkout, automated inventory tracking, and omnichannel conversion engine.',
    category: 'E-Commerce & Digital Retail',
    description: 'Create and run your online store using a single-vendor e-commerce solution that does it all to make selling online simpler. Manage items, categories, customer orders, inventory and payments from a single central dashboard Provide a seamless shopping experience to your customers.',
    ctaText: 'Discover E-Commerce Solutions',
    extendedDescription: 'A direct-to-consumer (D2C) e-commerce solution built for brands that prioritize loading speed, conversion rate optimization, and brand aesthetics. Powered by a modern headless architecture with sub-second page transitions, integrated payments, dynamic coupon rules, and automated shipping integrations.',
    iconName: 'ShoppingCart',
    image: '/assets/products/product_singlevendor.png',
    metrics: '3.2x Higher Mobile Conversion',
    features: [
      'Blazing fast headless storefront with instant search',
      'Multi-currency payment gateways (Stripe, Apple Pay)',
      'Automated inventory threshold & low-stock alerts',
      'Abandoned cart recovery automation via email/SMS',
      'Customer loyalty points & discount coupon engine'
    ],
    stats: [
      { label: 'Mobile Conversion', value: '3.2x', hint: 'Compared to standard Shopify' },
      { label: 'Page Load Speed', value: '0.4s', hint: 'Sub-second edge cached' },
      { label: 'Cart Abandonment', value: '-38%', hint: '1-click checkout' },
      { label: 'Checkout Success', value: '99.8%', hint: 'Resilient multi-gateway' }
    ],
    modules: [
      {
        title: 'Headless Instant Storefront',
        description: 'Server-side rendered product catalog with instant client-side filtering, faceted search, and sub-second page loads.',
        iconName: 'Zap'
      },
      {
        title: 'High-Conversion Checkout',
        description: 'Frictionless 1-click checkout supporting Apple Pay, Google Pay, credit cards, Buy-Now-Pay-Later, and localized currencies.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Real-Time Inventory Engine',
        description: 'Synchronized inventory counting across warehouses, low-stock threshold triggers, and automated preorder queues.',
        iconName: 'Boxes'
      },
      {
        title: 'Abandoned Cart Recovery',
        description: 'Automated personalized recovery sequences triggered via email, WhatsApp, and SMS with time-limited discount offers.',
        iconName: 'Mail'
      },
      {
        title: 'Dynamic Discount & Loyalty',
        description: 'Tiered VIP memberships, referral incentives, bulk discount rules, and automated promo code validation.',
        iconName: 'BadgePercent'
      },
      {
        title: 'Logistics & Shipping Sync',
        description: 'Direct courier API integration for live shipping rate calculation, label printing, and customer parcel tracking.',
        iconName: 'Truck'
      }
    ],
    tech: ['Next.js', 'React 19', 'Tailwind CSS', 'Stripe', 'Node.js', 'PostgreSQL', 'Redis'],
    specs: [
      { label: 'Lighthouse Score', value: '98+ Performance & SEO' },
      { label: 'Payment Support', value: 'Stripe, Apple Pay, Google Pay, Klarna, PayPal' },
      { label: 'Hosting', value: 'Global Edge CDN Deployment' },
      { label: 'CMS', value: 'Headless Product & Blog Management' }
    ],
    useCases: [
      'Direct-to-Consumer (D2C) Retail Brands',
      'Apparel & Fashion Boutiques',
      'Consumer Electronics & Gadgets',
      'Digital Goods & Subscription Box Services'
    ],
    faqs: [
      {
        question: 'Why choose this headless platform over standard Shopify or WooCommerce?',
        answer: 'Our headless architecture delivers 0.4s load times, zero monthly app subscription fees, custom UI freedom without theme restrictions, and 3.2x higher mobile conversion rates.'
      },
      {
        question: 'Can we sell globally in multiple currencies and languages?',
        answer: 'Yes. The storefront features automatic geo-location currency conversion, localized checkout experiences, and multi-language catalog support.'
      },
      {
        question: 'How are shipping rates and label generation handled?',
        answer: 'We connect directly to DHL, FedEx, UPS, ShipStation, and regional postal carriers to provide live customer rates at checkout and 1-click shipping label generation in the admin panel.'
      }
    ]
  },
  {
    id: 'multi-vendor',
    title: 'Multi-Vendor Marketplace Software',
    subtitle: 'Scalable multi-seller commerce hub with dedicated vendor portals, automated tiered commissions, and escrow payouts.',
    category: 'Enterprise Marketplace Platform',
    description: 'Create your own online marketplace, a scalable multi-vendor platform that links many vendors to buyers. Manage vendor registrations, product listings, orders, commissions and marketplace operations from one administration system.',
    ctaText: 'Learn About Marketplace Solutions',
    extendedDescription: 'A turnkey multi-merchant marketplace infrastructure designed to power Amazon- or Etsy-style ecosystems. Empowers thousands of independent vendors to manage their own digital storefronts, upload inventories, and process shipments while the platform operator collects automated commissions and orchestrates secure escrow releases.',
    iconName: 'Store',
    image: '/assets/products/product_multivendor.png',
    metrics: '$18M+ GMV Processed',
    features: [
      'Dedicated vendor onboarding & seller dashboards',
      'Tiered commission structures & automated payouts',
      'Centralized admin moderation for products & reviews',
      'Multi-warehouse routing and split fulfillment',
      'Dispute resolution and merchant escrow controls'
    ],
    stats: [
      { label: 'GMV Processed', value: '$18M+', hint: 'Platform lifetime volume' },
      { label: 'Active Vendors', value: '2,400+', hint: 'Seamlessly onboarded' },
      { label: 'Commission Payouts', value: 'Automated', hint: 'Zero manual ledger work' },
      { label: 'Dispute Resolution', value: '< 24h', hint: 'Built-in arbitration' }
    ],
    modules: [
      {
        title: 'Dedicated Vendor Portals',
        description: 'Custom vendor control center for merchants to manage catalog listings, track live orders, and inspect payout balances.',
        iconName: 'LayoutDashboard'
      },
      {
        title: 'Automated Tiered Commissions',
        description: 'Configure flexible platform fees (fixed rate, percentage per category, or monthly subscription tiers) auto-split at checkout.',
        iconName: 'CircleDollarSign'
      },
      {
        title: 'Admin Moderation & Governance',
        description: 'Comprehensive approval queue for new seller accounts, catalog listings, brand verifications, and customer ratings.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Split Order & Multi-Fulfillment',
        description: 'Shoppers check out once; the engine automatically splits orders to corresponding vendors with dedicated tracking numbers.',
        iconName: 'GitFork'
      },
      {
        title: 'Stripe Connect Escrow Payouts',
        description: 'Secure automated fund escrow held until delivery confirmation, with instant 1-click payouts directly to seller bank accounts.',
        iconName: 'Wallet'
      },
      {
        title: 'Dispute Arbitration Desk',
        description: 'Structured return, refund, and buyer protection ticketing system with full communication audit logs.',
        iconName: 'Scale'
      }
    ],
    tech: ['React 19', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'Docker', 'Redis'],
    specs: [
      { label: 'Payout Rails', value: 'Stripe Connect, PayPal Payouts, Direct SEPA/ACH' },
      { label: 'Scalability', value: 'Tested to 100,000+ daily concurrent shoppers' },
      { label: 'Tax Compliance', value: 'Automated marketplace facilitator tax calculations' },
      { label: 'Localization', value: 'Multi-vendor global tax & currency engine' }
    ],
    useCases: [
      'B2C E-Commerce Marketplaces',
      'B2B Wholesale & Supplier Exchanges',
      'Artisan & Handmade Goods Communities',
      'Hyperlocal Multi-Store Delivery Platforms'
    ],
    faqs: [
      {
        question: 'How do merchant payouts and platform commission splits work?',
        answer: 'We utilize Stripe Connect Custom/Express. When a buyer checks out, your platform commission is immediately deducted and sent to your platform balance, while vendor earnings are held in escrow until order delivery is verified.'
      },
      {
        question: 'Can shoppers buy items from multiple vendors in a single checkout?',
        answer: 'Yes! Shoppers experience a unified checkout. The platform automatically calculates individual shipping fees per vendor, splits the orders on the backend, and routes fulfillment tasks to each seller independently.'
      },
      {
        question: 'What tools do vendors have to manage their store?',
        answer: 'Vendors receive a branded merchant dashboard where they can bulk-upload products via CSV, view real-time sales charts, manage customer questions, download tax reports, and print shipping labels.'
      }
    ]
  },
  {
    id: 'crm-erp',
    title: 'ERP and CRM Software Solutions',
    subtitle: 'Integrated sales pipelines, double-entry financial ledgers, procurement automation, and executive forecasting.',
    category: 'Enterprise Resource Planning',
    description: 'Connect your business processes with integrated CRM and ERP solutions. Centralized software that helps you manage customer relationships, business assets, operational processes and critical business data to improve coordination, efficiency and decision making.',
    ctaText: 'Know about CRM & ERP Solutions',
    extendedDescription: 'A unified enterprise operating system designed to replace fragmented SaaS point solutions. Integrates multi-stage CRM pipelines, customer support ticketing, automated procurement orders, double-entry general ledgers, and predictive executive dashboards into one cohesive ecosystem.',
    iconName: 'Layers',
    image: '/assets/products/product_crm_erp.png',
    metrics: '-65% Operational Overhead',
    features: [
      'End-to-end sales lead pipeline & deal stages',
      'Procurement, vendor purchase orders & inventory',
      'Double-entry financial accounting & invoicing',
      'Custom workflow automation triggers & SLA timers',
      'Executive KPI dashboards with predictive forecasting'
    ],
    stats: [
      { label: 'Operational Overhead', value: '-65%', hint: 'Eliminates redundant software' },
      { label: 'Deal Close Rate', value: '+38%', hint: 'Automated follow-up sequences' },
      { label: 'Financial Close Time', value: '2 Days', hint: 'Down from 2 weeks' },
      { label: 'API Uptime SLA', value: '99.95%', hint: 'Enterprise redundant cloud' }
    ],
    modules: [
      {
        title: '360° Customer Relationship Hub',
        description: 'Complete customer profiles tracking contact touchpoints, deal history, communication transcripts, and support tickets.',
        iconName: 'Contact'
      },
      {
        title: 'Multi-Stage Sales Pipelines',
        description: 'Visual deal pipeline stages with win-probability metrics, automated follow-up reminders, and quote generation.',
        iconName: 'Funnel'
      },
      {
        title: 'Double-Entry Financial Suite',
        description: 'Compliant general ledger, accounts payable/receivable, automated tax reconciliation, and instant balance sheet generation.',
        iconName: 'Calculator'
      },
      {
        title: 'Procurement & Vendor Orders',
        description: 'Purchase requisition approval hierarchies, vendor quote comparisons, and automated stock replenishment.',
        iconName: 'Receipt'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code event trigger builder: "When deal closes > generate invoice > alert operations team on Slack > schedule onboarding".',
        iconName: 'Workflow'
      },
      {
        title: 'Executive KPI Forecast Hub',
        description: 'Predictive revenue forecasting, gross margin analysis, cash-flow telemetry, and department budget adherence.',
        iconName: 'BarChart'
      }
    ],
    tech: ['React 19', 'Python FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Redis'],
    specs: [
      { label: 'Deployment', value: 'Private Cloud (AWS, Azure, GCP) or On-Premise' },
      { label: 'Data Sovereignty', value: 'Dedicated database instance with automated daily snapshots' },
      { label: 'Compliance', value: 'GAAP, IFRS, SOC 2 Type II audit readiness' },
      { label: 'Customization', value: 'Custom data models, custom fields, and webhook triggers' }
    ],
    useCases: [
      'Mid-Market to Large Enterprises',
      'Supply Chain & Distribution Firms',
      'Professional Services & Consulting Agencies',
      'Manufacturing & Production Plants'
    ],
    faqs: [
      {
        question: 'Can this solution replace our existing QuickBooks, HubSpot, and Jira stack?',
        answer: 'Yes. Bloody Developer CRM & ERP consolidates sales deals, billing ledgers, procurement, and internal workflows into a single cohesive database, saving thousands in monthly third-party software subscriptions.'
      },
      {
        question: 'Can we customize the data models and sales pipeline stages?',
        answer: 'Completely. Every pipeline stage, custom field, approval workflow hierarchy, and reporting view is fully customizable to match your exact internal business operations.'
      },
      {
        question: 'What is the implementation and data onboarding timeline?',
        answer: 'A standard enterprise deployment with historical data migration and custom workflow configuration typically takes between 2 to 4 weeks with our dedicated engineering team.'
      }
    ]
  }
];
