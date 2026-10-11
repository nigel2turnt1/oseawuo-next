export interface PracticeArea {
  id: number;
  slug: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  heroSubtitle: string;
  keyBenefits: string[];
  overview: string;
  expertise: string[];
  services: { title: string; description: string }[];
  whyChoose: { title: string; description: string }[];
  recentCases: {
    title: string;
    outcome: string;
    description: string;
    year: number;
    attorney: string;
  }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 1,
    slug: "maritime-shipping",
    title: "Maritime & Shipping",
    icon: "Anchor",
    image: "/images/maritime.jpg",
    description:
      "Admiralty and shipping law, charter parties, cargo claims, salvage, collisions and maritime insurance.",
    heroSubtitle:
      "Admiralty, shipping claims, charter parties and maritime insurance",
    keyBenefits: [
      "Dedicated maritime partners",
      "Extensive port & terminal experience",
      "P&I club relationships",
    ],
    overview:
      "Led by experienced partners, our Maritime & Shipping team advises shipowners, charterers, terminals and P&I clubs on casualty response, cargo claims, charterparty disputes, salvage, collisions, and marine insurance. We act for major shipping lines, terminals and insurers on both domestic and cross-border matters.",
    expertise: [
      "Charterparty & voyage claims",
      "Cargo & bill of lading disputes",
      "Salvage and collision matters",
      "Port & terminal operations",
      "Marine insurance and P&I work",
      "Vessel arrest and enforcement",
    ],
    services: [
      {
        title: "Casualty & Incident Response",
        description:
          "Immediate mobilisation, preservation of evidence and coordination with technical experts",
      },
      {
        title: "Claims Handling",
        description:
          "Management and resolution of cargo, bunker and charterparty claims",
      },
      {
        title: "Advisory for Ports & Terminals",
        description:
          "Contract drafting, operational risk mitigation and regulatory compliance",
      },
      {
        title: "P&I & Insurer Liaison",
        description:
          "Representation and negotiation with P&I clubs and insurers",
      },
    ],
    whyChoose: [
      {
        title: "Market Contacts",
        description:
          "Strong relationships with shipping operators, terminals and P&I clubs",
      },
      {
        title: "Hands-On Experience",
        description:
          "Proven record advising on major port and terminal matters",
      },
    ],
    recentCases: [
      {
        title: "Advising Tema Container Terminal on operational arrangements",
        outcome: "Advised",
        description:
          "Advised Tema Container Terminal on commercial and operational arrangements.",
        year: 2022,
        attorney: "O.K. Osafo-Buabeng",
      },
    ],
    process: [
      {
        title: "Intake & Mobilisation",
        description:
          "Immediate case intake and coordination with technical experts",
      },
      {
        title: "Liability & Quantum Assessment",
        description: "Establishing liability and assessing recoverable quantum",
      },
      {
        title: "Resolution",
        description: "Negotiation, arbitration or litigation as needed",
      },
    ],
    faqs: [
      {
        question: "Do you work with P&I clubs?",
        answer:
          "Yes — we routinely act with and before many major P&I clubs on claims and recoveries.",
      },
    ],
  },
  {
    id: 2,
    slug: "energy-natural-resources",
    title: "Energy & Natural Resources",
    icon: "Zap",
    image: "/images/energy.jpg",
    description:
      "Regulatory advice, transactions, licensing, project development and disputes in oil, gas, mining and renewables.",
    heroSubtitle: "Mining, oil & gas, power projects, and resource transactions",
    keyBenefits: [
      "Project development & financing",
      "Mining & energy transactional experience",
      "Regulatory and licensing expertise",
    ],
    overview:
      "We advise on mining, oil & gas and power sector matters including exploration, joint ventures, project development and financing. Our team has acted for major international mining and energy companies on transactional, regulatory and project work.",
    expertise: [
      "Mining & exploration agreements",
      "Project development & financing",
      "Power purchase & energy transactions",
      "Environmental & regulatory compliance",
      "Joint ventures and restructurings",
    ],
    services: [
      {
        title: "Mining Transactions",
        description:
          "Negotiation of exploration, option and mining agreements",
      },
      {
        title: "Power & Energy Projects",
        description: "Advice on PPAs, project contracts and commissioning",
      },
      {
        title: "Regulatory Approvals",
        description: "Securing ministerial and environmental approvals",
      },
    ],
    whyChoose: [
      {
        title: "Sector Experience",
        description:
          "Advised major mining and energy clients on complex matters",
      },
      {
        title: "Project Track Record",
        description:
          "Led key transactional and project matters including consortium projects",
      },
    ],
    recentCases: [
      {
        title: "Advising Great Consolidated Diamonds at Akwatia",
        outcome: "Advised",
        description:
          "Ongoing advisory work at the Akwatia diamond concession.",
        year: 2023,
        attorney: "Reynolds Twumasi Jnr",
      },
      {
        title: "Consortium Power Project",
        outcome: "Advised",
        description:
          "Legal lead for consortium including power purchase negotiations.",
        year: 2007,
        attorney: "Reynolds Twumasi Jnr",
      },
    ],
    process: [
      {
        title: "Commercial Assessment",
        description: "Technical and commercial review of proposed transactions",
      },
      {
        title: "Agreement Negotiation",
        description: "Drafting and negotiating complex commercial agreements",
      },
      {
        title: "Regulatory Support",
        description: "Securing approvals and ensuring compliance",
      },
    ],
    faqs: [
      {
        question: "Who are some of your mining clients?",
        answer:
          "AngloGold Ashanti, Great Consolidated Diamonds Ghana, Goldstone and others.",
      },
    ],
  },
  {
    id: 3,
    slug: "business-industry",
    title: "Business & Industry",
    icon: "Briefcase",
    image: "/images/business.jpg",
    description:
      "Commercial contracts, sector-specific compliance, corporate advisory and commercial dispute resolution for businesses.",
    heroSubtitle:
      "Commercial contracts, company secretarial and sector advisory services",
    keyBenefits: [
      "Commercial contracting expertise",
      "Company secretarial & compliance services",
      "Debt recovery and enforcement support",
    ],
    overview:
      "We deliver commercial and regulatory support to private and corporate clients across various sectors. Services include company secretarial support, contract drafting, regulatory compliance and focused debt recovery solutions.",
    expertise: [
      "Commercial contracts",
      "Debt recovery & enforcement",
      "Company secretarial services",
      "Compliance and regulatory advisory",
    ],
    services: [
      {
        title: "Contract Drafting & Negotiation",
        description: "Drafting commercial agreements and supply contracts",
      },
      {
        title: "Company Secretarial",
        description: "Corporate governance, filings and secretarial services",
      },
      {
        title: "Debt Recovery",
        description: "Legal recovery strategies, receivership and enforcement",
      },
    ],
    whyChoose: [
      {
        title: "Partner Supervision",
        description: "All matters supervised by a Partner",
      },
      {
        title: "Administrative Resources",
        description:
          "Dedicated back-office support to ensure efficient delivery",
      },
    ],
    recentCases: [
      {
        title: "Receivership & Asset Realisation",
        outcome: "Ongoing",
        description:
          "Assisting Joint Receivers with asset realisation and debt recovery.",
        year: 2019,
        attorney: "Senior Partners",
      },
    ],
    process: [
      {
        title: "Partner Oversight",
        description: "Senior partner oversight on strategy and staffing",
      },
      {
        title: "Recovery Strategy",
        description: "Negotiation, litigation and enforcement pathways",
      },
      {
        title: "Secretarial Support",
        description: "Ongoing corporate secretarial management",
      },
    ],
    faqs: [
      {
        question: "Do you assist with receivership mandates?",
        answer:
          "Yes. We have acted for receivers and joint receivers on substantial asset recovery mandates.",
      },
    ],
  },
  {
    id: 4,
    slug: "construction",
    title: "Construction",
    icon: "Hammer",
    image: "/images/construction.jpg",
    description:
      "Construction contracts, procurement, project claims, delay analysis and dispute avoidance/management.",
    heroSubtitle:
      "Advising contractors, employers and developers on construction disputes and contracts",
    keyBenefits: [
      "Construction contract drafting",
      "Dispute resolution for construction claims",
      "Advisory for employers and contractors",
    ],
    overview:
      "Our Construction practice advises on a spectrum of construction matters including contract drafting, claims management, performance bonds and dispute resolution. We act for contractors, subcontractors, developers and employers on both contentious and non-contentious matters.",
    expertise: [
      "Construction contracts & procurement",
      "Claims & variations",
      "Performance bonds & guarantees",
      "Adjudication, arbitration & litigation",
      "Delay & liquidated damages claims",
    ],
    services: [
      {
        title: "Contract Drafting & Procurement Advice",
        description:
          "Drafting construction contracts and advising on procurement strategy",
      },
      {
        title: "Claims Management",
        description:
          "Assessment and resolution of variations, defects and delay claims",
      },
      {
        title: "Dispute Resolution",
        description: "Arbitration, adjudication and litigation support",
      },
    ],
    whyChoose: [
      {
        title: "Industry Knowledge",
        description:
          "Deep understanding of construction procurement and contract forms",
      },
      {
        title: "Practical Solutions",
        description:
          "Commercially focused solutions to complex construction disputes",
      },
    ],
    recentCases: [
      {
        title: "Advising major contractor on variation claims",
        outcome: "Advised",
        description:
          "Assisted contractor with complex variation and delay claims.",
        year: 2021,
        attorney: "Construction Lead",
      },
    ],
    process: [
      {
        title: "Contract Drafting & Review",
        description: "Drafting and reviewing contracts",
      },
      {
        title: "Claims Assessment",
        description: "Evaluating claims and compiling quantum",
      },
      {
        title: "Resolution Path",
        description: "Negotiation, adjudication, arbitration or litigation",
      },
    ],
    faqs: [
      {
        question: "What is an adjudication?",
        answer:
          "A fast-track dispute resolution mechanism commonly used in construction to obtain an interim decision pending final resolution.",
      },
    ],
  },
  {
    id: 5,
    slug: "corporate-law",
    title: "Corporate Law (incl. M&A)",
    icon: "Building2",
    image: "/images/law1.jpg",
    description:
      "Mergers & acquisitions, corporate governance, securities compliance, due diligence and joint ventures.",
    heroSubtitle:
      "Mergers & acquisitions, private equity and complex corporate transactions",
    keyBenefits: ["M&A execution", "Transaction advice", "Due diligence & closing support"],
    overview:
      "We advise on mergers, acquisitions, private equity transactions and complex corporate restructurings. Our team supports both buyers and sellers through transaction structuring, due diligence and negotiation to successful closings.",
    expertise: [
      "Mergers & Acquisitions",
      "Private Equity",
      "Transaction Structuring",
      "Due Diligence",
      "Post-Merger Integration",
    ],
    services: [
      {
        title: "M&A Advisory",
        description: "Transaction structuring, negotiation and closing support",
      },
      {
        title: "Due Diligence",
        description: "Comprehensive commercial and legal due diligence",
      },
      {
        title: "Post-Transaction Integration",
        description: "Support on integration and related governance matters",
      },
    ],
    whyChoose: [
      {
        title: "Transactional Expertise",
        description: "Seasoned lawyers with significant M&A experience",
      },
      {
        title: "Commercial Focus",
        description:
          "Transactions structured to align with commercial objectives",
      },
    ],
    recentCases: [
      {
        title: "Advising on strategic acquisition",
        outcome: "Completed",
        description: "Advised client on acquisition of key regional business.",
        year: 2023,
        attorney: "M&A Lead",
      },
    ],
    process: [
      {
        title: "Assessment",
        description: "Commercial and legal assessment of transaction",
      },
      {
        title: "Negotiation & Documentation",
        description: "Drafting and negotiating definitive agreements",
      },
      {
        title: "Closing & Post-Closing",
        description: "Closing mechanics and integration support",
      },
    ],
    faqs: [
      {
        question: "What should buyers focus on during due diligence?",
        answer:
          "Commercial terms, liabilities, regulatory risks, contracts, and financial statements are key focus areas during due diligence.",
      },
    ],
  },
  {
    id: 7,
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    icon: "Gavel",
    image: "/images/litigation.jpg",
    description:
      "Complex civil and commercial litigation, arbitration and alternative dispute resolution services.",
    heroSubtitle: "International arbitration, mediation and other ADR",
    keyBenefits: [
      "Commercial and other litigation",
      "Experienced ADR counsel",
      "Multi-jurisdictional enforcement experience",
      "Appeals",
    ],
    overview:
      "Our Litigation and ADR teams handle complex disputes, appeals, international arbitration and enforcement. We act for both claimants and respondents in ICC, LCIA, ad hoc and other institutional arbitrations and manage cross-border enforcement of awards.",
    expertise: [
      "International Arbitration",
      "Commercial Mediation",
      "Enforcement of Foreign Judgments & Awards",
      "Multi-jurisdictional Litigation",
    ],
    services: [
      {
        title: "Litigation",
        description: "Full representation in trial and appellate court",
      },
      {
        title: "ADR",
        description: "Arbitration, mediation and negotiated settlements",
      },
      {
        title: "Enforcement",
        description: "Cross-border enforcement and recognition of awards",
      },
    ],
    whyChoose: [
      {
        title: "International Reach",
        description:
          "Experience acting in multi-jurisdictional arbitrations and enforcement",
      },
    ],
    recentCases: [
      {
        title: "Cross-Border Commercial Arbitration",
        outcome: "Won",
        description:
          "Successfully represented client in multi-jurisdictional arbitration.",
        year: 2022,
        attorney: "Arbitration Lead",
      },
    ],
    process: [
      {
        title: "Case Assessment",
        description: "Jurisdiction, relief and enforcement options analysis",
      },
      {
        title: "Proceedings",
        description: "Litigation or ADR processes managed effectively",
      },
      {
        title: "Enforcement",
        description: "Post-award enforcement strategy and execution",
      },
    ],
    faqs: [
      {
        question: "When is arbitration preferable to litigation?",
        answer:
          "Arbitration can be preferable for international commercial disputes, confidentiality, and specialist tribunal expertise.",
      },
    ],
  },
  {
    id: 8,
    slug: "intellectual-property",
    title: "Intellectual Property",
    icon: "Lightbulb",
    image: "/images/it-1.jpg",
    description:
      "Trademarks, patents, copyrights, trade secrets and IP enforcement and licensing.",
    heroSubtitle: "Trademarks, patents, copyrights and IP enforcement",
    keyBenefits: ["IP enforcement and litigation", "Licensing and commercialisation"],
    overview:
      "Our Intellectual Property practice advises on the protection, enforcement and commercialisation of intellectual property rights. We assist clients with trademark and patent registration, copyright matters, trade secrets and IP disputes in Ghana and across the region.",
    expertise: [
      "Trademark registration and opposition",
      "Patent and design registration",
      "Copyright and related rights",
      "IP licensing and assignments",
      "IP enforcement and anti-counterfeiting",
      "Domain names and online IP",
    ],
    services: [
      {
        title: "IP Registration",
        description:
          "Filing and prosecution of trademarks, patents and designs",
      },
      {
        title: "IP Advisory",
        description:
          "Portfolio management, clearance searches and strategy",
      },
      {
        title: "Enforcement",
        description: "Civil and criminal enforcement, injunctions and damages",
      },
      {
        title: "Licensing",
        description: "Drafting and negotiating IP licences and assignments",
      },
    ],
    whyChoose: [
      {
        title: "Local and Regional Reach",
        description:
          "Experience with national and regional IP regimes including ARIPO",
      },
      {
        title: "Commercial Focus",
        description:
          "IP advice aligned with business objectives and risk management",
      },
    ],
    recentCases: [
      {
        title: "Trademark opposition and registration",
        outcome: "Successful",
        description:
          "Secured registration and defended opposition for client brand.",
        year: 2023,
        attorney: "IP Lead",
      },
    ],
    process: [
      {
        title: "Assessment",
        description: "Review of IP assets and protection strategy",
      },
      {
        title: "Filing or Enforcement",
        description: "Registration or enforcement as appropriate",
      },
      {
        title: "Ongoing Management",
        description: "Renewals, monitoring and portfolio advice",
      },
    ],
    faqs: [
      {
        question: "Do you handle ARIPO filings?",
        answer:
          "Yes — we advise on and file applications through the African Regional Intellectual Property Organisation where applicable.",
      },
    ],
  },
  {
    id: 9,
    slug: "labour-law",
    title: "Labour Law",
    icon: "Users",
    image: "/images/it-2.jpg",
    description:
      "Employment contracts, workplace disputes, collective bargaining and labour compliance.",
    heroSubtitle: "Employment relations, disputes and labour compliance",
    keyBenefits: [
      "Employment contracts and policies",
      "Dispute resolution and litigation",
      "Labour compliance and audit",
    ],
    overview:
      "Our Labour Law team advises employers and employees on the full range of employment and labour matters. We draft employment contracts and workplace policies, handle disciplinary and dismissal issues, and represent clients in labour disputes, mediation and before the Labour Commission and courts.",
    expertise: [
      "Employment contracts and handbooks",
      "Termination and redundancy",
      "Unfair dismissal and wrongful termination",
      "Collective bargaining and trade unions",
      "Labour Commission proceedings",
      "Occupational health and safety",
    ],
    services: [
      {
        title: "Advisory",
        description: "Employment contracts, policies and compliance reviews",
      },
      {
        title: "Dispute Resolution",
        description:
          "Negotiation, mediation and Labour Commission representation",
      },
      {
        title: "Litigation",
        description: "Employment-related litigation in the courts",
      },
    ],
    whyChoose: [
      {
        title: "Practical Experience",
        description:
          "Regular representation before the Labour Commission and courts",
      },
      {
        title: "Employer and Employee Work",
        description: "We act for both sides with balanced, strategic advice",
      },
    ],
    recentCases: [
      {
        title: "Unfair dismissal claim",
        outcome: "Settled",
        description:
          "Represented employer in contested dismissal; matter settled on favourable terms.",
        year: 2023,
        attorney: "Labour Lead",
      },
    ],
    process: [
      {
        title: "Assessment",
        description: "Review of facts, contracts and applicable law",
      },
      {
        title: "Strategy",
        description: "Advisory, negotiation or formal proceedings",
      },
      {
        title: "Resolution",
        description: "Settlement or determination by Commission or court",
      },
    ],
    faqs: [
      {
        question: "When must a matter go to the Labour Commission?",
        answer:
          "Certain employment disputes are required to be submitted to the Labour Commission before court action; we advise on the correct pathway.",
      },
    ],
  },
  {
    id: 10,
    slug: "criminal-defence",
    title: "Criminal Defense",
    icon: "Shield",
    image: "/images/it-3.jpg",
    description:
      "Criminal defence representation, bail applications, trials and appeals.",
    heroSubtitle: "Criminal defence representation and appeals",
    keyBenefits: ["Experienced criminal defence advocates"],
    overview:
      "Our Criminal Defence practice provides robust representation for individuals and entities facing criminal allegations. We advise from the investigative stage through to trial and appeal, including bail applications, charge negotiations and full trial defence.",
    expertise: [
      "Bail and remand applications",
      "Trial defence (summary and indictable)",
      "Appeals and review",
      "White-collar and fraud defence",
      "Regulatory and quasi-criminal matters",
    ],
    services: [
      {
        title: "Pre-Charge Advice",
        description: "Advice during investigation and before charge",
      },
      {
        title: "Bail & Remand",
        description: "Bail applications and opposition to remand",
      },
      {
        title: "Trial Defence",
        description: "Full representation at trial and in sentencing",
      },
      {
        title: "Appeals",
        description: "Appeals against conviction and/or sentence",
      },
    ],
    whyChoose: [
      {
        title: "Courtroom Experience",
        description:
          "Partners recognised for criminal advocacy in the superior courts",
      },
      {
        title: "Responsive Representation",
        description: "Urgent matters and custody cases prioritised",
      },
    ],
    recentCases: [
      {
        title: "Criminal trial defence",
        outcome: "Acquittal",
        description:
          "Secured acquittal for client after full trial on fraud-related charges.",
        year: 2022,
        attorney: "Criminal Lead",
      },
    ],
    process: [
      {
        title: "Intake & Bail",
        description: "Immediate advice and bail where applicable",
      },
      {
        title: "Preparation",
        description: "Case analysis, evidence review and defence strategy",
      },
      {
        title: "Trial & Beyond",
        description: "Representation at trial and on appeal if required",
      },
    ],
    faqs: [
      {
        question: "Do you handle bail applications?",
        answer:
          "Yes — we regularly apply for bail in the lower and superior courts and advise on remand and bail conditions.",
      },
    ],
  },
];

