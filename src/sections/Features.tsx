import CheckBox from '../components/CheckBox'
const tableData = [
  {
    "industry": "health_tech",
    "signal_name": "Achieved HIPAA Compliance",
    "signal_description": "A company or software product announces it is now HIPAA compliant.",
    "opportunity_insight": "This company is now officially ready to sell to healthcare providers and handle Protected Health Information (PHI). They will need partners and tools to scale their GTM strategy in the healthcare space.",
    "target_product_categories": [
      "Secure Communication Platforms",
      "Cloud Backup for PHI",
      "Healthcare CRM",
      "API Integration Services",
      "Cybersecurity Insurance"
    ],
    "source": [
      "Company Blog",
      "Press Releases",
      "Compliance Directories"
    ]
  },
  {
    "industry": "retail_ecommerce",
    "signal_name": "POS System Overhaul",
    "signal_description": "A brick-and-mortar retail chain announces a partnership with a new Point-of-Sale (POS) provider like Toast, Square, or Lightspeed.",
    "opportunity_insight": "The POS is the central nervous system of a retail operation. Changing it forces a re-evaluation of all connected systems, including inventory management, loyalty programs, payment processing, and staffing.",
    "target_product_categories": [
      "Inventory Management Software",
      "Customer Loyalty Platforms",
      "Payment Processors",
      "Workforce Management",
      "eCommerce Platforms"
    ],
    "source": [
      "Press Releases",
      "Case Studies from POS vendors",
      "Industry News"
    ]
  },
  {
    "industry": "health_tech",
    "signal_name": "Clinical Trial Phase Advancement",
    "signal_description": "A biotech or pharmaceutical company announces they have advanced to Phase II or III of a clinical trial.",
    "opportunity_insight": "Advancing in trials, especially to Phase III, requires significant investment in patient recruitment, data management, and regulatory reporting. Their need for specialized software skyrockets.",
    "target_product_categories": [
      "eClinical Solutions (EDC, CTMS)",
      "Patient Recruitment Platforms",
      "Biostatistical Software",
      "Regulatory Information Management (RIM)"
    ],
    "source": [
      "ClinicalTrials.gov",
      "Company Investor Relations",
      "Press Releases"
    ]
  },
  {
    "industry": "fin_tech",
    "signal_name": "Banking License Acquired",
    "signal_description": "A fintech company successfully acquires a full or partial banking charter or license.",
    "opportunity_insight": "This is a massive step that signals a move into regulated financial services. The company will need institutional-grade solutions for compliance, fraud prevention, core banking, and security.",
    "target_product_categories": [
      "Core Banking Platforms",
      "Anti-Money Laundering (AML) Software",
      "KYC/KYB Verification Services",
      "Cybersecurity Solutions"
    ],
    "source": [
      "Regulatory Filings (e.g., OCC, FDIC)",
      "Press Releases",
      "Financial News"
    ]
  },
  {
    "industry": "mar_tech",
    "signal_name": "Hiring a 'Head of RevOps'",
    "signal_description": "A company posts a job for a 'Head of Revenue Operations' or 'Marketing Operations Manager'.",
    "opportunity_insight": "This hire signals a focus on optimizing the entire revenue funnel. They will be tasked with evaluating, buying, and integrating tools to improve data quality, attribution, lead routing, and reporting.",
    "target_product_categories": [
      "Customer Data Platforms (CDP)",
      "Lead Routing Software",
      "Marketing Attribution Tools",
      "Data Warehousing Solutions",
      "Sales Engagement Platforms"
    ],
    "source": [
      "LinkedIn Jobs",
      "Company Career Pages"
    ]
  },
  {
    "industry": "ed_tech",
    "signal_name": "District-Wide LMS/SIS Adoption",
    "signal_description": "A school district's board meeting minutes or press release indicates they are adopting a new Learning Management System (LMS) or Student Information System (SIS).",
    "opportunity_insight": "A core system change creates a domino effect. The district will need new tools for data integration, rostering, parent communication, and digital content that are compatible with the new platform.",
    "target_product_categories": [
      "Integration Platforms (e.g., Clever, ClassLink)",
      "Digital Curriculum & Content",
      "Parent Communication Apps",
      "Data Analytics & Reporting Tools"
    ],
    "source": [
      "School District Websites",
      "Board Meeting Minutes",
      "EdSurge",
      "Local News"
    ]
  },
  {
    "industry": "legal_tech",
    "signal_name": "Law Firm Practice Area Expansion",
    "signal_description": "A law firm announces the launch of a new practice area, for example, 'AI & Technology Law' or 'Cryptocurrency Law'.",
    "opportunity_insight": "Launching a new practice requires new research tools, expert systems, and case management software tailored to that specific domain of law.",
    "target_product_categories": [
      "Legal Research Databases",
      "Case Management Software",
      "AI-powered Brief Analysis",
      "Knowledge Management Systems"
    ],
    "source": [
      "Law Firm Website/Blog",
      "Legal Journals",
      "LinkedIn Announcements"
    ]
  },
  {
    "industry": "clean_tech",
    "signal_name": "New Solar/Wind Farm Project Announced",
    "signal_description": "An energy company or municipality announces regulatory approval or financing for a new utility-scale solar or wind farm.",
    "opportunity_insight": "These are massive, multi-year infrastructure projects requiring specialized software for project management, environmental compliance, asset performance management, and grid integration.",
    "target_product_categories": [
      "Asset Performance Management (APM)",
      "Energy Trading and Risk Management (ETRM)",
      "Grid Management Software",
      "Environmental, Health, and Safety (EHS) Software"
    ],
    "source": [
      "Industry Publications (e.g., Greentech Media)",
      "Regulatory Filings",
      "Press Releases"
    ]
  },
  {
    "industry": "prop_tech",
    "signal_name": "Large Property Portfolio Acquisition",
    "signal_description": "A REIT or property management company acquires a large portfolio of buildings.",
    "opportunity_insight": "Integrating a new portfolio is a massive operational challenge. The company will need to standardize systems for leasing, maintenance, tenant experience, and building operations.",
    "target_product_categories": [
      "Property Management Software",
      "Building Operations Platforms",
      "Tenant Experience Apps",
      "Smart Building (IoT) Solutions"
    ],
    "source": [
      "Industry News",
      "Press Releases",
      "Public Filings (for REITs)"
    ]
  },
  {
    "industry": "mar_tech",
    "signal_name": "Adoption of a Customer Data Platform (CDP)",
    "signal_description": "A company's tech stack shows the implementation of a CDP like Segment, Tealium, or mParticle.",
    "opportunity_insight": "Implementing a CDP is the first step. The real value comes from activating that data. This company is now a prime customer for personalization engines, multi-channel campaign tools, and analytics platforms that can connect to their new CDP.",
    "target_product_categories": [
      "Personalization Engines",
      "Email Service Providers (ESPs)",
      "Push Notification Services",
      "A/B Testing Platforms",
      "Business Intelligence (BI) Tools"
    ],
    "source": [
      "BuiltWith",
      "G2 Stack",
      "Public HTML source",
      "Job postings mentioning the CDP"
    ]
  },
  {
    "industry": "fin_tech",
    "signal_name": "Partnership with a Major Bank",
    "signal_description": "A fintech startup announces a strategic partnership with a large, established bank or credit union.",
    "opportunity_insight": "This partnership provides validation and a channel for massive scale. The startup will need enterprise-ready tools for API management, security, and infrastructure to handle the increased load and meet the bank's standards.",
    "target_product_categories": [
      "API Management Platforms",
      "Cloud Infrastructure (AWS, Azure, GCP)",
      "Enterprise Security Solutions",
      "Developer Tools"
    ],
    "source": [
      "Company Blog",
      "Press Releases",
      "TechCrunch",
      "American Banker"
    ]
  },
  {
    "industry": "health_tech",
    "signal_name": "Value-Based Care Initiative Launch",
    "signal_description": "A hospital system or provider network announces a new program focused on Value-Based Care (VBC).",
    "opportunity_insight": "VBC models require robust data analytics, patient engagement tools, and care coordination platforms to succeed. Legacy systems are often inadequate.",
    "target_product_categories": [
      "Population Health Management (PHM)",
      "Patient Engagement Platforms",
      "Healthcare Analytics",
      "Remote Patient Monitoring (RPM)"
    ],
    "source": [
      "Healthcare Industry News (e.g., FierceHealthcare)",
      "Hospital System Press Releases",
      "Executive Interviews"
    ]
  },
  {
    "industry": "logistics_tech",
    "signal_name": "Mention of 'Supply Chain Disruption' in Earnings",
    "signal_description": "A company's executive mentions struggles with supply chain disruption or resilience in an earnings call or interview.",
    "opportunity_insight": "This is a direct admission of pain. The company is actively feeling the negative business impact of its current logistics setup and will be highly receptive to solutions that offer visibility, predictability, and efficiency.",
    "target_product_categories": [
      "Supply Chain Visibility Platforms",
      "Transportation Management Systems (TMS)",
      "Demand Forecasting Software",
      "Supplier Relationship Management (SRM)"
    ],
    "source": [
      "Earnings Call Transcripts",
      "Investor Presentations",
      "Interviews in Financial News"
    ]
  },
  {
    "industry": "legal_tech",
    "signal_name": "General Counsel Appointment",
    "signal_description": "A mid-to-large size company hires its first General Counsel or a new Head of Legal.",
    "opportunity_insight": "A new GC will overhaul the legal department's operations, seeking efficiency and cost savings. They are prime buyers for tools that automate contracts, manage discovery, and track spending.",
    "target_product_categories": [
      "Contract Lifecycle Management (CLM)",
      "eDiscovery Software",
      "Legal Spend Management",
      "Intellectual Property (IP) Management"
    ],
    "source": [
      "LinkedIn",
      "Press Releases",
      "Law.com"
    ]
  },
  {
    "industry": "manufacturing",
    "signal_name": "New Factory or Plant Opening",
    "signal_description": "A manufacturing company announces the construction or opening of a new production facility.",
    "opportunity_insight": "A new factory is a prime opportunity to sell modern, digital solutions. The company will be purchasing everything from machinery to the software that runs the plant floor and connects it to the enterprise.",
    "target_product_categories": [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "Industrial IoT (IIoT) Platforms",
      "Robotics and Automation",
      "EHS Software"
    ],
    "source": [
      "Local Business Journals",
      "Press Releases",
      "Trade Publications"
    ]
  },
  {
    "industry": "logistics_tech",
    "signal_name": "Direct-to-Consumer (D2C) Channel Launch",
    "signal_description": "A traditional CPG or manufacturing brand announces they are launching an e-commerce store to sell directly to consumers.",
    "opportunity_insight": "Switching from bulk B2B shipping to individual B2C fulfillment is a completely different logistical challenge. They will need new software and potentially 3PL partners to handle it.",
    "target_product_categories": [
      "Order Management Systems (OMS)",
      "Third-Party Logistics (3PL) Services",
      "Shipping & Fulfillment Software",
      "Returns Management Platforms"
    ],
    "source": [
      "Company Website",
      "Marketing Campaigns",
      "Press Releases"
    ]
  },
  {
    "industry": "logistics_tech",
    "signal_name": "Warehouse or Distribution Center Expansion",
    "signal_description": "A retail, e-commerce, or 3PL company announces plans to build or lease a new distribution center.",
    "opportunity_insight": "A new facility is a greenfield opportunity. It needs to be equipped from scratch with everything from racking and forklifts to sophisticated software for inventory and order management.",
    "target_product_categories": [
      "Warehouse Management Systems (WMS)",
      "Robotics & Automation",
      "Yard Management Systems (YMS)",
      "Supply Chain Visibility Platforms",
      "Fleet Management"
    ],
    "source": [
      "Local Business Journals",
      "Press Releases",
      "Trade Publications (e.g., Supply Chain Dive)"
    ]
  },
  {
    "industry": "retail_ecommerce",
    "signal_name": "Headless Commerce Transition",
    "signal_description": "An e-commerce company's job postings mention 'Headless', 'Jamstack', or list specific headless CMS or frontend frameworks (e.g., Contentful, Vercel).",
    "opportunity_insight": "Going headless means the company is de-coupling its frontend from its backend e-commerce platform. They are now in the market for best-in-class, API-first tools for search, payments, reviews, and personalization.",
    "target_product_categories": [
      "Headless CMS",
      "API-first Search Solutions",
      "Personalization APIs",
      "Payment Gateway APIs",
      "Customer Service Platforms"
    ],
    "source": [
      "Job Postings",
      "Developer Blogs",
      "Technology Stack Analyzers"
    ]
  },
  {
    "industry": "legal_tech",
    "signal_name": "Facing Major Litigation or Regulatory Inquiry",
    "signal_description": "News breaks that a company is facing a class-action lawsuit or a government investigation (e.g., from the DOJ, SEC).",
    "opportunity_insight": "This company will immediately need to retain outside counsel and procure eDiscovery and litigation support services to handle massive amounts of data and case management.",
    "target_product_categories": [
      "eDiscovery Platforms",
      "Legal Hold Software",
      "Forensic Data Collection Services",
      "Alternative Legal Service Providers (ALSPs)"
    ],
    "source": [
      "Legal News Publications",
      "Court Filings (PACER)",
      "Financial News Outlets"
    ]
  },
  {
    "industry": "prop_tech",
    "signal_name": "New Real Estate Fund Closed",
    "signal_description": "A real estate investment firm announces the closing of a new, large fund.",
    "opportunity_insight": "This firm now has a large amount of 'dry powder' (capital) that it must deploy. They will be aggressively acquiring new properties and need software to manage deal flow, due diligence, and eventual asset management.",
    "target_product_categories": [
      "Deal Management Software",
      "Property Management Systems",
      "Investor Relations Portals",
      "Construction Management Software"
    ],
    "source": [
      "Real Estate News (e.g., The Real Deal)",
      "Company Press Releases",
      "LinkedIn"
    ]
  },
  {
    "industry": "fin_tech",
    "signal_name": "Hiring for 'Head of Compliance'",
    "signal_description": "A growing fintech company posts a job for its first dedicated Head of Compliance or Chief Compliance Officer.",
    "opportunity_insight": "This proactive move indicates the company is maturing and preparing for new products or markets that carry a higher regulatory burden. They are in a buying cycle for compliance management and reporting tools.",
    "target_product_categories": [
      "Compliance Management Software",
      "Regulatory Change Management Platforms",
      "Employee Training Software (LMS)",
      "GRC Platforms"
    ],
    "source": [
      "LinkedIn Jobs",
      "Company Career Pages",
      "Recruiter Posts"
    ]
  },
  {
    "industry": "ed_tech",
    "signal_name": "Launch of a New Online Degree Program",
    "signal_description": "A university announces the launch of a new fully online or hybrid degree program.",
    "opportunity_insight": "New online programs require a specific tech stack for student recruitment, online proctoring, video conferencing, and student engagement to be successful.",
    "target_product_categories": [
      "Online Program Management (OPM) Services",
      "Student Recruitment CRM",
      "Online Proctoring Solutions",
      "Video Classroom Software",
      "Accessibility Tools (WCAG)"
    ],
    "source": [
      "University Press Releases",
      "Higher Ed Dive",
      "Program-Specific Landing Pages"
    ]
  },
  {
    "industry": "clean_tech",
    "signal_name": "Corporate ESG Report Publication",
    "signal_description": "A large corporation publishes its annual Environmental, Social, and Governance (ESG) report, setting new carbon reduction goals.",
    "opportunity_insight": "Publicly stated ESG goals create accountability. These companies now need to invest in software to accurately track carbon emissions, manage sustainability data, and report progress to stakeholders.",
    "target_product_categories": [
      "Carbon Accounting Platforms",
      "ESG Data Management Software",
      "Supply Chain Sustainability Tools",
      "Energy Efficiency Solutions"
    ],
    "source": [
      "Company Website (Investor Relations)",
      "Press Releases",
      "Sustainability Reports"
    ]
  },
  {
    "industry": "prop_tech",
    "signal_name": "Smart Building or ESG Certification Goal",
    "signal_description": "A property owner or developer announces a goal to achieve a certification like LEED, WELL, or WiredScore, or publishes an ESG report.",
    "opportunity_insight": "These certifications and goals require specific technologies for energy management, air quality monitoring, and data reporting. They need vendors who can help them meet the criteria.",
    "target_product_categories": [
      "Energy Management Systems (EMS)",
      "IoT Sensors & Platforms",
      "ESG Reporting Software",
      "Access Control Systems"
    ],
    "source": [
      "Company Sustainability Reports",
      "Press Releases",
      "Building Certification Websites"
    ]
  },
  {
    "industry": "manufacturing",
    "signal_name": "'Industry 4.0' or 'Digital Twin' Initiative",
    "signal_description": "A company executive mentions a strategic initiative around 'Industry 4.0', 'Smart Factories', or 'Digital Twins' in a report or interview.",
    "opportunity_insight": "This is a top-down mandate to digitize operations. The company is actively looking for partners and technologies to connect machinery, collect data, and use predictive analytics to improve efficiency.",
    "target_product_categories": [
      "IIoT Platforms",
      "Predictive Maintenance Software",
      "Augmented Reality (AR) for Technicians",
      "Supply Chain Management (SCM)"
    ],
    "source": [
      "Annual Reports",
      "Investor Presentations",
      "Executive Interviews"
    ]
  }
]


