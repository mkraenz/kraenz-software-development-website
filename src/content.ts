export const content = {
  htmlMeta: {
    baseUrl: "https://kraenz.eu",
    title: "Mirco Kraenz - Full Stack Engineer - Available Now",
    description:
      "Looking for a Full Stack Engineer with 9+ years of industry experience to supplement your team? - Call Mirco Kraenz - Available for Contract Work",
    keywords:
      "full stack developer, full stack engineer, full stack entwickler, fintech, nodejs backend developer, typescript, Nodejs, fullstack, berlin typescript entwickler, typescript freelancer, typescript freiberufler, javascript, nestjs, software engineer, full stack engineer",
  },
  // for emails, see sendEmail.ts
  heading: "Awesomeness for your Web\u00A0App",
  subHeading: "Mirco Kraenz • Full Stack Engineer",
  subsubHeading: "Available for Contract Work",
  academicDegree: "M.Sc. Mathematics",
  landingPageSecondaryButton: "CV on LinkedIn",
  logo: {
    alt: "Logo of Kraenz Software Development",
    src: "/Kraenz-Software-Development-trimmed.png",
  },
  address: {
    name: "Mirco Kraenz",
    street: "Sterndamm 34",
    city: "Berlin",
    country: "Germany",
  },
  nav: {
    home: { label: "Home", href: "/" },
    projects: { label: "Projects", href: "#projects" },
    mission: { label: "Mission", href: "#mission" },
    services: { label: "Services", href: "#services" },
    contact: { label: "Contact", href: "#contact" },
    github: { label: "GitHub", href: "https://github.com/mkraenz/" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mkraenz/",
    },
    hamburger: {
      ariaLabelOpen: "Open navigation menu",
      ariaLabelClose: "Close navigation menu",
    },
    colorMode: {
      ariaLabel: "Toggle color mode",
    },
  },
  email: "software@kraenz.eu",
  contact: {
    id: "contact",
    title: "Contact",
    subheading: `Let's chat to find out how I can support you and your team.`,
    mailto: {
      // %0D%0A is an encoded line break
      href: "mailto:software@kraenz.eu?subject=Contact Request&body=Hi Mirco,%0D%0AMy name is YOUR_NAME.%0D%0AYour skills are a great fit for our team at YOUR_COMPANY_NAME.%0D%0ALets have a chat to discuss the details.%0D%0AMy phone number is YOUR_PHONE_NUMBER.%0D%0AThanks!",
      label: "Send an Email",
      description:
        "The easiest way to get in touch is by sending me an email. This helps avoid false positives during spam detection.",
      title: "Via Email",
    },
    form: {
      email: "Email address",
      name: "Name",
      company: "Company",
      message: "Message",
      submit: "Send",
      description:
        "Please provide your contact details below. I will get back to you within the next 48 hours. Please make sure to also check your spam folder.",
      title: "Via Contact Form",
    },
  },
  services: {
    id: "services",
    title: "Services",
    subheading: "Freelance NodeJS Backend and React Frontend Development ",
    description: `Looking for a Senior Fullstack Engineer with 9+ years of experience in the industry to supplement your team?`,
    description2: `I have successfully written integrations with complex 3rd-party banking systems for Vestr where one mistake would have cost millions of Euro, kickstarted and scaled projects from scratch that reaches enterprise customers as for LiveEO's EUDR compliance solutions TradeAware built on top of AWS, as well as developed and maintained mobile apps with several thousand downloads with GIFTD.`,
    description3: `I have experienced the power of great DevOps and, what I call, the 'heart of agile, lean, and devops' in action. For me, this is driven by values of Tangible Customer Value, System Thinking, Team Work, Openness, Courage, Ownership, and finally a desire to create a better and more just world. I am continuously helping teams to improve their workflows, and tools including setup and improvement of CI/CD pipelines, localization workflows, code reviews, moderating retrospectives, and mentoring.`,
    cta: `Let's chat to find out how I can support you and your team.`,
    ctaButtonLabel: `Contact Now`,
    technologies: {
      heading: "Technologies",
      label:
        "The following is an incomplete list of technologies I have worked with in the past:",
      techs: [
        "TypeScript",
        "JavaScript",
        "NodeJS",
        "NestJS",
        "Express",
        "React",
        "Nextjs",
        "Chakra UI",
        "Mantine UI",
        "Material UI",
        "HTML 5",
        "Semantic & Accessible HTML",
        "CSS",
        "React Native",
        "Expo",
        "React Native Paper",
        "Redux",
        "React Context",
        "Tanstack React Query",
        "MongoDB",
        "PostgreSQL",
        "PostGIS",
        "Firebase",
        "Contentful CMS",
        "Lokalise",
        "i18next",
        "RevenueCat",
        "HubSpot",
        "Mixpanel",
        "Redis",
        "RabbitMQ",
        "Kafka",
        "AWS Lambda",
        "AWS S3",
        "AWS RDS",
        "AWS EC2",
        "AWS App Runner",
        "AWS Cloudwatch",
        "AWS GuardDuty",
        "AWS EventBridge",
        "Gitlab CI",
        "GitHub Actions",
        "Terraform",
        "Pulumi",
        "Serverless Framework",
        "AWS SAM",
        "AwS CloudFormation",
        "Docker",
        "Kubernetes",
        "Bash",
        "SurveyJS",
        "Mapbox",
        "Nx",
        "Mono repo",
        "Netlify",
        "Auth0",
        "JWT",
        "OAuth2.0",
        "OpenID Connect OIDC",
        "Passport.js",
        "Domain-Driven Design",
        "Event Sourcing",
        "Command Query Segregation CQRS",
        "Event-Driven Architecture",
        "GraphQL",
        "REST",
        "Cypress",
        "Playwright",
        "Jest",
        "Chai & Mocha",
        "Svelte",
        "Sentry",
        "SocketIO & Websockets",
        "LauchDarkly",
        "Heroku",
        "Platform.sh",
        "Nylas",
        "Vonage",
        "ElasticSearch",
      ],
    },
    strengths: [
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "NodeJS", link: "https://nodejs.org/en/" },
      { name: "NestJS", link: "https://nestjs.com/" },
      { name: "React", link: "https://reactjs.org/" },
      { name: "Material UI", link: "https://material-ui.com/" },
      { name: "Redux", link: "https://redux.js.org/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
    ],
  },
  latestWork: {
    id: "projects",
    title: "Recent Projects",
    subheading: "",
    role: "Role: ",
    teamsize: "Team: ",
    cards: [
      {
        title: "LiveEO ",
        imgAlt: "LiveEO logo",
        imgPath: "/latest-work/liveeo-min.png",
        role: "Freelance Full Stack Engineer, DevOps, Architect",
        description: `Supply Chain Compliance solution "TradeAware" help businesses implement the EU Deforestation Regulation to protect our world's forests and biodiversity.`,
        externalLink: "https://www.live-eo.com/product/tradeaware",
        internalLink: "/recent-projects/liveeo",
        techStack: [], // TODO add details page
        teamSize: "50-150 people",
      },
      {
        title: "GIFTD",
        imgAlt: "GIFTD logo",
        imgPath: "/latest-work/giftd.png",
        role: "Freelance React Native Developer, Serverless Engineer",
        description:
          "Green Tech Startup for gifting apparel and clothing, eliminating leftover stock, and thereby helping on our way to a zero-waste economy.",
        externalLink: "https://www.giftd.app/",
        internalLink: "/recent-projects/giftd",
        techStack: [], // TODO add details page
        teamSize: "5-10 people",
      },
      {
        title: "miralytik healthcare consulting",
        imgAlt: "miralytik logo",
        imgPath: "/latest-work/miralytik.svg",
        role: "Freelance Backend Developer",
        description: `Healthcare consulting and benchmarking platform for hospitals and medical professionals.`,
        externalLink: "https://www.miralytik.de/",
        internalLink: "/recent-projects/coachhub",
        techStack: ["NestJS", "GraphQL", "Svelte", "Agile", "Lean", "Kanban"], // TODO add details page
        teamSize: "20-50 people",
      },
      {
        title: "My Little Bubble Tea Shop",
        imgAlt: "Screenshot of My Little Bubble Tea Shop",
        imgPath: "/latest-work/bubble-tea-2.png",
        role: "Game Developer, Designer",
        description:
          "HTML 5 Game where you manage your own little Bubble Tea Shop for Desktop and Mobile. Entry to Glamjam 2025. Written purely in Svelte, HTML and CSS.",
        externalLink: "https://mkraenz.itch.io/my-little-bubble-tea-shop",
        internalLink: "/recent-projects/my-little-bubble-tea-shop",
        teamSize: "1 person",
        techStack: ["Svelte", "HTML 5", "CSS", "CSS Animations"],
      },
      {
        title: "Daily Questions",
        imgAlt: "Daily Questions logo",
        imgPath: "/latest-work/daily-questions.png",
        role: "Product Manager, React Native Developer",
        description: `Self-improvement app following leadership coach Marshall Goldsmith's Daily Questions from his book Triggers. Available on Google Play Store.`,
        externalLink:
          "https://play.google.com/store/apps/details?id=eu.kraenz.dailyquestions",
        internalLink: "/recent-projects/daily-questions",
        techStack: [
          "ReactNative",
          "Expo",
          "Android",
          "Material Design",
          "Redux",
        ],
        teamSize: "1 person",
      },
      {
        title: "CoachHub",
        imgAlt: "CoachHub logo",
        imgPath: "/latest-work/coachhub.svg",
        role: "Fullstack Developer",
        description: `Coaching Platform connecting companies like Amazon and SoundCloud 
                    with Coaches for one-on-one online training sessions to increase employee 
                    engagement, skills, and happiness.`,
        externalLink: "https://coachhub.io/",
        internalLink: "/recent-projects/coachhub",
        techStack: [
          "NestJS",
          "React",
          "Redux",
          "Material UI",
          "Agile",
          "Kanban",
          "PostgreSQL",
          "Redis",
        ],
        teamSize: "50-100 people",
      },
      {
        title: "TypeScript Teatime",
        imgAlt: "TypeScript Teatime logo",
        imgPath: "/latest-work/typescriptteatime.png",
        role: "Streamer, Host, Software Developer",
        description: `My weekly stream on software development in TypeScript, about infrastructure including AWS, game development, and more.`,
        externalLink: "https://www.twitch.tv/typescriptteatime",
        internalLink: "/recent-projects/typescriptteatime",
        techStack: [],
        teamSize: "1 person",
      },
      {
        title: "vestr",
        imgAlt: "vestr logo",
        imgPath: "/latest-work/vestr.svg",
        imgFilterIfDarkMode: true,
        role: "Senior Backend Developer, Backend Developer and DevOps Engineer",
        description: `Swiss Fintech startup providing bank-integrated workflow 
                for Actively Managed Certificates with more than
                500 Million Euro managed via the platform.`,
        externalLink: "https://www.vestr.com/",
        internalLink: "/recent-projects/vestr",
        techStack: [],
        teamSize: "10-20 people",
      },
      {
        title: "You are Awesome App! Daily Motivation Up!",
        imgAlt: "You are Awesome App! logo",
        imgPath: "/latest-work/awesome-app.png",
        role: "Product Manager, React Native Developer, DevOps, Marketing",
        description: `Community-driven motivational quotes for Android and IPhone. 
                    Available on the Google Play Store.`,
        externalLink:
          "https://play.google.com/store/apps/details?id=eu.kraenz.youareawesomeapp",
        internalLink: "/recent-projects/you-are-awesome-app",
        techStack: [],
        teamSize: "1 person",
      },
      {
        title: "Der Fürsorger",
        imgAlt: "Fürsorger in-game view",
        imgPath: "/latest-work/fursorger-in-game.png",
        role: "Product Manager, Fullstack Developer, DevOps, Marketing, Mentor",
        description: `Fantasy Puzzle & Logic Game. Developed by 2-persons team.
                    Inspired by the Star Trek: Voyager episode "Caretaker".`,
        externalLink: "https://fursorger.now.sh/",
        internalLink: "/recent-projects/fursorger",
        techStack: ["TypeScript", "JavaScript", "Phaser3", "ZEIT Now", "HTML5"],
        teamSize: "2 persons",
      },
      {
        title: "Parvenu",
        imgAlt: "Parvenu in-game view",
        imgPath: "/latest-work/parvenu-in-game.png",
        role: "Product Manager, Developer, DevOps, Mentor",
        description: `Medieval economic simulation game prototype inspired by Patrician II. 
                    Predecessor of Der Fursorger`,
        externalLink: "https://mkraenz.github.io/parvenu/",
        internalLink: "/recent-projects/parvenu",
        techStack: [],
        teamSize: "2 persons",
      },
      {
        title: "Flappy Fly",
        imgAlt: "Flappy Fly in-game view",
        imgPath: "/latest-work/flappy-fly-in-game.png",
        role: "Product Manager, Frontend Developer",
        description: `Open-source clone of 2013's viral game Flappy Bird developed by Dong Nguyen. 
                Created fully with publicly licensed assets.`,
        externalLink: "https://mkraenz.github.io/flappy-fly/",
        internalLink: "/recent-projects/flappy-fly",
        techStack: ["TypeScript", "JavaScript", "Phaser3", "HTML5"],
        teamSize: "1 person",
      },
    ],
  },
  footer: {
    imprint: {
      label: "Imprint",
      href: "/imprint",
    },
    privacy: {
      label: "Privacy Policy",
      href: "/imprint#privacy-policy",
    },
    copyright: "Copyright © Mirco Kraenz 2025",
  },
  thankyou: {
    heading: "Thank you for your request!",
    description:
      "I will get back to you within the next 24 hours. A confirmation email has been sent to you. Please make sure to also check your spam folder. Stay tuned!",
    backToHomeButton: "Back to Home",
    meta: {
      title: "Thank you!",
      description: "Thank you for reaching out to Mirco Kraenz",
    },
  },
  notFound: {
    backToHomeButton: "Back to Home",
    title: "404 Page Not Found",
  },
  privacyPolicy: {
    id: "privacy-policy",
  },
  imprint: {
    canonicalTag: "https://kraenz.eu/imprint",
    images: [
      { filename: "liveeo-white-text.svg", owner: "LiveEO GmbH" },
      { filename: "liveeo-black-text.svg", owner: "LiveEO GmbH" },
      { filename: "giftd.png", owner: "GIFTD GmbH" },
      { filename: "coachhub-logo.svg", owner: "CoachHub GmbH" },
      { filename: "vestr.svg", owner: "vestr AG" },
      { filename: "awesome-app-logo.png", owner: "Mirco Kraenz" },
      { filename: "parvenu-in-game.png", owner: "Mirco Kraenz" },
      { filename: "fursorger-in-game.png", owner: "Mirco Kraenz" },
      { filename: "flappy-fly-in-game.png", owner: "Mirco Kraenz" },
    ],
  },
  meta: {
    homeCanonicalTag: "https://kraenz.com/",
    keywords:
      "full stack developer, full stack entwickler, fintech, nodejs backend developer, typescript, Nodejs, fullstack, berlin typescript entwickler, typescript freelancer, typescript freiberufler, deutschland",
    description:
      "Awesomeness for your Web App - Mirco Kraenz - Freelance Full Stack Developer - Now Available",
    jsonld: {
      home: {
        "@type": "Person",
        name: "Mirco Kraenz",
        image: "https://kraenz.eu/logo/profile.jpg",
        description:
          "Mirco Kraenz is a German Full Stack Engineer. He considers himself a System Thinker. As a contractor, his primary business partners are Start-Ups in the categories Health and Green Technology. His core tech stack is TypeScript, NestJS, Nodejs, React, AWS Cloud, and DevOps. He graduated cum laude gaining the title of Master of Science Mathematics from his Alma Mater Technische Universität Berlin. He wrote his Master's thesis in Osaka, Japan supervised by Osaka University Professor Kenichi Ohshika and TU Berlin Professor Boris Springborn. He also streams Live Coding on Twitch under the name TypeScriptTeatime.",
        jobTitle: "Freelance Full Stack Engineer",
        alumniOf: "Technische Universität Berlin",
        owns: {
          "@type": "Organization",
          name: "Kraenz Software Development",
          email: "software@kraenz.eu",
          employee: "Mirco Kraenz",
          logo: "https://kraenz.eu/logo/Kraenz-Software-Development-1200x650.jpg",
        },
        familyName: "Kraenz",
        givenName: "Mirco",
        email: "software@kraenz.eu",
      },
    },
  },
};