export interface TeamMember {
  name: string;
  title: string;
  admitted: string;
  education: string;
  experience: string;
  languages: string;
  email: string;
  image: string | null;
}

export const SENIOR_PARTNERS: TeamMember[] = [
  {
    name: "Kwaku Osafo-Buabeng",
    title: "Lead Partner",
    admitted: "1994, Ghana",
    education: "University of Ghana, Legon (LL.B., 1992); Ghana Law School (1994).",
    experience:
      "Mr. Osafo-Buabeng is a Protection & Indemnity Legal correspondent and Lead Partner, Oseawuo Chambers. He is recognized by Ghana's Superior Courts as one of the leading advocates in the country. He has been involved in numerous landmark cases on administrative law, constitutional law, maritime law, commercial law, criminal law, land law, company law and civil procedure and has represented the interest of several Protection and Indemnity (P & I) Clubs including the North of England, West of England, Swedish Club, China P. & I., A. Bilborough, Thomas Miller, Charles Taylor.",
    languages: "English, Twi and Ga",
    email: "osafo@oseawuchambers.com",
    image: "/images/buabeng.jpeg",
  },
  {
    name: "Michael Owusu-Awuah",
    title: "Managing Partner",
    admitted: "1994, Ghana",
    education:
      "University of Ghana, Legon (LL.B., 1992); Ghana Law School (1994); East Stroudsburg University, Pennsylvania, USA (M.Sc., International Relations, 2005).",
    experience:
      "Mr. Owusu-Awuah is the Company Board Secretary for Ghana Agro Food Company Ltd., Inter-Maritime Services Ltd., Platon Oil Gas Company Ltd, Ignis Industries Ltd, and Tema Lube Oil Company Ltd. He is also a general legal practitioner with decades of litigation experience.",
    languages: "English, Twi and Ga",
    email: "owusuawuah.michael@gmail.com",
    image: "/images/awuah.jpeg",
  },
  {
    name: "Stephen Sowah Charway",
    title: "Partner",
    admitted: "2016, Ghana; 2014 England and Wales",
    education:
      "London Metropolitan University (LLB); University of Ghana (LLM, Corporate and Commercial Law); BPP Law School, London (Post Grad Cert in Law 2014); Ghana School of Law (Post Call 2014); ADR Group Accredited Civil & Commercial Mediator (London).",
    experience:
      "Prior to joining Oseawuo Chambers, Mr. Charway worked as an Air Defence and Tank Systems Engineer in the British Army. Mr. Charway is also a member of Honorable Society of the Inner Temple in England. As a lawyer, he has been instructed in a wide range of commercial matters, including maritime, property, corporate, labour disputes and ADR.",
    languages: "English, Ga, Twi, Fante",
    email: "sscharway@oseawuochambers.com",
    image: "/images/sowah.jpeg",
  },
];

