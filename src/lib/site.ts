export const site = {
  name: "E Accounting Services",
  tagline: "Tailored Accounting Solutions for Small Business",
  url: "https://eaccountingservices.ca",
  since: 2008,
  address: {
    street: "93-1 Pownal Street",
    city: "Charlottetown",
    province: "PEI",
    provinceCode: "PE",
    postal: "C1A 3W4",
  },
  phone: "902-367-3323",
  fax: "902-367-3324",
  email: "info@eaccountingservices.ca",
  careersEmail: "careers@eaccountingservices.ca",
  facebook: "https://www.facebook.com/EAccountingPEI",
  facebookLabel: "facebook.com/EAccountingPEI",
} as const;

export const nav = [
  { label: "Working With You", href: "#working-with-you" },
  { label: "Solutions", href: "#solutions" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTrust = [
  "Free consultations",
  "Your office, our office, or online",
  "Same person on your books, every time",
];

export const promise =
  "We worry about your numbers. Because to us, you're not just another number.";

export const comparison = {
  before: [
    "Hard to find reliable help",
    "Revolving door of part-time staff",
    "Costly mistakes to fix",
    "Slow feedback",
  ],
  after: [
    "With you for the long haul",
    "The same person on your books",
    "Problems spotted before they happen",
    "Services that adapt as you grow",
  ],
};

export type IconName =
  | "storefront"
  | "ledger"
  | "exchange"
  | "receipt"
  | "people"
  | "report"
  | "laptop"
  | "compass"
  | "fileCheck";

export const solutions: { title: string; short: string; icon: IconName }[] = [
  { title: "Business registration & new company set-up", short: "Business set-up", icon: "storefront" },
  { title: "Complete bookkeeping, from opening the mail to writing cheques", short: "Bookkeeping", icon: "ledger" },
  { title: "Payables, receivables & account reconciliations", short: "Payables & receivables", icon: "exchange" },
  { title: "Federal & provincial sales tax returns", short: "Sales tax returns", icon: "receipt" },
  {
    title:
      "Full payroll: remittances, T4s, ROEs, and working with third-party payroll providers",
    short: "Payroll", icon: "people",
  },
  {
    title:
      "Internal financial reporting & review, year-end preparation, and liaison with external auditors",
    short: "Financial reporting", icon: "report",
  },
  { title: "Accounting system selection, set-up & training", short: "Accounting systems", icon: "laptop" },
  { title: "Business planning, forecasting & budgeting", short: "Planning & budgeting", icon: "compass" },
  { title: "Personal & corporate tax preparation", short: "Tax preparation", icon: "fileCheck" },
];

export const steps = [
  {
    title: "Free consultation",
    body: "We ask a lot of questions and listen: your past experience, current situation, future plans, and your biggest bookkeeping headaches.",
  },
  {
    title: "Review your books",
    body: "We look at your existing books and documents to assess the volume and type of work required.",
  },
  {
    title: "Agree a schedule",
    body: "Together we set a provisional schedule with the tasks to be completed.",
  },
  {
    title: "We get to work",
    body: "When, where, and as often as you want: at your office or home, our office, or online. We take time to discuss new issues as they arise.",
  },
];

export const billingTags = ["Monthly in arrears", "Hourly or fixed fee", "Flexible terms"];

export const faqs = [
  {
    q: "What exactly do you do?",
    a: "As much or as little as you need, from annual tax filing to weekly bookkeeping and everything in between.",
  },
  { q: "Is the first consultation free?", a: "Yes, consultations are free." },
  { q: "Where do we meet?", a: "At your office or home, our office, or online." },
  { q: "How do you bill?", a: "Monthly in arrears, hourly or fixed fee, with flexible terms." },
  {
    q: "Will the same person handle my books?",
    a: "Yes. We're with you for the long haul, with the same person taking care of your books.",
  },
  {
    q: "Can you work with my existing payroll provider?",
    a: "Yes, we work with third-party payroll providers.",
  },
];

export const helpOptions = [
  "Taxes",
  "Bookkeeping",
  "Payroll",
  "Sales Tax",
  "Business Set-up",
  "Planning",
];

// From the original site's "The Right People" page. Drop a photo at
// public/images/<photo> to replace the monogram placeholder.
export const team = [
  {
    name: "Emma Fugate",
    role: "President",
    email: "emma@eaccountingservices.ca",
    photo: "team-emma.jpg",
    bio: "Before gaining qualifications in Accounting and Business Administration in Canada and opening E Accounting Services, Emma worked for eight years in human resource and project management in the UK, US, Japan and Spain. Whilst accounting is now her focus, Emma's broad experience offers clients additional business expertise that they would not usually receive from a bookkeeper. Since coming to Canada, Emma received the Governor General's Collegiate Bronze Medal and has been recognized by Charlottetown Chamber of Commerce and Rotary Club of Charlottetown Royalty for her business planning, entrepreneurship and contribution to the community.",
  },
  {
    name: "Rose Llewellyn",
    role: "Accountant",
    email: "rose@eaccountingservices.ca",
    photo: "team-rose.jpg",
    bio: "Rose Llewellyn has been a part of our team as an Accountant since 2009. She graduated with a diploma in Accounting from Holland College in 1992 and has numerous business related courses over the years to keep up with changes in technology. She has over 25 years of accounting and bookkeeping experience and is a great resource in the area of business and finance. She is based out of Charlottetown east and has vast experience working with various industries such as fishing, farming, tourism and non-profit.",
  },
  {
    name: "Derek Lowe",
    role: "Tax Specialist",
    email: "derek@eaccountingservices.ca",
    photo: "team-derek.jpg",
    bio: "After graduating the Accounting Technician program at CompuCollege in 2004, Derek worked in the accounting industry for over ten years specializing in personal and small business taxes. In 2015, Derek brought his expertise to E Accounting and has excelled in the role of tax specialist as well as setting up and maintaining books for several clients. Aside from spending time with his beautiful wife and three children (Olivia, Ethan and Caleb), Derek loves to watch hockey in the winter and Toronto Blue Jays in the summer.",
  },
  {
    name: "Breanna Doyle",
    role: "Accounting Technician",
    email: "breanna@eaccountingservices.ca",
    photo: "team-breanna.jpg",
    bio: "Breanna joined the team at E Accounting Services in 2016. She graduated from Holland College with an Accounting Technician certificate. Breanna has several years bookkeeping and administration experience in various fields and especially within the food service industry. When Breanna is not helping out her clients you can find her cheering on the Habs!",
  },
];

// Client quotes from the original site.
export const testimonials = [
  {
    quote:
      "E Accounting meets and exceeds all of our accounting needs. Emma and her professional staff always work hard to ensure our books are done accurately and on time. I would recommend E Accounting to anyone.",
    name: "M. Hilchie",
    title: "President, Hilchie Quality Homes",
  },
  {
    quote:
      "E Accounting has been great in helping us with some challenging assignments. We are very happy with their service and would recommend them to other companies that might need some help navigating their own accounting waters.",
    name: "M. Rust, CA",
    title: "CFO, Master Packaging Inc.",
  },
  {
    quote:
      "Emma Fugate is an exceptional entrepreneur who understands the needs of her clients and I highly recommend her and her team at E Accounting Services.",
    name: "A. Campbell, FCGA",
    title: "Learning Manager, Holland College · Former CFO, WestJet",
  },
  {
    quote: "The E Accounting team makes our business their top priority.",
    name: "K. O'Neill",
    title: "President, Andrews of PEI",
  },
];

export const presidentQuote = {
  quote:
    "E Accounting Staff are committed to saving you time, reducing your stress and giving you peace of mind.",
  name: "Emma Fugate",
  title: "President",
};

// The original site's banner words, each led by the "E".
export const eWords = ["Experienced", "Educated", "Efficient", "Energetic", "Essential"];

// Logos and links from the original site.
export const affiliations = [
  {
    name: "Greater Charlottetown Area Chamber of Commerce",
    logo: "/images/affiliations/chamber.png",
    url: "https://charlottetownchamber.com/",
    width: 144,
    height: 64,
  },
  {
    name: "Prince Edward Island Business Women's Association",
    logo: "/images/affiliations/bwa.png",
    url: "https://www.peibwa.org/",
    width: 156,
    height: 80,
  },
  {
    name: "The Canadian Payroll Association",
    logo: "/images/affiliations/cpa.png",
    url: "https://payroll.ca/",
    width: 147,
    height: 67,
  },
];

// Sample photos are CC0 from StockSnap (no credit required) except this one.
export const photoCredits = [
  {
    label: "Charlottetown street photo",
    author: "Dougtone",
    url: "https://www.flickr.com/photos/7327243@N05/8091935233",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
  },
];
