const BASE = "https://www.awaisdigitalservices.co.uk";

const DEFAULT_PROCESS = [
  { step: 1, title: "Consultation", description: "We discuss your business, goals, and what you need from your site." },
  { step: 2, title: "Design & build", description: "You get a modern, on-brand site with content and structure agreed with you." },
  { step: 3, title: "Launch & support", description: "We go live, hand over control, and can help with updates and care plans." },
];

function page(slug, label, keyword, metaDesc, heroHeadline, heroSubtext, problemTitle, problemContent, solutionTitle, solutionContent, benefits, pricingText, ctaTitle, ctaSubtext) {
  const path = `/seo/website-design-${slug}`;
  return {
    path,
    slug,
    label,
    keyword: keyword || `website design ${label.toLowerCase()} UK`,
    title: `Website Design for ${label} UK | Professional Sites | Awais Digital Services`,
    metaDescription: metaDesc,
    heroHeadline,
    heroSubtext,
    problemTitle,
    problemContent,
    solutionTitle,
    solutionContent,
    benefits: benefits || [
      { title: "Professional design", description: "A site that builds trust and reflects your brand." },
      { title: "Mobile-friendly", description: "Works on every device your clients use." },
      { title: "Local SEO", description: "Optimised so you get found in search." },
      { title: "Lead capture", description: "Clear contact paths so enquiries reach you." },
    ],
    processSteps: DEFAULT_PROCESS,
    pricingText:
      pricingText ||
      `Website packages for ${label.toLowerCase()} from £279 (Starter bundle). Full flexible pricing & add-ons — see /pricing.`,
    ctaTitle: ctaTitle || `Ready for a website that works for your ${label.toLowerCase()} business?`,
    ctaSubtext: ctaSubtext || "Get a free consultation and a no-obligation quote. We work with UK businesses.",
  };
}