export const ASSOCIATES: TeamMember[] = [
  {
    name: "Edward Amako",
    title: "Associate",
    admitted: "2011, Ghana",
    education: "London South Bank University, England (LL.B., 1998); Ghana School of Law (2011).",
    experience:
      "Mr. Amako is involved in general litigation and handles a number of the firm's litigations. He is experienced in Corporate & Commercial Law, Property & Real Estate Law, Labour & Employment Law, Probate, and Criminal Defence.",
    languages: "English",
    email: "",
    image: "/images/amako.jpg",
  },
  {
    name: "Christiana Akom-Asante",
    title: "Associate",
    admitted: "2012, Ghana",
    education:
      "Teacher Training Cert, Presbyterian Women's College of Education (1986); B.Ed, University of Cape Coast (2001); LLB, Kwame Nkrumah University of Science and Technology (2009); Ghana School of Law (2012).",
    experience:
      "Prior to her qualifying as a lawyer, Mrs. Ackom-Asante was a professional teacher with over 15 years' teaching experience. She is one of the firm's active and committed litigation lawyers with years of experience at the Bar, bringing to her practice a wealth of insight drawn from an exceptional 28-year career in education across both public and private institutions. Since transitioning into law, Mrs. Asante has built a strong reputation handling Commercial Law, Criminal Defence, Family Law, and general civil litigation.",
    languages: "English",
    email: "caasante@oseawuochambers.com",
    image: "/images/christiana.JPG",
  },
  {
    name: "Francis Gariba Apam",
    title: "Associate",
    admitted: "2014, Ghana",
    education:
      "B.Sc. Admin. University of Ghana (Accounting, 1999); ACCA (2011); University of Ghana (LLB, 2011); Ghana School of Law (2014).",
    experience:
      "Mr. Apam is a Lawyer, Chartered Accountant, a Tax Consultant and an Organization Development Consultant with over 16 years of experience across Shipping, Telecom, Mining and Construction industries. At Oseawuo, he conducts litigation generally, especially those related to Accounting and Finance matters and also specializes in property registration/transfers and estate litigation.",
    languages: "English",
    email: "",
    image: null,
  },
  {
    name: "Petrina Defia",
    title: "Associate",
    admitted: "2017, Ghana",
    education:
      "University of Ghana, B.A. (English and Political Science); University of Ghana, LLB (2015); Ghana School of Law (2017).",
    experience:
      "Ms. Defia began her legal career as an intern with Faibille & Faibille and subsequently clerked with a Justice of the Court of Appeal. From 2017 to 2021 she was an Assistant Legal Consultant to China Harbour Engineering Company (CHEC) in respect of the MPS Tema Port Expansion Project. Ms. Defia has considerable experience in Company & Commercial Practice and Litigation.",
    languages: "English, Ga, Twi and Krobo & Ada",
    email: "pdefia@oseawuochambers.com",
    image: "/images/petrina.jpeg",
  },
  {
    name: "Agyenim Agyei-Boateng",
    title: "Associate",
    admitted: "2019, Ghana",
    education: "University of Ghana LLB (2016); Ghana School of Law (2019).",
    experience:
      "Prior to joining Oseawuo Chambers & Co, Mr. Agyei-Boateng worked as a Research Assistant to the Team Leader of LADA Group of Companies on policy development, legislative reform and stakeholder engagement in the West African Sub Region. Currently, he is a general practitioner with experience in Litigation, mediation and arbitration.",
    languages: "English",
    email: "a.boateng@oseawuochambers.com",
    image: "/images/agyenim.jpg",
  },
  {
    name: "Osei Akoto Appiahene",
    title: "Associate",
    admitted: "2019, Ghana",
    education: "University of Ghana LLB (2017); Ghana School of Law (2019).",
    experience:
      "Prior to joining Oseawuo Chambers as a lawyer, Osei worked as a legal research assistant with the firm from 2015 to 2019, gaining exposure across company and commercial practice, labour disputes, maritime law and natural resource law. He also works with HRP Consult as a legal consultant.",
    languages: "English and Twi",
    email: "o.appiahene@oseawuochambers.com",
    image: "/images/osei.jpg",
  },
  {
    name: "Jeliu Issahaku Sapaschini",
    title: "Associate",
    admitted: "2020, Ghana",
    education:
      "University of Ghana (2006), BSc Agricultural Economics; LLB (2010); Ghana School of Law (2012); Paris Graduate School of Management (2014), MBA, Strategic and Project Management; CIPM® (2013).",
    experience:
      "Before joining Oseawuo Chambers & Co, Mr. Sapaschini worked as a Legal Research Officer at K-San Law Firm, an Investment Officer at TAFT Capital Ltd and a Strategy Manager at IsMC Money Lenders Ltd. His practice areas include commercial law, international trade law, labour law, property law, criminal law, family law and ADR.",
    languages: "English, Twi and Dagbani",
    email: "jsapaschini@oseawuochambers.com",
    image: "/images/jeliu.jpg",
  },
  {
    name: "Roland Boadi Attafuah",
    title: "Associate",
    admitted: "2021, Ghana",
    education:
      "B.A. (Sociology & Social Work), Kwame Nkrumah University of Science and Technology; University of Ghana (2019); Ghana School of Law (2019).",
    experience:
      "Prior to joining Oseawuo Chambers, Mr. Attafuah was the Administrator for Technical Marine Solutions, Takoradi and an Administrative Consultant for BOS Engineering Ghana. He is currently the Company Secretary for several companies and sits on the Board of DNV-BMS Ghana JV Company.",
    languages: "English, Twi, Fante",
    email: "kwekuattafuah@gmail.com",
    image: "/images/ROLAND.JPG",
  },
  {
    name: "Dr. (Med) Edward Addo Dankwa",
    title: "Associate",
    admitted: "2022, Ghana",
    education:
      "Russian National Research Medical University, MD (2013); University of London, LLB (2017); KNUST, Master of Public Health (2021); Ghana School of Law (2022); LLM Health Law and Ethics (2023).",
    experience:
      "Prior to working with Oseawuo Chambers & Co, Dr. Addo Dankwa worked with KATH Pediatric and Surgery and Kumasi South Hospital in Obstetrics/Gynaecology and Internal medicine, and served as medicolegal adviser at Holy Trinity Medical Center. He is presently engaged in general practice, litigation, public health, medical law and ethics, corporate practice, ADR, and medical arbitration.",
    languages: "English",
    email: "",
    image: null,
  },
  {
    name: "Kwaku Asare Baffour",
    title: "Associate",
    admitted: "2022, Ghana",
    education: "LLB, Mountcrest University College (2019); Ghana School of Law (2022).",
    experience:
      "Prior to joining Oseawuo Chambers & Co., Mr. Baffour worked as a Civil Engineer with Tema Metropolitan Assembly (TMA). Presently, he is a private legal practitioner with experience in litigation, mediation, corporate law and arbitration, while working as a Sales Manager with CMA CGM in Tema.",
    languages: "English",
    email: "kwakub6408@gmail.com",
    image: "/images/kwaku.jpg",
  },
  {
    name: "Emmanuella Dowuona",
    title: "Associate",
    admitted: "2023, Ghana",
    education: "Central University LLB (2019); Ghana School of Law (2023).",
    experience:
      "Prior to joining Oseawuo Chambers & Co., Ms. Dowuona worked at the Commission on Human Rights and Administrative Justice (CHRAJ) on investigations, legal research and anti-corruption monitoring. Presently, she is a general practitioner with experience in litigation, family law, drafting legal documents and legal research.",
    languages: "English and Ga",
    email: "ella.dowuona@gmail.com",
    image: "/images/ella.jpg",
  },
  {
    name: "Sedwin Adams Brocke",
    title: "Associate",
    admitted: "2024, Ghana",
    education:
      "KNUST, LLB (2021); Ghana School of Law (2024); GIMPA, LLM in International Trade and Business Law.",
    experience:
      "Prior to joining Oseawuo Chambers and Co, Mr. Brocke worked at the Volta River Authority of Ghana conducting due diligence on regulations relevant to the energy sector. He interned for four years at the firm before his call to the Bar and now focuses on cross-border commercial disputes and trade regulation.",
    languages: "English and Ga",
    email: "brockesedwin@yahoo.com",
    image: "/images/sedwin.JPG",
  },
  {
    name: "Millicent Dedo Ossom",
    title: "Associate",
    admitted: "2023, Ghana",
    education:
      "Regional Maritime University (BSc, Ports & Shipping Administration, 2009); University of London (LLB, 2019); Ghana School of Law (2023).",
    experience:
      "Ms. Ossom has extensive maritime industry background, progressing from Operations Coordinator to Assistant Tramp Commercial Manager at SCANSHIP Ghana Ltd (Bollore Transport Logistics), and has experience in logistics with Unilever Ghana Ltd. Currently a general practitioner focusing on litigation, legal research, mediation and advisory services.",
    languages: "English, Krobo, Twi and Ga",
    email: "m.ossom@oseawuochambers.com",
    image: "/images/millicent.jpg",
  },
  {
    name: "Stephen Kwaku Gyan",
    title: "Associate",
    admitted: "2024, Ghana",
    education:
      "University of Cape Coast, B.A. (2014); Mountcrest University College, LLB (2022); Ghana School of Law (2024).",
    experience:
      "Mr. Gyan has worked with Ghana Cocobod processing bank guarantees and reviewing contracts, and later with the Ghana National Petroleum Corporation (GNPC) reviewing contracts and researching non-disclosure agreements and trade restrictions. Presently, he is a general practitioner.",
    languages: "English",
    email: "",
    image: "/images/steven.JPG",
  },
];

