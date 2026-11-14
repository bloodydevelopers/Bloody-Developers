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
    description: 'School ERP, Student management, attendance and academic administration software.',
    solutions: ['Campus ERP', 'Student Information', 'Staff Attendance', 'Academic Records']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Systems for managing healthcare, patient records, and hospital administration.',
    solutions: ['Patient Portals', 'Hospital Resource Planning', 'Clinical Records', 'Healthcare Management']
  },
  {
    id: 'food',
    name: 'Food & Hospitality',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Software. Restaurant, cafe, billing, inventory and order management software for the food and hospitality industry.',
    solutions: ['Touch POS & KDS', 'Cafe Billing', 'Inventory Tracking', 'Order Management']
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Retail business & inventory management solutions.',
    solutions: ['Omnichannel POS', 'Inventory Management', 'E-Commerce Platform', 'Multi-Vendor Marketplace']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Production management, workflow automation & operational software.',
    solutions: ['Production Scheduling', 'Workflow Automation', 'Operational Software', 'Quality Assurance']
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Property Management Real Estate Business & CRM Automation Solution.',
    solutions: ['Property Management', 'Real Estate CRM', 'Tenant Portals', 'Process Automation']
  },
  {
    id: 'professional',
    name: 'Professional Services',
    image: '/assets/images/industry_architecture_hd_1793870851818.jpg',
    description: 'Custom business apps, CRM, workflow management systems.',
    solutions: ['Custom Business Apps', 'CRM Development', 'Workflow Systems', 'Client Portals']
  }
];
