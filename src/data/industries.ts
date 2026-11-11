export interface Industry {
  id: string;
  name: string;
  image: string;
  description: string;
  solutions: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'education',
    name: 'Education',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Scalable campus management platforms, learning management systems, and smart grade portals.',
    solutions: ['Campus ERP', 'Online Examination Engine', 'Tuition Billing', 'Parent-Teacher App']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'HIPAA-ready clinical workflows, patient appointment scheduling, EHR/EMR systems, and telemedicine.',
    solutions: ['Patient Portals', 'Hospital Resource Planning', 'Pharmacy Inventory', 'Telehealth Streaming']
  },
  {
    id: 'food',
    name: 'Food & Hospitality',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Intelligent POS, automated kitchen displays, multi-branch table booking, and supplier procurement.',
    solutions: ['Touch POS & KDS', 'QR Table Ordering', 'Central Kitchen Sync', 'Recipe Costing']
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Omnichannel commerce platforms, barcode inventory reconciliation, and real-time fulfillment pipelines.',
    solutions: ['Omnichannel POS', 'Warehouse Management', 'Automated Dropshipping', 'Loyalty Engines']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Shop-floor IoT telemetry, bill of materials management, predictive maintenance, and quality tracking.',
    solutions: ['Production Scheduling', 'BOM Cost Tracking', 'Machine Telemetry', 'Quality Assurance']
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Property management, tenant lease automation, CRM for brokerages, and interactive virtual floor plans.',
    solutions: ['Brokerage CRM', 'Lease Automation', 'Maintenance Dispatch', 'Financial Reporting']
  },
  {
    id: 'professional',
    name: 'Professional Services',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Client billing, billable hours tracking, document security vaults, and collaborative project management.',
    solutions: ['Client Portal', 'Automated Retainers', 'Contract Workflows', 'Audit Logging']
  }
];