function Features() {
  const industries: string[] = [];
  for (let i = 0; i < tableData.length; i++) {
    const data = tableData[i].industry.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    if (!industries.includes(data)) {
      industries.push(data);
    }
  }
  return (
    <div className="flex flex-col  px-4 md:h-[800px] md:px-0">
      <div className="flex w-full flex-col items-center py-9 md:pb-10 md:pt-24">
        <h2 className="text-center text-2xl  tracking-tighter text-white md:text-5xl">
          Stalk every company in your TAM
        </h2>
        <p className="mt-2 max-w-sm text-center text-sm tracking-tight text-neutral-400 md:max-w-xl md:text-base">
          We analyze thousands of real-time signals to show you which companies are
          raising their hands <b>before </b>they hit the market. Stop guessing who's
          ready to buy and engage the right account at the perfect time.
        </p>
      </div>

      <div className=" hidden w-full flex-row gap-12 px-24 py-8 md:flex ">
        <div className=" w-1/4 space-y-6">
          <input
            className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark max-w-sm border-2 border-[#FFD37B]"
            placeholder="I sell in ..."
            defaultValue=""
          />
          <div className="space-y-4 pl-1">
            {
              industries.map((item, index) => {
                return <CheckBox key={index} title={item} />
              })
            }
          </div>
        </div>
        <div className="dark h-[450px] w-3/4 overflow-y-auto rounded-md [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar]:w-2">
          <div className="relative w-full ">
            <table className="w-full caption-bottom table-fixed">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-10 px-2 text-left align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] sticky top-0 w-1/2 bg-black tracking-tighter text-neutral-200">
                    Signal
                  </th>
                  <th className="h-10 px-2 align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] sticky top-0 bg-black text-right tracking-tighter text-neutral-200" />
                  <th className="h-10 px-2 align-middle font-normal [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] sticky top-0 bg-black text-right tracking-tighter text-neutral-200">
                    Industry
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {
                  tableData.map((item) => {
                    return <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-2 align-middle max-w-[250px] max-h-[20px] overflow-hidden text-ellipsis [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-sm">
                        <p className="text-sm font-medium">{item.signal_name}</p>
                        <p className="mt-1 text-xs text-neutral-400">
                          {item.opportunity_insight}
                        </p>
                      </td>
                      <td className="p-2 align-middle max-w-[250px] max-h-[20px] overflow-hidden text-ellipsis [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-sm text-neutral-200" />
                      <td className="p-2 align-middle max-w-[250px] max-h-[20px] overflow-hidden text-ellipsis [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-right text-sm text-neutral-200 font-semibold">
                        {item.industry.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Features