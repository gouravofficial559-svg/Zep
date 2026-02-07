import { Hammer, Home, Building2, HardHat, Ruler, Truck } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Zeppetella Construction LLC",
  phone: "(503) 939-2240",
  email: "robert@zeppcollc.com",
  address: "205 NE Oak View Ln. Estacada, Oregon 97023",
  location: "Oregon, USA",
};

export const SERVICES = [
  {
    title: "Residential Remodeling",
    icon: Home,
    image: "https://zeppcollc.com/wp-content/uploads/2026/02/IMG_5608-scaled.jpg",
    desc: "Complete home transformations, from kitchen upgrades to full renovations."
  },
  {
    title: "Commercial Construction",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    desc: "Professional build-outs and improvements for businesses and retail spaces."
  },
  {
    title: "Home Additions",
    icon: Ruler,
    image: "https://zeppcollc.com/wp-content/uploads/2026/02/IMG_5610-scaled.jpg",
    desc: "Expanding your living space with seamless, high-quality additions."
  },
  {
    title: "Kitchen & Bath",
    icon: Hammer,
    image: "https://zeppcollc.com/wp-content/uploads/2026/02/IMG_9039-scaled.jpg",
    desc: "Modernizing your most essential rooms with custom designs and finishes."
  },
  {
    title: "Ground-Up Construction",
    icon: HardHat,
    image: "https://zeppcollc.com/wp-content/uploads/2026/02/IMG_0554-scaled.jpg",
    desc: "Building your dream project from the foundation to the final shingle."
  },
  {
    title: "General Contracting",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    desc: "Comprehensive project management for complex construction needs."
  },
];

export const REVIEWS = [
  {
    name: "Michael S.",
    rating: 5,
    text: "Robert and his team transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible.",
    source: "Google"
  },
  {
    name: "Sarah J.",
    rating: 5,
    text: "Zeppetella Construction built our home addition on time and on budget. Their communication throughout the project was outstanding.",
    source: "Houzz"
  },
  {
    name: "David P.",
    rating: 5,
    text: "Highly professional and trustworthy. We hired them for a commercial build-out and the quality of work exceeded our expectations.",
    source: "Facebook"
  }
];

export const FAQS = [
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Zeppetella Construction LLC is fully licensed, bonded, and insured in the state of Oregon. We have over 20 years of experience ensuring your project is in safe hands."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve the Portland Metro Area and surrounding communities, including Estacada, Gresham, Happy Valley, and Clackamas."
  },
  {
    question: "Do you handle permits?",
    answer: "Absolutely. As a full-service General Contractor, we handle all necessary permitting and inspections to ensure your project complies with local building codes."
  },
  {
    question: "What type of projects do you specialize in?",
    answer: "We specialize in residential remodeling, home additions, ground-up construction, and commercial tenant improvements. We focus on quality over compromise."
  }
];