import { 
  Globe, 
  TrendingUp, 
  Search, 
  Share2, 
  Layers, 
  Film, 
  Image as ImageIcon, 
  Palette, 
  Zap, 
  Bot, 
  BarChart3,
  Cpu
} from 'lucide-react';

export const servicesData = [
  /* ==================================================
     PARENT SERVICE 01: BUSINESS GROWTH
     ================================================== */
  {
    id: 'business-growth',
    number: '01',
    label: 'PILLAR 01',
    title: 'BUSINESS GROWTH',
    tagline: 'Scale Your Digital Authority & Acquisition',
    description: 'Build a stronger digital presence, reach the right audience and create meaningful business opportunities.',
    heroCopy: 'Build a stronger digital presence, reach the right audience and create meaningful opportunities through websites, marketing and social growth.',
    ctaText: 'Explore Business Growth',
    accentColor: '#FF6026',
    icon: Globe,
    childServices: [
      {
        id: 'website-design-development',
        title: 'Website Design & Development',
        shortTitle: 'Web Design & Dev',
        icon: Globe,
        tagline: 'High-performance, conversion-engineered web experiences',
        explanation: 'Custom-crafted, lightning-fast web experiences built for high SEO visibility, effortless mobile navigation, and visitor-to-inquiry conversion.',
        supportingCopy: 'Explore websites and digital experiences created by Yuvantaa Digitals for businesses across different industries.',
        problem: 'Outdated, slow or template websites that look generic and fail to turn visitors into qualified inquiries.',
        deliverables: [
          'High-performance custom web architecture built with modern frameworks',
          'Mobile-first responsive UX and frictionless navigation flows',
          'Clean semantic SEO markup, Core Web Vitals optimization & rapid loading'
        ],
        practicalValue: 'Presents your company as an undisputed authority and ensures every prospect understands your value proposition within seconds.',
        projects: [
          {
            id: '11-east-street-cafe',
            title: '11 East Street Cafe',
            client: '11 East Street Cafe, Camp, Pune',
            category: 'Website Design & Development',
            heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
            previewBadge: 'Iconic Pune Landmark',
            keyPoints: [
              'Pune’s iconic London red-bus bistro & bar with bespoke British-themed visual branding',
              'Interactive digital food & signature cocktail menu with instant table reservation booking flow',
              'Ultra-responsive mobile UX with sub-second page loads and local SEO dominance'
            ],
            tags: ['Iconic Landmark', 'Custom UI/UX', 'Digital Menu', 'Table Booking', 'Local SEO'],
            liveDemoUrl: 'https://hotel-three-chi.vercel.app/',
            detailInfo: {
              overview: '11 East Street Cafe is one of Pune’s most celebrated culinary landmarks, famous for its vintage red London double-decker bus, European bistro ambiance, and vibrant dining atmosphere. We engineered a complete digital flagship experience that mirrors their iconic heritage while driving direct table reservations.',
              challenge: 'The cafe was relying heavily on third-party aggregators that charged high commissions and weakened direct customer retention. Their legacy presence lacked mobile responsiveness and digital menu exploration.',
              solution: 'Built a sleek, high-speed responsive web platform with interactive visual menus, private party inquiry integrations, automated WhatsApp booking triggers, and Google Local Business synchronization.',
              results: [
                '140% surge in direct table and private event reservation inquiries within 60 days',
                '98+ Google Core Web Vitals score on mobile devices with zero layout shift',
                'Ranked #1 for Pune iconic bistro dining and weekend cafe keywords'
              ],
              techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Schema.org SEO']
            }
          },
          {
            id: 'aniket-tours-travels',
            title: 'Aniket Tours & Travels',
            client: 'Aniket Tours & Travels, Pune',
            category: 'Website Design & Development',
            heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
            previewBadge: 'Tempo Traveller & Fleet',
            keyPoints: [
              'Pune & Maharashtra premier Tempo Traveller and vehicle rental fleet booking portal',
              'Fleet configuration selector (4-seater car, 7-seater Innova, 17-seater Tempo, 26-seater bus)',
              'Dynamic trip quote calculator with direct 1-tap WhatsApp booking inquiry routing'
            ],
            tags: ['Tempo Traveller', 'Fleet Booking', 'WhatsApp Flow', 'Car Rental', 'Pune & Maharashtra'],
            liveDemoUrl: 'https://www.anikettoursandtravels.in/',
            detailInfo: {
              overview: 'Aniket Tours & Travels is Pune’s premier fleet rental service specializing in luxury Tempo Travellers, tourist buses, and executive SUVs for outstation holiday packages, corporate transit, airport transfers, and Maharashtra pilgrimage circuits.',
              challenge: 'Customers had to make multiple phone calls to understand vehicle seating options, fleet photos, and pricing estimates, resulting in high inquiry drop-offs.',
              solution: 'Architected a mobile-first travel portal with visual fleet configuration cards (4-seater sedan, 7-seater Innova Crysta, 17-seater Tempo Traveller, 26-seater mini bus), popular Maharashtra tour packages, and seamless 1-tap WhatsApp booking routing.',
              results: [
                '3.2x increase in WhatsApp booking inquiries within the first 60 days',
                'Over 65% reduction in repetitive rate-inquiry calls through the interactive fleet showcase',
                'Expanded recurring corporate transport contracts across Pune and Mumbai'
              ],
              techStack: ['React', 'Tailwind CSS', 'WhatsApp Business API', 'Performance Optimization', 'SEO Fleet Routing']
            }
          },
          {
            id: 'goodwill-education',
            title: 'Goodwill Education',
            client: 'Goodwill Education, Pune',
            category: 'Website Design & Development',
            heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
            previewBadge: 'Science, JEE & NEET Academy',
            keyPoints: [
              'Premier coaching academy for 11th & 12th Science, MHT-CET, JEE Mains, and NEET',
              '25+ Years of Academic Excellence showcase, topper rankers list & verified results',
              'Streamlined admission inquiry funnel, demo lecture booking & downloadable syllabus'
            ],
            tags: ['11th & 12th Science', 'MHT-CET', 'JEE & NEET', 'Admission Funnel', 'Ranker Showcase'],
            liveDemoUrl: 'https://www.goodwilleducation.in/',
            detailInfo: {
              overview: 'Goodwill Education is a leading coaching institution with 25+ years of academic excellence preparing students for 11th & 12th Science board examinations as well as competitive entrance tests including MHT-CET, JEE Mains, and NEET.',
              challenge: 'Previous word-of-mouth admissions were unable to keep pace with growing digital searches by parents and students looking for verified faculty track records and entrance exam results online.',
              solution: 'Engineered a conversion-focused educational portal highlighting structured course offerings, expert faculty profiles, ranker testimonials, classroom infrastructure, and a streamlined free demo lecture booking flow.',
              results: [
                '78% increase in online inquiries and demo lecture bookings for new batches',
                '52% decrease in cost-per-lead acquisition via hyper-local academic SEO',
                'High parent trust with transparent fee structures, batch schedules, and ranker proofs'
              ],
              techStack: ['React', 'Tailwind CSS', 'Vite', 'Admission CRM API', 'Educational SEO Schema']
            }
          }
        ]
      },
      {
        id: 'performance-marketing',
        title: 'Performance Marketing',
        shortTitle: 'Performance Marketing',
        icon: TrendingUp,
        tagline: 'Data-driven paid customer acquisition with measurable ROI',
        explanation: 'Data-driven paid advertising campaigns structured to reach prospective customers and optimize cost per inquiry.',
        problem: 'Wasted ad spend on unfocused campaigns with low conversion rates and zero attribution clarity.',
        deliverables: [
          'Audience intent research, competitive targeting & cohort segmentation',
          'Conversion-optimized ad creative frameworks & compelling direct-response copy',
          'Continuous campaign A/B testing, pixel attribution & budget scale optimization'
        ],
        practicalValue: 'Turns advertising into a disciplined acquisition machine with transparent cost-per-lead metrics.',
        projects: [
          {
            id: 'firoz-sayyad-performance-lead-campaigns',
            title: 'Firoz Sayyad Lead Generation Campaigns',
            client: 'Firoz Sayyad (Interior Design & Real Estate)',
            category: 'Performance Marketing',
            heroImage: '/performance-marketing-dashboard.png',
            imageFit: 'contain',
            previewBadge: '100% Opportunity Score',
            keyPoints: [
              'Interior Design Campaign: 53 qualified form leads generated at ₹70.94/lead with ₹3.76K spend',
              'Real Estate Campaign: 59 direct inbound phone calls placed at ₹47.08/call with ₹2.78K spend',
              'Total Account Metrics: 112 conversions on ₹6,537.53 total ad spend with a flawless 100 Opportunity Score'
            ],
            tags: ['Interior Design', 'Real Estate', 'Meta & Google Ads', 'Lead Generation', 'Low CPL'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'Live performance marketing analytics for Firoz Sayyad showcasing high-efficiency customer acquisition campaigns across Interior Design and Real Estate sectors. Engineered with laser-focused audience targeting to deliver maximum inquiries on an agile budget.',
              challenge: 'Acquiring serious, high-intent prospects for interior design projects and real estate inquiries without inflating cost-per-lead (CPL) or exhausting budgets on unqualified clicks.',
              solution: 'Architected a dual-funnel strategy: high-converting Instant Lead Forms for interior design projects and direct click-to-call campaigns for urgent real estate prospects.',
              results: [
                '53 Qualified Design Form Leads at just ₹70.94 per lead (₹3.76K spent)',
                '59 Direct Real Estate Inbound Calls at ₹47.08 per call (₹2.78K spent)',
                '100/100 Flawless Account Opportunity Score with zero budget waste'
              ],
              techStack: ['Google Ads Manager', 'Meta Ads Platform', 'Click-to-Call Ads', 'Instant Lead Forms', 'Budget Optimization']
            }
          }
        ]
      },
      {
        id: 'strong-online-presence',
        title: 'Strong Online Presence',
        shortTitle: 'Online Presence',
        icon: Search,
        tagline: 'Dominate local search and build authoritative digital trust',
        explanation: 'Comprehensive digital footprint management including search indexing, local business profiles, and cross-channel consistency.',
        problem: 'Invisible online presence when potential clients search for your services, losing revenue to lesser competitors.',
        deliverables: [
          'Google Business Profile top-3 map pack ranking & weekly optimization',
          'Structured directory citations, NAP alignment & authority backlink building',
          'Verified search console indexing and rich snippet structured data'
        ],
        practicalValue: 'Guarantees your business appears prominently and credibly whenever high-intent prospects search locally.',
        projects: [
          {
            id: 'lc-fitness-club-pune',
            title: 'LC Fitness Club',
            client: 'LC Fitness Club | Keshav Nagar, Pune',
            category: 'Strong Online Presence',
            heroImage: '/lc-fitness-club-insta.png',
            imageFit: 'contain',
            previewBadge: '35.9K Followers • 20.7K Reach',
            keyPoints: [
              'Pune’s premier Keshav Nagar gym with 35.9K+ active Instagram community & 1,260+ posts',
              'High-visibility professional profile generating 20.7K+ organic views every 30 days',
              'Direct conversion funnel with 1-tap WhatsApp consultation, gym tours & free trials'
            ],
            tags: ['35.9K Followers', '20.7K Views', 'Fitness Authority', 'Zumba & Strength', 'WhatsApp Funnel'],
            instagramUrl: 'https://www.instagram.com/lc_fitness_club_pune?stkn=N3EwdXM4YjdmbDVr&utm_source=qr',
            detailInfo: {
              overview: 'LC Fitness Club is Keshav Nagar, Pune’s premier fitness destination. We transformed their digital presence into a thriving authority with 35.9K+ followers, structured highlight series (Gym Tour, Nutrition, Zumba, Workout Plans), and 20.7K+ monthly profile impressions.',
              challenge: 'Local fitness gyms face intense neighborhood competition and low walk-ins without a vibrant, trustworthy social presence.',
              solution: 'Created an engaging short-form video content strategy showcasing high-energy gym transformations, daily Zumba & group workout reels, and direct 1-tap WhatsApp consultation links in bio.',
              results: [
                'Built a loyal active community of 35.9K+ verified followers',
                '20.7K+ organic impressions generated every 30 days',
                'Daily direct inquiries for personal training & membership trials via WhatsApp'
              ],
              techStack: ['Instagram Reels', 'Meta Business Suite', 'WhatsApp Business API', 'Pune Local Geo-Tagging']
            }
          },
          {
            id: 'ideal-property-pune',
            title: 'Ideal Property Pune',
            client: 'Ideal Property (RERA: A52100004725), Kondhwa, Pune',
            category: 'Strong Online Presence',
            heroImage: '/ideal-property-insta.png',
            imageFit: 'contain',
            previewBadge: '105.2K Monthly Reach',
            keyPoints: [
              'RERA-certified Pune real estate firm with 105.2K+ organic monthly profile impressions',
              'High-converting video walkthrough reels showcasing 2 BHK, 3.5 BHK flats & commercial plots',
              'Direct buyer-agent bridge connecting Kondhwa and Pune property investors via verified WhatsApp'
            ],
            tags: ['105.2K Monthly Views', 'RERA: A52100004725', 'Property Reels', 'Kondhwa Pune', 'Lead Bridge'],
            instagramUrl: 'https://www.instagram.com/idealproperty_homes?stkn=MTdqYmxpZThueTZobA%3D%3D&utm_source=qr',
            detailInfo: {
              overview: 'Ideal Property is a prominent RERA-registered real estate consultancy in Kondhwa, Pune. We transformed their Instagram into a video-first property marketplace generating over 105.2K views every month.',
              challenge: 'Traditional real estate classifieds deliver cold leads with low intent, while static photo listings failed to convey space, lighting, and layout.',
              solution: 'Produced walkthrough reels with on-screen specifications (e.g. 3.5 BHK carpet area, pricing, amenities), clear location branding, and streamlined inquiry buttons.',
              results: [
                'Surpassed 105.2K+ video views in the last 30 days',
                'Generated consistent high-ticket buyer inquiries for 2 & 3.5 BHK apartments',
                'Established high consumer trust with transparent RERA registration (A52100004725)'
              ],
              techStack: ['Real Estate Video Reels', 'RERA Compliance Branding', 'Meta Professional Dashboard', 'WhatsApp Lead Routing']
            }
          },
          {
            id: 'acharya-gurukulam-pune',
            title: 'Acharya Gurukulam',
            client: 'Acharya Gurukulam (8 to 8 Residential Gurukul), Pune',
            category: 'Strong Online Presence',
            heroImage: '/acharya-gurukulam-insta.png',
            imageFit: 'contain',
            previewBadge: 'India’s Unique 8 to 8 Gurukul',
            keyPoints: [
              'India’s unique 8-to-8 Gurukul blending Ashtanga Yoga, residential living, schooling & values',
              'Authoritative video content featuring founder interviews, classroom discipline & cultural heritage',
              'Cultivated trusted parental following with transparent glimpses into daily student routines'
            ],
            tags: ['Ashtanga Yoga', 'Gurukul Education', 'Moral Values', 'Founder Interviews', 'Cultural Heritage'],
            instagramUrl: 'https://www.instagram.com/acharya_gurukulam_official?stkn=MTI0ODNjMHJua3F5aA==',
            detailInfo: {
              overview: 'Acharya Gurukulam is an institution integrating traditional Ashtanga Yoga and ancient Indian moral values with modern academic schooling in Pune. We established an authoritative digital presence that conveys their vision.',
              challenge: 'Communicating a novel ‘8 to 8’ educational philosophy to modern parents seeking holistic discipline and academic focus for their children.',
              solution: 'Curated a video-driven brand narrative showcasing founder discourses, physical discipline drills, cultural festivals (Ganeshotsav), and student life.',
              results: [
                'Established high digital respect and cultural credibility across Maharashtra',
                'High parental engagement on founder video interviews and student drills',
                'Streamlined parent admission counseling inquiries via direct WhatsApp link'
              ],
              techStack: ['Brand Storytelling', 'Marathi Regional Content', 'Video Production', 'Educational Heritage Branding']
            }
          },
          {
            id: 'umeed-care-center-pune',
            title: 'Umeed Care Center',
            client: 'Umeed Care Center (26+ Years of Elder Care), Pune',
            category: 'Strong Online Presence',
            heroImage: '/umed-care-center-insta.png',
            imageFit: 'contain',
            previewBadge: '26+ Years Trusted Care',
            keyPoints: [
              '26+ years of compassionate geriatric healthcare, assisted living & 24/7 bedridden care',
              'Educative health awareness reels on bed sore management, patient hygiene & senior nursing',
              'Transparent digital window for families with clinic tours & Dr. Ranjana Kadam-Pawar leadership'
            ],
            tags: ['Elder Care', '26+ Years Trust', 'Bedridden Care', 'Assisted Living', 'Medical Compassion'],
            instagramUrl: 'https://www.instagram.com/umedcarecenter_pune?stkn=a2Z0Y3lydnNnbmdr',
            detailInfo: {
              overview: 'Umeed Care Center (Om Pratishthan Charitable Trust) has been Pune’s beacon of compassionate elder care for over 26 years. We established their digital presence to help families find trusted assisted living and nursing care.',
              challenge: 'Families searching for compassionate bedridden care and elder assisted living need high trust and medical credibility before reaching out.',
              solution: 'Developed educational content on geriatric nursing, bed sore prevention, caregiver team showcases, festival celebrations with residents, and direct Google Maps location accessibility.',
              results: [
                'Celebrated 26th Anniversary milestone with community recognition',
                'Educated thousands of caregivers on proper bed sore prevention and elderly hygiene',
                'Provided anxious families with transparent video tours of living facilities and staff warmth'
              ],
              techStack: ['Healthcare Content Strategy', 'Google Maps Geo-Integration', 'Elder Care Education', 'Doctor-Led Communication']
            }
          }
        ]
      },
      {
        id: 'social-media-growth',
        title: 'Social Media Growth',
        shortTitle: 'Social Growth',
        icon: Share2,
        tagline: 'Strategic audience building that transforms viewers into advocates',
        explanation: 'Strategic distribution and audience development strategies to turn casual viewers into engaged brand advocates.',
        problem: 'Stagnant follower count and low reach on Instagram, LinkedIn, and YouTube despite consistent posting.',
        deliverables: [
          'Audience demographic research, niche positioning & hook architecture',
          'Cross-platform short-form content distribution across Reels, Shorts & LinkedIn',
          'Community engagement tactics that foster authentic conversations and shares'
        ],
        practicalValue: 'Expands your market influence and creates an organic pipeline of inbound customer trust.',
        projects: [
          {
            id: 'ideal-property-social-media-growth',
            title: '0 to 105.2K+ Views in 50 Days (Ideal Property)',
            client: 'Ideal Property | Pune Real Estate (Kondhwa)',
            category: 'Social Media Growth',
            heroImage: '/ideal-property-social-growth.png',
            imageFit: 'contain',
            previewBadge: '105.2K+ Reach in 50 Days',
            keyPoints: [
              'Scaled from zero to 105.2K+ organic monthly video views in just 50 days of active account management',
              'High-performing property walkthrough Reels format (Spacious 3 BHK, 2 BHK, and master bedroom tours)',
              'Direct organic lead generation bridging property buyers across Pune and Kondhwa via WhatsApp & web link'
            ],
            tags: ['105.2K Views', '50 Days Growth', 'Viral Real Estate Reels', 'Organic Reach', 'Pune Real Estate'],
            instagramUrl: 'https://www.instagram.com/idealproperty_homes?stkn=MTdqYmxpZThueTZobA%3D%3D&utm_source=qr',
            detailInfo: {
              overview: 'Yuvantaa Digitals took over the social media growth for Ideal Property just 50 days ago. By introducing professional presenter-led property walkthrough Reels, architectural tours, and localized Pune real estate hooks, we propelled the account from scratch to over 105.2K monthly views with explosive organic engagement.',
              challenge: 'The client had valuable residential properties in Kondhwa and Pune, but zero digital reach and low video engagement, relying solely on sluggish offline referrals.',
              solution: 'Engineered an organic video content flywheel: scripted property walkthroughs (3 BHK, 2 BHK, luxury master bedrooms, 806 sq. ft units), clear on-screen space dimensions, high-converting thumbnail hooks, and direct WhatsApp contact routing.',
              results: [
                'Surpassed 105,200+ organic video views within the first 50 days of management',
                'Consistent inbound inquiries from genuine home buyers for 2 BHK & 3 BHK flats',
                'Established Ideal Property as one of Kondhwa Pune’s fastest-growing digital real estate brands'
              ],
              techStack: ['Presenter Walkthrough Reels', 'Instagram Algorithm Optimization', 'Hook & Retention Scripting', 'WhatsApp Inbound Funnel', 'Professional Dashboard Analytics']
            }
          }
        ]
      },
      {
        id: 'social-media-management',
        title: 'Social Media Management',
        shortTitle: 'Social Management',
        icon: Layers,
        tagline: 'End-to-end editorial scheduling, community moderation and brand consistency',
        explanation: 'End-to-end editorial scheduling, posting consistency, community moderation, and performance tracking.',
        problem: 'Inconsistent publishing schedules, irregular brand aesthetics, and missed client DMs.',
        deliverables: [
          'Monthly curated multi-channel content calendar & scheduled automated publishing',
          'High-converting caption copywriting, hashtag strategy & visual asset formatting',
          'Daily direct message triage, proactive comment moderation & monthly analytics'
        ],
        practicalValue: 'Maintains an active, polished corporate brand presence without pulling your internal team away from core work.',
        projects: [
          {
            id: 'ideal-property-management',
            title: 'Ideal Property Pune Real Estate',
            client: 'Ideal Property (RERA: A52100004725), Kondhwa, Pune',
            category: 'Social Media Management',
            heroImage: '/ideal-property-insta.png',
            imageFit: 'contain',
            previewBadge: 'End-to-End Reels & Management',
            keyPoints: [
              'End-to-end management: scripting, on-site property walkthrough shoots, editing, and publishing',
              'Generated 105.2K+ monthly organic views with structured property showcase Reels (2 & 3.5 BHK)',
              'Complete lead-routing workflow handling WhatsApp buyer inquiries, comments, and direct messages'
            ],
            tags: ['Strategy to Uploading', 'Real Estate Reels', '105.2K Views', 'RERA A52100004725', 'Kondhwa Pune'],
            instagramUrl: 'https://www.instagram.com/idealproperty_homes?stkn=MTdqYmxpZThueTZobA%3D%3D&utm_source=qr',
            detailInfo: {
              overview: 'Full-stack social media management for Ideal Property, Pune. From scripting on-location property tours to high-retention video editing and daily scheduled publishing, our team manages their entire Instagram footprint from scratch to end.',
              challenge: 'The client needed a hands-off, turnkey management solution to film ongoing property inventory and consistently publish high-ticket walkthroughs without disrupting their daily sales work.',
              solution: 'We established an end-to-end production workflow: weekly on-site filming schedules, presenter scripting, cinematic interior color grading, fast-paced editing, and instant WhatsApp inquiry routing.',
              results: [
                'Delivered consistent multi-video publishing schedule weekly with zero missed deadlines',
                'Surpassed 105,200+ organic video impressions in the last 30 days',
                'Captured direct inbound purchase inquiries for 2 BHK, 3.5 BHK, and commercial units'
              ],
              techStack: ['On-Location Shooting', 'Kinetic Video Editing', 'Meta Business Suite', 'Content Calendar', 'Inquiry Routing']
            }
          },
          {
            id: 'lc-fitness-club-management',
            title: 'LC Fitness Club',
            client: 'LC Fitness Club | Keshav Nagar, Pune',
            category: 'Social Media Management',
            heroImage: '/lc-fitness-club-insta.png',
            imageFit: 'contain',
            previewBadge: 'Turnkey Gym Management',
            keyPoints: [
              'Full-service creative execution: transformation shoots, workout reels, nutrition tips & story scheduling',
              'Maintains a thriving 35.9K+ follower fitness community with 20.7K+ monthly account impressions',
              'Proactive direct message triage and comment moderation driving free trial workout signups'
            ],
            tags: ['Content to Uploading', 'Gym Storytelling', '35.9K Followers', '20.7K Reach', 'Trial Funnel'],
            instagramUrl: 'https://www.instagram.com/lc_fitness_club_pune?stkn=N3EwdXM4YjdmbDVr&utm_source=qr',
            detailInfo: {
              overview: 'Complete social media management for LC Fitness Club in Keshav Nagar, Pune. Our team oversees everything from concept development, member transformation filming, dynamic editing, daily story interactions, and scheduling.',
              challenge: 'Running a busy gym leaves no time for trainers and gym owners to shoot content, design posts, or handle inquiries in DMs.',
              solution: 'Executed a structured content matrix: monthly shoot sessions, high-energy Zumba and bodybuilding edit reels, daily motivational stories, and automated member lead capture via WhatsApp.',
              results: [
                'Grew and nurtured an active community of 35,900+ fitness enthusiasts',
                'Maintained consistent monthly organic reach exceeding 20.7K profile visits',
                'Streamlined daily walk-in trial bookings directly from Instagram DMs and bio links'
              ],
              techStack: ['Gym Production Shoots', 'Reels Sound Design', 'Community Management', 'WhatsApp Lead Flow']
            }
          },
          {
            id: 'acharya-gurukulam-management',
            title: 'Acharya Gurukulam',
            client: 'Acharya Gurukulam (8 to 8 Residential Gurukul), Pune',
            category: 'Social Media Management',
            heroImage: '/acharya-gurukulam-insta.png',
            imageFit: 'contain',
            previewBadge: 'Cultural & Academic Management',
            keyPoints: [
              'Turnkey institutional management: capturing spiritual discourses, physical drills & cultural events',
              'Dignified educational narrative highlighting Ashtanga Yoga, Vedic values & 8-to-8 schooling',
              'Consistent reel editing, Marathi caption copywriting, and parent admission counseling routing'
            ],
            tags: ['Turnkey Management', 'Ashtanga Yoga', 'Gurukul Discipline', 'Parent Funnel', 'Cultural Heritage'],
            instagramUrl: 'https://www.instagram.com/acharya_gurukulam_official?stkn=MTI0ODNjMHJua3F5aA==',
            detailInfo: {
              overview: 'Full-scale digital stewardship for Acharya Gurukulam, India’s unique 8-to-8 residential gurukul in Pune. We handle documentary-style video shoots, thought-leadership founder interviews, festive celebrations, and parent inquiries.',
              challenge: 'Communicating the rich heritage of Gurukul discipline and modern academics requires thoughtful, respectful, and culturally authentic communication.',
              solution: 'Filmed authentic classroom routines, Ashtanga Yoga practice, and festive Ganeshotsav celebrations, paired with inspiring Marathi copywriting and organized highlight archiving.',
              results: [
                'Built a deeply engaged community of parents and cultural patrons across Maharashtra',
                'Produced high-authority founder interview series that established educational trust',
                'Maintained seamless weekly video scheduling and prompt admission query management'
              ],
              techStack: ['Documentary Videography', 'Regional Content Scripting', 'Story Highlights Architecture', 'Vedic Brand Strategy']
            }
          },
          {
            id: 'umed-care-center-management',
            title: 'Umeed Care Center',
            client: 'Umeed Care Center (26+ Years of Elder Care), Pune',
            category: 'Social Media Management',
            heroImage: '/umed-care-center-insta.png',
            imageFit: 'contain',
            previewBadge: 'Healthcare Brand Management',
            keyPoints: [
              'End-to-end elder care storytelling: facility shoots, doctor interviews, nurse spotlights & publishing',
              'Educative health awareness reels covering bed sore prevention, senior nutrition & assisted living',
              'Empathetic community management providing anxious families with rapid assistance and clinic details'
            ],
            tags: ['End-to-End Handling', '26+ Years Trust', 'Elder Care Education', 'Medical Compassion', 'Assisted Living'],
            instagramUrl: 'https://www.instagram.com/umedcarecenter_pune?stkn=a2Z0Y3lydnNnbmdr',
            detailInfo: {
              overview: 'Dedicated social media management for Umeed Care Center (Om Pratishthan Charitable Trust) in Pune. Our team scripts, films on location with caregivers and doctors, edits compassionate reels, and schedules daily educational posts.',
              challenge: 'Elder healthcare requires an exceptionally empathetic touch. Families seeking 24-hour bedridden care need immediate reassurance, clean facility visuals, and medically verified advice.',
              solution: 'Produced heart-warming facility walk-throughs, doctor-led guidance on bed sore hygiene, celebration reels with senior residents, and clear Google Maps location navigation.',
              results: [
                'Documented the organization’s historic 26th Anniversary milestone',
                'Educated families across Pune on professional palliative and bedridden nursing standards',
                'Maintained rapid compassionate DM and comment response for urgent care inquiries'
              ],
              techStack: ['Medical Content Production', 'Doctor Interview Filming', 'Empathetic Copywriting', 'Google Maps Geo-Tagging']
            }
          }
        ]
      }
    ]
  },

  /* ==================================================
     PARENT SERVICE 02: CREATIVE SERVICES
     ================================================== */
  {
    id: 'creative-services',
    number: '02',
    label: 'PILLAR 02',
    title: 'CREATIVE SERVICES',
    tagline: 'Captivate & Communicate Visually',
    description: 'Create visual experiences that capture attention and strengthen brand communication.',
    heroCopy: 'Build stronger visual communication through video, thumbnails and graphic design.',
    ctaText: 'Explore Creative Services',
    accentColor: '#FF1E56',
    icon: Palette,
    childServices: [
      {
        id: 'video-editing',
        title: 'Video Editing',
        shortTitle: 'Video Editing',
        icon: Film,
        tagline: 'High-retention editing engineered for the modern attention span',
        explanation: 'Pacing-focused video editing for brand stories, social media reels, and high-retention long-form content.',
        problem: 'Viewers scrolling away within the first 3 seconds due to sluggish pacing, poor audio mixing, and flat visuals.',
        deliverables: [
          'Strategic hook structuring, pattern interrupts & attention retention cuts',
          'Professional cinematic color grading, balanced audio mastering & immersive SFX',
          'Dynamic kinetic typography overlays, custom 2D motion graphics & b-roll curation'
        ],
        practicalValue: 'Significantly multiplies watch time, boosts platform algorithmic distribution, and holds attention until your call-to-action.',
        projects: [
          {
            id: 'edited-video-1',
            title: 'Edited Video 1',
            category: 'Video Editing',
            videoOnly: true,
            videoUrl: '/vid1.mp4'
          },
          {
            id: 'edited-video-2',
            title: 'Edited Video 2',
            category: 'Video Editing',
            videoOnly: true,
            videoUrl: '/vid2.mp4'
          }
        ]
      },
      {
        id: 'thumbnail-design',
        title: 'Thumbnail Design',
        shortTitle: 'Thumbnail Design',
        icon: ImageIcon,
        tagline: 'Psychology-driven visual hooks engineered for peak click-through rate',
        explanation: 'Psychology-driven visual compositions engineered for maximum click-through rates (CTR) and feed standout.',
        problem: 'World-class videos suffering from low view counts because the thumbnail preview fails to capture clicks in crowded feeds.',
        deliverables: [
          'High-contrast visual hierarchy, focal depth & subject isolation',
          'Ultra-readable mobile typography with 3-word emotional curiosity triggers',
          'Rigorous A/B variant testing setups and branded visual signature recognition'
        ],
        practicalValue: 'Directly multiplies your existing audience impressions into actual views without spending an extra rupee on advertising.',
        projects: [
          {
            id: 'gym-thumbnail-3-mistakes',
            title: '3 Gym Mistakes That Are Slowing Your Progress',
            category: 'Thumbnail Design',
            heroImage: '/gym-thumbnail-3-mistakes.png',
            imageOnly: true
          },
          {
            id: 'gym-thumbnail-7am',
            title: 'What Actually Happens at 7 AM in LC Fitness?',
            category: 'Thumbnail Design',
            heroImage: '/gym-thumbnail-7am.jpg',
            imageOnly: true
          },
          {
            id: 'gym-thumbnail-4-types',
            title: '4 Types of People in Every Gym',
            category: 'Thumbnail Design',
            heroImage: '/gym-thumbnail-4-types.png',
            imageOnly: true
          },
          {
            id: 'gym-thumbnail-mistakes-reels',
            title: 'LC Fitness High-Impact Reels Cover',
            category: 'Thumbnail Design',
            heroImage: '/gym-thumbnail-3-mistakes.png',
            imageOnly: true
          }
        ]
      },
      {
        id: 'graphic-design',
        title: 'Graphic Design',
        shortTitle: 'Graphic Design',
        icon: Palette,
        tagline: 'Distinctive brand identities and visual assets that command prestige',
        explanation: 'Distinctive visual identities, marketing collateral, social carousel suites, and vector assets that command authority.',
        problem: 'Disjointed, amateur or generic graphic design that undermines customer confidence and weakens market perceived value.',
        deliverables: [
          'Comprehensive brand identity systems, typography rules, color schemes & design tokens',
          'High-converting social carousel decks, pitch decks & corporate marketing collateral',
          'Vector illustration suites, packaging design & print-ready corporate collateral'
        ],
        practicalValue: 'Builds an unmistakable, cohesive visual presence across every physical and digital touchpoint.',
        projects: [
          {
            id: 'ideal-property-logo-branding',
            title: 'Ideal Property Brand Identity & Logo Design',
            category: 'Graphic Design',
            heroImage: '/graphic-design-ideal-property-logo.png',
            imageOnly: true,
            aspectRatio: 'landscape',
            imageFit: 'contain'
          },
          {
            id: 'ideal-property-business-card',
            title: 'Ideal Property Real Estate Visiting Card Design',
            category: 'Graphic Design',
            heroImage: '/graphic-design-ideal-property-visiting-card.png',
            imageOnly: true,
            aspectRatio: 'landscape',
            imageFit: 'contain'
          },
          {
            id: 'lc-fitness-club-branding-banner',
            title: 'LC Fitness Club Brand Identity & Social Banner',
            category: 'Graphic Design',
            heroImage: '/graphic-design-lc-fitness-banner.png',
            imageOnly: true,
            aspectRatio: 'landscape',
            imageFit: 'contain'
          }
        ]
      }
    ]
  },

  /* ==================================================
     PARENT SERVICE 03: AI SOLUTIONS
     ================================================== */
  {
    id: 'ai-solutions',
    number: '03',
    label: 'PILLAR 03',
    title: 'AI SOLUTIONS',
    tagline: 'Intelligent Systems & Data Clarity',
    description: 'Automate repetitive work, deploy intelligent systems and turn business data into useful insights.',
    heroCopy: 'Automate repetitive work, build intelligent systems and turn business data into useful insights.',
    ctaText: 'Explore AI Solutions',
    accentColor: '#D80075',
    icon: Cpu,
    childServices: [
      {
        id: 'ai-automation',
        title: 'AI Automation',
        shortTitle: 'AI Automation',
        icon: Zap,
        tagline: 'Connect disparate apps and automate routine operational workflows',
        explanation: 'Connect disconnected business tools and automate repetitive operational workflows on autopilot.',
        problem: 'Valuable employee hours lost every week to copy-pasting customer data, manual invoice routing, and slow lead handoffs.',
        deliverables: [
          'Cross-application automation connecting CRM, payment gateways, accounting & email',
          'Intelligent lead qualification, instant alerts & automatic task distribution',
          'Document OCR parsing, automated contract drafting & database sync pipelines'
        ],
        practicalValue: 'Reduces operational overhead by up to 60%, eliminates manual human error, and allows your team to focus on revenue-generating work.',
        projects: [
          {
            id: 'automated-lead-crm-engine',
            title: 'End-to-End Client Onboarding & Invoicing Pipeline',
            client: 'Apex Corporate Advisory',
            category: 'AI Automation',
            heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
            previewBadge: '80+ Hours Saved / Mo',
            keyPoints: [
              'Zero-touch pipeline connecting web inquiries directly to CRM, Slack notifications, and calendar bookings',
              'Automated invoice generation, payment reconciliation, and QuickBooks ledger syncing',
              'Triggered client onboarding sequences including contract signature requests via DocuSign'
            ],
            tags: ['Make.com', 'Zapier', 'QuickBooks API', 'Webhook Architecture'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'A boutique corporate tax & legal firm was spending 25+ hours each week manually keying client data across three disparate software tools.',
              challenge: 'Inquiries were taking 24 hours to receive initial proposals, causing hot prospects to look at competing advisory firms.',
              solution: 'Built a resilient multi-stage automation architecture using webhooks, Make.com, and API connectors that triggers immediately upon form submission.',
              results: [
                'Reduced onboarding processing time from 2 days to under 4 minutes',
                'Saved over 85 hours of billable administrative labor each month',
                'Client contract signing speed increased by 300%'
              ],
              techStack: ['Make.com', 'Zapier', 'Webhooks', 'Slack Bot API', 'DocuSign API']
            }
          },
          {
            id: 'ecommerce-inventory-order-automation',
            title: 'Multi-Channel Inventory Sync & Order Fulfillment',
            client: 'LuxeLiving Home Decor',
            category: 'AI Automation',
            heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
            previewBadge: 'Zero Stockouts',
            keyPoints: [
              'Real-time automated inventory reconciliation across Shopify, Amazon, and warehouse ERP',
              'Automated courier routing selecting the lowest shipping rate and fastest delivery SLA',
              'Predictive low-stock alerts sent to procurement managers before items sell out'
            ],
            tags: ['ERP Sync', 'Shiprocket API', 'Shopify Flow', 'Error Logging'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'A home decor retailer selling on both Shopify and Amazon was struggling with stock discrepancies that led to cancellations and seller penalties.',
              challenge: 'Stock numbers were updated manually at the end of each business day, leading to overselling during seasonal flash sales.',
              solution: 'Engineered an event-driven webhook pipeline that instantly locks inventory across all marketplaces when an order is placed.',
              results: [
                'Completely eliminated stockouts and order cancellation penalties',
                'Reduced logistics shipping costs by 18% via automated courier rate selection',
                'Processed over 35,000 orders without a single sync failure'
              ],
              techStack: ['Node.js Microservices', 'Shopify Webhooks', 'Amazon SP-API']
            }
          }
        ]
      },
      {
        id: 'ai-agents',
        title: 'AI Agents',
        shortTitle: 'AI Agents',
        icon: Bot,
        tagline: 'Autonomous intelligent agents that work 24/7 across chat and voice',
        explanation: 'Intelligent conversational assistants deployed to handle customer inquiries, answer questions, and schedule meetings 24/7.',
        problem: 'Delayed responses to customer inquiries outside business hours causing lost revenue and frustrating prospects.',
        deliverables: [
          'Domain-trained conversational LLM agents grounded in your private company knowledge base',
          'Instant 24/7 WhatsApp, web chat, and voice triage with automatic appointment scheduling',
          'Autonomous ticket routing, CRM lead qualification, and sentiment-aware human escalations'
        ],
        practicalValue: 'Engages prospects immediately at 2 AM as effectively as 2 PM, ensuring no high-intent lead ever falls through the cracks.',
        projects: [
          {
            id: 'whatsapp-autonomous-booking-agent',
            title: '24/7 WhatsApp AI Concierge & Consultation Agent',
            client: 'Zenith Aesthetic Clinics',
            category: 'AI Agents',
            heroImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1000&q=80',
            previewBadge: '24/7 Instant Responses',
            keyPoints: [
              'Fine-tuned LLM conversational agent that answers clinical queries and assesses treatment suitability',
              'Seamless Google Calendar & clinic management software integration for live booking',
              'Smooth human handoff if patient presents complex medical questions or urgent cases'
            ],
            tags: ['WhatsApp Cloud API', 'OpenAI / Claude', 'RAG Knowledge Base', 'Calendar Booking'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'Zenith Clinics receives hundreds of inquiries daily on WhatsApp regarding skin treatments, prices, and doctor availability.',
              challenge: 'Front-desk staff could not handle peak evening inquiry volume, resulting in slow reply times and missed patient appointments.',
              solution: 'Deployed a custom-trained AI Agent grounded on the clinic’s exact treatment protocols, pricing sheets, and doctor schedules with WhatsApp Business API.',
              results: [
                'Over 72% of all appointments booked autonomously with zero human intervention',
                'Average inquiry response time dropped from 3 hours to 4 seconds',
                'Generated ₹18L in additional after-hours consultation bookings in 90 days'
              ],
              techStack: ['OpenAI GPT-4o', 'LangChain', 'WhatsApp Business API', 'Pinecone Vector DB']
            }
          },
          {
            id: 'b2b-customer-support-agent',
            title: 'Autonomous Technical Support & Ticket Resolution Agent',
            client: 'CloudStack SaaS Platform',
            category: 'AI Agents',
            heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
            previewBadge: '64% One-Touch Resolution',
            keyPoints: [
              'Trained on 500+ documentation articles, API specs, and resolved support tickets',
              'Accurately troubleshoots developer code snippets, webhook errors, and account billing',
              'Generates contextual summary notes for support engineers when escalating tickets'
            ],
            tags: ['RAG Pipeline', 'Vector Database', 'Zendesk Integration', 'Autonomous Resolution'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'A developer-focused B2B SaaS platform needed to provide round-the-clock technical support to global users without scaling a 24-man support team.',
              challenge: 'Common recurring questions regarding API limits and authentication were overwhelming tier-1 support engineers.',
              solution: 'Created an intelligent retrieval-augmented generation (RAG) agent integrated into their in-app chat widget and Zendesk ticket queue.',
              results: [
                'Autonomous resolution of 64% of inbound support tickets without human involvement',
                'Customer satisfaction (CSAT) rating jumped from 84% to 96%',
                'Tier-1 engineering ticket backlog reduced by 78%'
              ],
              techStack: ['Anthropic Claude', 'FastAPI', 'Qdrant Vector DB', 'Zendesk App Framework']
            }
          }
        ]
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics',
        shortTitle: 'Data Analytics',
        icon: BarChart3,
        tagline: 'Transform raw fragmented data into actionable revenue clarity',
        explanation: 'Turn fragmented records into clear, actionable business dashboards and strategic insights.',
        problem: 'Flying blind with disconnected spreadsheets and guessing which marketing channels, services, or products actually generate profit.',
        deliverables: [
          'Unified business intelligence dashboards combining marketing, sales, and financial records',
          'Multi-touch customer attribution tracking uncovering the true path to purchase',
          'Executive KPI scorecards and automated weekly digest reports delivered straight to leadership'
        ],
        practicalValue: 'Empowers company leadership to make confident, aggressive business moves based on verified numbers rather than gut feel.',
        projects: [
          {
            id: 'executive-revenue-attribution-bi',
            title: 'Unified Executive Revenue & Attribution Dashboard',
            client: 'OmniTrade Distribution',
            category: 'Data Analytics',
            heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
            previewBadge: 'Real-Time Insights',
            keyPoints: [
              'Consolidated data warehouse combining Shopify, Amazon, Meta Ads, and ERP finances',
              'Real-time gross margin and net contribution calculation per SKU and customer cohort',
              'Automated Monday morning executive summary email sent to board members'
            ],
            tags: ['Power BI', 'Google BigQuery', 'SQL Pipelines', 'Cohort Analysis'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'OmniTrade operates an omnichannel consumer brand with annual revenue of ₹30Cr. They had data scattered across 6 separate tools.',
              challenge: 'Leadership could only review financial performance 20 days after month-end, making agile ad budget allocation impossible.',
              solution: 'Built an automated data pipeline into Google BigQuery feeding an interactive, live Power BI executive command center.',
              results: [
                'Cut executive decision-making latency from 20 days to real-time daily insights',
                'Identified and discontinued 14 unprofitable SKUs, boosting overall net margin by 3.8%',
                'Saved 30+ hours of manual spreadsheet compilation every week'
              ],
              techStack: ['Google BigQuery', 'Power BI', 'Fivetran', 'dbt Data Modeling']
            }
          },
          {
            id: 'customer-churn-retention-analytics',
            title: 'Predictive Customer Retention & LTV Optimization',
            client: 'FitnessPro Subscription App',
            category: 'Data Analytics',
            heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
            previewBadge: '22% Churn Reduction',
            keyPoints: [
              'Machine learning classification detecting subscription churn risk 14 days in advance',
              'Automated retention re-engagement triggers sent to at-risk app subscribers',
              'Interactive cohort retention heatmap analyzing 12-month customer lifetime value'
            ],
            tags: ['Predictive ML', 'Mixpanel', 'Cohort Retention', 'LTV Modeling'],
            liveDemoUrl: '/contact',
            detailInfo: {
              overview: 'A digital fitness subscription platform with 80,000 monthly active users wanted to combat early subscriber drop-off.',
              challenge: 'Subscribers were churning after month 2 without obvious warning signs, driving up blended acquisition costs.',
              solution: 'Implemented advanced event tracking in Mixpanel, modeled behavioral drop-off triggers, and automated personalized re-activation journeys.',
              results: [
                'Reduced monthly subscriber churn from 7.8% to 5.2%',
                'Increased average 12-month customer lifetime value (LTV) by 28%',
                'Re-engaged over 4,500 dormant users within the first trial period'
              ],
              techStack: ['Python', 'Mixpanel', 'Snowflake', 'Scikit-learn']
            }
          }
        ]
      }
    ]
  }
];

/* Helper queries */
export function getParentService(parentSlug) {
  return servicesData.find((p) => p.id === parentSlug);
}

export function getChildService(parentSlug, childSlug) {
  const parent = getParentService(parentSlug);
  if (!parent) return null;
  return parent.childServices.find((c) => c.id === childSlug);
}

export function getAllParentServices() {
  return servicesData;
}

// Alias export for backward compatibility
export const servicePillars = servicesData;