export const VALUE_PILLARS = [
  {
    title: "Expert Legal Team",
    icon: "Users",
    image: "/images/team1.JPG",
    description:
      "Our attorneys combine decades of courtroom experience with specialized knowledge across litigation, corporate, maritime, energy, and criminal defense. We prepare every case meticulously — from factual investigation to persuasive written briefs and oral advocacy — to secure the best possible outcomes for complex matters.",
  },
  {
    title: "Client-Focused Approach",
    icon: "Heart",
    image: "/images/team5.JPG",
    description:
      "We prioritize clear communication, empathy, and tailored strategies that align with each client's goals and risk tolerance. From the initial consultation through resolution, we provide practical guidance, regular updates, and decision-focused advice.",
  },
  {
    title: "Proven Track Record",
    icon: "CheckCircle2",
    image: "/images/about1.JPG",
    description:
      "With a documented history of significant verdicts, negotiated settlements, and favorable outcomes, our firm has helped thousands of clients achieve measurable results through data-driven case management and strategic negotiation.",
  },
  {
    title: "Global Network",
    icon: "Globe2",
    image: "/images/team3.JPG",
    description:
      "We maintain a robust international network of trusted counsel, forensic experts, and advisors to support cross-border matters, multi-jurisdictional disputes, and international transactions.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Oseawuo Chambers provided exceptional maritime and shipping legal support for our operations at Tema Container Terminal. Their deep sector expertise and responsive advisory made a real difference to our commercial arrangements.",
    name: "Tema Container Terminal",
    caseType: "Maritime & Shipping",
  },
  {
    quote:
      "The team's handling of our mining transactions and regulatory approvals was seamless. Their practical, experienced approach to project development gave us confidence through every phase.",
    name: "AngloGold Ashanti (Ghana)",
    caseType: "Energy & Natural Resources",
  },
  {
    quote:
      "Working with Oseawuo Chambers on our commercial and secretarial matters has been invaluable. Their partner-led supervision and strategic approach have strengthened our corporate governance.",
    name: "Kasapreko Group of Companies",
    caseType: "Business & Industry",
  },
  {
    quote:
      "Oseawuo Chambers handled our major port terminal advisory with real expertise in both commercial and operational matters. Highly recommended for infrastructure and maritime work.",
    name: "Meridian Port Services (MPS)",
    caseType: "Maritime & Shipping",
  },
];