export const industryPages = {
  lawyers: page(
    "lawyers",
    "Lawyers",
    "website design lawyers UK",
    "Professional website design for solicitors and law firms in the UK. Build trust and attract clients. Get a quote from ADS.",
    "Website Design for Lawyers & Law Firms",
    "Professional websites for solicitors and legal practices. Build credibility, showcase expertise, and convert visitors into client enquiries.",
    "Law Firms Need Trust and Visibility Online",
    "Clients search for lawyers online. An outdated or unclear website undermines trust and sends potential clients to competitors. Your site must convey expertise and make it easy to get in touch.",
    "Websites That Reflect Your Practice",
    "We build lawyer and law firm websites with clear service pages, team profiles, and strong calls to action. Your site becomes a credible front door for new client enquiries.",
    [
      { title: "Trust and credibility", description: "Design and content that reflect your expertise." },
      { title: "Service pages", description: "Clear pages for each practice area." },
      { title: "Contact and enquiries", description: "Forms and CTAs that generate leads." },
      { title: "Local SEO", description: "Optimised for local legal search terms." },
    ]
  ),
  "financial-advisors": page(
    "financial-advisors",
    "Financial Advisors",
    "website design financial advisors UK",
    "Website design for financial advisers and IFAs in the UK. Professional, compliant sites that attract clients. Free consultation.",
    "Website Design for Financial Advisors",
    "Professional websites for financial advisers and IFAs. Build trust, explain your services, and generate quality leads.",
    "Financial Advisors Need Credible Online Presence",
    "Clients research advisers online before making contact. A weak or generic website doesn't convey your expertise or compliance. You need a site that builds confidence and encourages enquiries.",
    "Sites Built for Advisers",
    "We design financial adviser websites with clear service descriptions, compliance-friendly structure, and strong enquiry paths. Your site supports your reputation and lead generation.",
    [
      { title: "Credible design", description: "Professional look that reflects your practice." },
      { title: "Service clarity", description: "Clear explanation of what you offer." },
      { title: "Lead capture", description: "Contact forms and consultation CTAs." },
      { title: "Compliance-aware", description: "Structure that supports regulatory good practice." },
    ]
  ),
  "insurance-brokers": page(
    "insurance-brokers",
    "Insurance Brokers",
    "website design insurance brokers UK",
    "Website design for insurance brokers in the UK. Professional sites that generate leads and explain your services. Get a quote.",
    "Website Design for Insurance Brokers",
    "Professional websites for insurance brokers. Showcase your products, build trust, and turn visitors into enquiries.",
    "Brokers Need Strong Online Presence",
    "Customers compare brokers online. A poor or outdated site loses trust and sends business elsewhere. You need a clear, professional site that explains what you offer and makes it easy to get a quote.",
    "Websites That Win Broker Business",
    "We build broker websites with clear product or service pages, trust signals, and enquiry forms. Your site helps you compete and capture leads.",
    [
      { title: "Clear product pages", description: "Explain cover types and who you serve." },
      { title: "Trust signals", description: "Credentials, reviews, and professional design." },
      { title: "Quote enquiries", description: "Forms and CTAs that generate leads." },
      { title: "Local visibility", description: "SEO for local broker search." },
    ]
  ),
  dentists: page(
    "dentists",
    "Dentists",
    "website design dentists UK",
    "Website design for dental practices in the UK. Patient-friendly sites with booking and contact. Get a quote from ADS.",
    "Website Design for Dentists",
    "Patient-friendly websites for dental practices. Showcase your practice, build trust, and make it easy for patients to book or enquire.",
    "Dental Practices Need Patient-Friendly Websites",
    "Patients search for dentists online and judge practices by their website. An old or confusing site can put people off. You need a clear, reassuring site that helps new patients get in touch.",
    "Sites That Welcome Patients",
    "We design dentist websites with clear service information, practice details, and contact or booking paths. Your site supports your reputation and helps fill the chair.",
    [
      { title: "Patient-focused", description: "Clear, reassuring content and navigation." },
      { title: "Services and treatments", description: "Pages that explain what you offer." },
      { title: "Contact and booking", description: "Easy ways for patients to get in touch." },
      { title: "Local SEO", description: "Optimised for local dental search." },
    ]
  ),
  clinics: page(
    "clinics",
    "Clinics",
    "website design clinics UK",
    "Website design for clinics and medical practices in the UK. Professional, patient-friendly sites. Get a quote.",
    "Website Design for Clinics",
    "Professional websites for clinics and medical practices. Build trust with patients and make it easy to find services and contact you.",
    "Clinics Need Clear, Trustworthy Websites",
    "Patients and referrers look online for clinic information. A poor or outdated site undermines trust. You need a professional site that explains your services and how to get in touch.",
    "Websites That Support Your Clinic",
    "We build clinic websites with clear service pages, team or facility information, and contact paths. Your site helps patients and partners find you and take the next step.",
    [
      { title: "Professional presence", description: "Design that reflects your standards." },
      { title: "Service information", description: "Clear pages for treatments and services." },
      { title: "Contact and enquiries", description: "Forms and CTAs for patients." },
      { title: "Local visibility", description: "SEO for local clinic search." },
    ]
  ),
  physiotherapists: page(
    "physiotherapists",
    "Physiotherapists",
    "website design physiotherapists UK",
    "Website design for physiotherapists and physio practices in the UK. Attract patients and showcase your expertise. Free quote.",
    "Website Design for Physiotherapists",
    "Professional websites for physios and physiotherapy practices. Showcase your expertise, conditions you treat, and make it easy for patients to book.",
    "Physios Need Visibility and Trust Online",
    "Patients search for physiotherapy locally. A weak or missing website means you're invisible. You need a site that explains what you do and encourages bookings or enquiries.",
    "Sites Built for Physio Practices",
    "We design physiotherapist websites with service pages, treatment information, and clear booking or contact paths. Your site helps you attract and retain patients.",
    [
      { title: "Expertise and services", description: "Pages that explain your treatments." },
      { title: "Patient-focused", description: "Content that answers common questions." },
      { title: "Booking and contact", description: "Easy ways to get in touch or book." },
      { title: "Local SEO", description: "Optimised for local physio search." },
    ]
  ),
  chiropractors: page(
    "chiropractors",
    "Chiropractors",
    "website design chiropractors UK",
    "Website design for chiropractors and chiropractic clinics in the UK. Professional sites that attract patients. Get a quote.",
    "Website Design for Chiropractors",
    "Professional websites for chiropractors and clinics. Build trust, explain your approach, and turn visitors into patients.",
    "Chiropractors Need Strong Online Presence",
    "Patients search for chiropractic care online. A poor or outdated website loses trust and bookings. You need a clear, professional site that explains your care and makes it easy to book.",
    "Websites That Attract Patients",
    "We build chiropractor websites with clear service information, trust signals, and booking or contact paths. Your site supports your practice growth.",
    [
      { title: "Trust and credibility", description: "Design that reflects your practice." },
      { title: "Service clarity", description: "Clear explanation of your care." },
      { title: "Booking and enquiries", description: "Paths that convert visitors." },
      { title: "Local SEO", description: "Visibility in local search." },
    ]
  ),
  therapists: page(
    "therapists",
    "Therapists",
    "website design therapists UK",
    "Website design for therapists and counselling practices in the UK. Professional, confidential-feeling sites. Get a quote.",
    "Website Design for Therapists",
    "Professional websites for therapists and counselling practices. Convey warmth and professionalism and make it easy for clients to get in touch.",
    "Therapists Need Welcoming, Professional Websites",
    "Clients look for therapists online and judge by the first impression. Your site should feel safe, professional, and easy to use. A weak site can put potential clients off.",
    "Sites That Welcome Clients",
    "We design therapist websites with a calm, professional feel, clear information about your approach, and discreet contact paths. Your site supports your practice.",
    [
      { title: "Calm, professional design", description: "A look that puts visitors at ease." },
      { title: "Approach and services", description: "Clear information about how you work." },
      { title: "Contact options", description: "Discreet, easy ways to get in touch." },
      { title: "Local visibility", description: "SEO for local therapy search." },
    ]
  ),
  builders: page(
    "builders",
    "Builders",
    "website design builders UK",
    "Website design for builders and construction companies in the UK. Showcase projects and win more work. Get a quote.",
    "Website Design for Builders",
    "Professional websites for builders and construction companies. Showcase your projects, highlight your services, and win more domestic and commercial work.",
    "Builders Need to Showcase Work Online",
    "Clients and contractors search for builders online. A poor or missing website means you lose out to competitors with a strong presence. You need a site that shows your work and makes it easy to get a quote.",
    "Websites That Win Building Work",
    "We build builder and construction websites with project galleries, service pages, and clear contact paths. Your site becomes a portfolio and a lead generator.",
    [
      { title: "Project galleries", description: "Showcase past work with images and descriptions." },
      { title: "Service pages", description: "Clear breakdown of what you offer." },
      { title: "Lead generation", description: "Contact forms and quote requests." },
      { title: "Mobile-friendly", description: "Works on-site and on the go." },
    ]
  ),
  plumbers: page(
    "plumbers",
    "Plumbers",
    "website design plumbers UK",
    "Website design for plumbers and plumbing companies in the UK. Get found locally and win more jobs. Free quote.",
    "Website Design for Plumbers",
    "Professional websites for plumbers and plumbing companies. Get found in local search, showcase your services, and capture emergency and planned work.",
    "Plumbers Need Local Visibility",
    "Customers search for plumbers when they have a problem. If you're not easy to find online, you miss out. You need a clear, mobile-friendly site that ranks locally and encourages calls.",
    "Sites That Get You Called",
    "We build plumber websites with clear service lists, areas covered, and contact or call buttons. Your site helps you rank for local search and convert visitors into jobs.",
    [
      { title: "Local SEO", description: "Optimised for 'plumber near me' and area terms." },
      { title: "Clear services", description: "What you do and how you help." },
      { title: "Easy contact", description: "Click-to-call and contact forms." },
      { title: "Mobile-first", description: "Works on phones when customers search." },
    ]
  ),
  electricians: page(
    "electricians",
    "Electricians",
    "website design electricians UK",
    "Website design for electricians and electrical contractors in the UK. Local SEO and lead capture. Get a quote.",
    "Website Design for Electricians",
    "Professional websites for electricians and electrical contractors. Get found locally, showcase your services, and win more domestic and commercial work.",
    "Electricians Need to Be Found Online",
    "Customers search for electricians when they need work done. A weak or missing website means you lose jobs to competitors. You need a site that ranks locally and makes it easy to get in touch.",
    "Websites That Win Electrical Work",
    "We build electrician websites with service pages, areas covered, and clear contact paths. Your site supports local visibility and lead generation.",
    [
      { title: "Local SEO", description: "Visibility for local electrical search." },
      { title: "Service clarity", description: "Domestic, commercial, and specialist work." },
      { title: "Contact and calls", description: "Easy ways for customers to reach you." },
      { title: "Mobile-friendly", description: "Works when customers search on the go." },
    ]
  ),
  roofers: page(
    "roofers",
    "Roofers",
    "website design roofers UK",
    "Website design for roofers and roofing companies in the UK. Showcase work and get found locally. Get a quote.",
    "Website Design for Roofers",
    "Professional websites for roofers and roofing contractors. Showcase your work, get found in local search, and win more jobs.",
    "Roofers Need Strong Local Presence",
    "Homeowners and businesses search for roofers when they need repairs or new roofs. Without a clear online presence, you miss out. You need a site that shows your work and makes contact easy.",
    "Sites That Win Roofing Jobs",
    "We build roofer websites with project galleries, service pages, and contact paths. Your site helps you rank locally and convert enquiries into jobs.",
    [
      { title: "Project showcase", description: "Photos and descriptions of your work." },
      { title: "Local SEO", description: "Optimised for local roofing search." },
      { title: "Contact paths", description: "Forms and click-to-call." },
      { title: "Mobile-friendly", description: "Works on every device." },
    ]
  ),
  "hvac-companies": page(
    "hvac-companies",
    "HVAC Companies",
    "website design HVAC companies UK",
    "Website design for HVAC and heating companies in the UK. Professional sites that generate leads. Get a quote.",
    "Website Design for HVAC Companies",
    "Professional websites for HVAC, heating, and cooling companies. Showcase your services, get found locally, and win more installations and repairs.",
    "HVAC Companies Need Online Visibility",
    "Customers search for heating and cooling services online. A poor or missing website loses you jobs. You need a clear, professional site that explains your services and makes it easy to get a quote.",
    "Websites That Win HVAC Work",
    "We build HVAC company websites with service pages, areas covered, and contact paths. Your site supports local search and lead generation.",
    [
      { title: "Service pages", description: "Installation, repair, and maintenance." },
      { title: "Local SEO", description: "Visibility in local search." },
      { title: "Lead capture", description: "Quote requests and contact forms." },
      { title: "Mobile-friendly", description: "Works when customers search on the go." },
    ]
  ),
  "estate-agents": page(
    "estate-agents",
    "Estate Agents",
    "website design estate agents UK",
    "Website design for estate agents in the UK. Professional sites that showcase listings and generate leads. Get a quote.",
    "Website Design for Estate Agents",
    "Professional websites for estate agents and letting agents. Showcase your brand, listings, and make it easy for vendors and buyers to get in touch.",
    "Estate Agents Need Strong Online Brand",
    "Vendors and buyers judge agents by their website. A weak or outdated site undermines trust and sends business elsewhere. You need a professional site that reflects your brand and generates leads.",
    "Websites That Win Instructions",
    "We build estate agent websites with clear branding, service information, and contact paths. Your site supports your reputation and helps win instructions.",
    [
      { title: "Brand and trust", description: "Design that reflects your agency." },
      { title: "Service clarity", description: "Sales, lettings, and areas covered." },
      { title: "Lead capture", description: "Valuation and contact forms." },
      { title: "Local SEO", description: "Visibility for local property search." },
    ]
  ),
  "property-managers": page(
    "property-managers",
    "Property Managers",
    "website design property managers UK",
    "Website design for property managers in the UK. Professional sites for landlords and tenants. Get a quote.",
    "Website Design for Property Managers",
    "Professional websites for property management companies. Attract landlords and tenants with a clear, trustworthy online presence.",
    "Property Managers Need Clear Online Presence",
    "Landlords and tenants look for property managers online. A poor or missing website loses trust and instructions. You need a site that explains your services and makes contact easy.",
    "Sites That Attract Landlords and Tenants",
    "We build property manager websites with service pages, areas covered, and contact paths. Your site supports your brand and lead generation.",
    [
      { title: "Service clarity", description: "What you offer for landlords and tenants." },
      { title: "Trust signals", description: "Professional design and credentials." },
      { title: "Contact paths", description: "Enquiry and contact forms." },
      { title: "Local visibility", description: "SEO for local property management." },
    ]
  ),
  "real-estate-consultants": page(
    "real-estate-consultants",
    "Real Estate Consultants",
    "website design real estate consultants UK",
    "Website design for real estate consultants in the UK. Professional, credible sites. Get a quote.",
    "Website Design for Real Estate Consultants",
    "Professional websites for real estate consultants and advisers. Build credibility and attract clients with a strong online presence.",
    "Consultants Need Credible Online Presence",
    "Clients research consultants before making contact. A weak website doesn't convey your expertise. You need a professional site that builds trust and encourages enquiries.",
    "Websites That Build Trust",
    "We design real estate consultant websites with clear service information, expertise, and contact paths. Your site supports your reputation and business development.",
    [
      { title: "Credibility", description: "Design and content that reflect your expertise." },
      { title: "Service clarity", description: "What you offer and who you serve." },
      { title: "Lead capture", description: "Contact and consultation paths." },
      { title: "Professional design", description: "A look that matches your positioning." },
    ]
  ),
  gyms: page(
    "gyms",
    "Gyms",
    "website design gyms UK",
    "Website design for gyms and fitness centres in the UK. Attract members and showcase facilities. Get a quote.",
    "Website Design for Gyms",
    "Professional websites for gyms and fitness centres. Showcase your facilities, classes, and membership options and turn visitors into members.",
    "Gyms Need to Attract Members Online",
    "Potential members search for gyms online. A poor or outdated website loses sign-ups. You need a clear, energetic site that shows what you offer and makes joining easy.",
    "Websites That Win Members",
    "We build gym websites with facility and class information, membership options, and contact or join paths. Your site supports your marketing and member acquisition.",
    [
      { title: "Facilities and classes", description: "Show what you offer and when." },
      { title: "Membership info", description: "Clear options and pricing." },
      { title: "Join and contact", description: "Paths that convert visitors." },
      { title: "Local SEO", description: "Visibility for local gym search." },
    ]
  ),
  salons: page(
    "salons",
    "Salons",
    "website design salons UK",
    "Website design for hair and beauty salons in the UK. Attract clients and showcase services. Get a quote.",
    "Website Design for Salons",
    "Professional websites for hair and beauty salons. Showcase your services, team, and make it easy for clients to book or get in touch.",
    "Salons Need to Be Found and Booked Online",
    "Clients search for salons and book online. A weak or missing website loses appointments. You need a clear, attractive site that shows your services and encourages bookings.",
    "Websites That Fill Your Book",
    "We build salon websites with service pages, team or gallery, and booking or contact paths. Your site helps you attract and retain clients.",
    [
      { title: "Service pages", description: "Treatments and pricing." },
      { title: "Visual appeal", description: "Design that reflects your brand." },
      { title: "Booking and contact", description: "Easy ways to book or enquire." },
      { title: "Local SEO", description: "Visibility for local salon search." },
    ]
  ),
  barbershops: page(
    "barbershops",
    "Barbershops",
    "website design barbershops UK",
    "Website design for barbershops in the UK. Get found locally and attract more clients. Get a quote.",
    "Website Design for Barbershops",
    "Professional websites for barbershops. Showcase your style, services, and make it easy for clients to find you and book.",
    "Barbershops Need Local Visibility",
    "Clients search for barbers locally. A poor or missing website means you're invisible. You need a clear, on-brand site that shows your work and makes contact or booking easy.",
    "Sites That Attract Clients",
    "We build barbershop websites with service information, gallery, and contact or booking paths. Your site supports local search and client acquisition.",
    [
      { title: "Brand and style", description: "Design that reflects your shop." },
      { title: "Services", description: "What you offer and pricing." },
      { title: "Contact and booking", description: "Paths that convert." },
      { title: "Local SEO", description: "Visibility for local barber search." },
    ]
  ),
  restaurants: page(
    "restaurants",
    "Restaurants",
    "website design restaurants UK",
    "Website design for restaurants in the UK. Menus, bookings, and local SEO. Get a quote.",
    "Website Design for Restaurants",
    "Professional websites for restaurants. Showcase your menu, atmosphere, and make it easy for diners to find you and book.",
    "Restaurants Need to Be Found and Booked",
    "Diners search for restaurants online. A poor or outdated website loses reservations. You need a clear, appetising site with menu info and booking or contact options.",
    "Websites That Fill Tables",
    "We build restaurant websites with menu information, gallery, and reservation or contact paths. Your site supports your brand and helps fill tables.",
    [
      { title: "Menu and vibe", description: "Show your food and atmosphere." },
      { title: "Reservations", description: "Booking or contact paths." },
      { title: "Local SEO", description: "Visibility for local restaurant search." },
      { title: "Mobile-friendly", description: "Works when diners search on the go." },
    ]
  ),
  cafes: page(
    "cafes",
    "Cafes",
    "website design cafes UK",
    "Website design for cafes and coffee shops in the UK. Attract customers and showcase your offer. Get a quote.",
    "Website Design for Cafes",
    "Professional websites for cafes and coffee shops. Showcase your menu, location, and make it easy for customers to find you.",
    "Cafes Need Local Visibility",
    "Customers search for cafes locally. A weak or missing website means you're harder to find. You need a clear, welcoming site with menu and location info.",
    "Websites That Bring Customers In",
    "We build cafe websites with menu information, location, and contact or opening hours. Your site supports local search and footfall.",
    [
      { title: "Menu and offer", description: "Show what you serve." },
      { title: "Location and hours", description: "Easy to find and know when you're open." },
      { title: "Local SEO", description: "Visibility for local cafe search." },
      { title: "Mobile-friendly", description: "Works when people search nearby." },
    ]
  ),
  "saas-companies": page(
    "saas-companies",
    "SaaS Companies",
    "website design SaaS companies UK",
    "Website design for SaaS and software companies in the UK. Product-led, conversion-focused sites. Get a quote.",
    "Website Design for SaaS Companies",
    "Professional websites for SaaS and software companies. Clear product messaging, sign-up paths, and support for growth and conversions.",
    "SaaS Companies Need Conversion-Focused Sites",
    "SaaS products live online. Your website must explain your product, build trust, and drive sign-ups or demos. A weak site holds back growth.",
    "Websites That Support SaaS Growth",
    "We build SaaS websites with clear product and feature messaging, social proof, and sign-up or demo paths. Your site supports acquisition and conversion.",
    [
      { title: "Product clarity", description: "Clear explanation of what you offer." },
      { title: "Conversion paths", description: "Sign-up, demo, or contact CTAs." },
      { title: "Trust and social proof", description: "Testimonials and credentials." },
      { title: "Fast and scalable", description: "Tech that supports growth." },
    ]
  ),
};