export const STATS = [
  { label: "Years of Excellence", value: "45+", icon: "History" },
  { label: "Practice Areas", value: "9+", icon: "Briefcase" },
  { label: "Legal Professionals", value: "17", icon: "Users" },
  { label: "Client Commitment", value: "100%", icon: "ShieldCheck" },
];

export const TRUST_INDICATORS = [
  {
    icon: "Briefcase",
    title: "Experienced Legal Professionals",
    description:
      "Our team comprises attorneys with decades of combined expertise across all practice areas including maritime law, corporate law, litigation, and commercial practice.",
  },
  {
    icon: "BadgeCheck",
    title: "Transparent & Ethical Approach",
    description:
      "We operate with unwavering integrity and full transparency with every client, maintaining the highest professional standards.",
  },
  {
    icon: "CheckCircle2",
    title: "Proven Case Success",
    description:
      "Consistent track record of favorable outcomes and satisfied clients across diverse legal matters and practice areas.",
  },
  {
    icon: "Heart",
    title: "Client-Centered Representation",
    description:
      "Your needs and goals are at the heart of everything we do at Oseawuo Chambers.",
  },
];

export const RECOGNITIONS = [
  { name: "Ghana Bar Association Member", type: "Professional" },
  { name: "Commonwealth Lawyers Association", type: "Affiliation" },
  { name: "Inner Temple (England)", type: "Professional Body" },
  { name: "Lloyd's Maritime Academy Training", type: "Certification" },
  { name: "ADR Accredited Mediators", type: "Certification" },
  { name: "International Legal Experience", type: "Recognition" },
];

export const FIRM_VALUES = [
  { title: "Client First", description: "Your goals drive our strategy" },
  { title: "Excellence", description: "We pursue superior outcomes" },
  { title: "Integrity", description: "Transparency in all dealings" },
  { title: "Innovation", description: "Modern legal solutions" },
];

export function getPracticeAreaBySlug(slug: string) {
  return PRACTICE_AREAS.find((area) => area.slug === slug);
}