export function getIndustryPage(slug) {
  return industryPages[slug] || null;
}

export function getAllIndustrySlugs() {
  return Object.keys(industryPages);
}

export function getIndustryPaths() {
  return getAllIndustrySlugs().map((slug) => industryPages[slug].path);
}

export function getIndustryPageMetadata(page, path) {
  const url = `${BASE}${path}`;
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url,
      siteName: "Awais Digital Services",
      type: "website",
      locale: "en_GB",
      images: [{ url: `${BASE}/og.jpg`, width: 1200, height: 630, alt: page.heroHeadline }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: [`${BASE}/og.jpg`],
    },
  };
}

export function getIndustryPageSchema(page, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.heroHeadline,
    description: page.metaDescription,
    provider: { "@type": "Organization", name: "Awais Digital Services", url: BASE },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    url: `${BASE}${path}`,
  };
}

/** All industries for Services page "Industries We Serve" - includes existing static + dynamic */
export const INDUSTRIES_WE_SERVE = [
  { path: "/seo/website-design-accountants", label: "Accountants" },
  { path: "/seo/website-design-lawyers", label: "Lawyers" },
  { path: "/seo/website-design-consultants", label: "Consultants" },
  { path: "/seo/website-design-financial-advisors", label: "Financial Advisors" },
  { path: "/seo/website-design-insurance-brokers", label: "Insurance Brokers" },
  { path: "/seo/website-design-dentists", label: "Dentists" },
  { path: "/seo/website-design-clinics", label: "Clinics" },
  { path: "/seo/website-design-physiotherapists", label: "Physiotherapists" },
  { path: "/seo/website-design-chiropractors", label: "Chiropractors" },
  { path: "/seo/website-design-therapists", label: "Therapists" },
  { path: "/seo/website-design-builders", label: "Builders" },
  { path: "/seo/website-design-construction", label: "Construction" },
  { path: "/seo/website-design-plumbers", label: "Plumbers" },
  { path: "/seo/website-design-electricians", label: "Electricians" },
  { path: "/seo/website-design-roofers", label: "Roofers" },
  { path: "/seo/website-design-hvac-companies", label: "HVAC Companies" },
  { path: "/seo/website-design-estate-agents", label: "Estate Agents" },
  { path: "/seo/website-design-property-managers", label: "Property Managers" },
  { path: "/seo/website-design-real-estate-consultants", label: "Real Estate Consultants" },
  { path: "/seo/website-design-gyms", label: "Gyms" },
  { path: "/seo/website-design-salons", label: "Salons" },
  { path: "/seo/website-design-barbershops", label: "Barbershops" },
  { path: "/seo/website-design-restaurants", label: "Restaurants" },
  { path: "/seo/website-design-cafes", label: "Cafes" },
  { path: "/seo/website-design-startups", label: "Startups" },
  { path: "/seo/website-design-saas-companies", label: "SaaS Companies" },
];
