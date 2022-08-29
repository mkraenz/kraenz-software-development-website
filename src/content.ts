export const content = {
    title: "Awesomeness for your Web\u00A0App",
    subtitle: "Kraenz Software Development",
    subsubTitle: "Freelance Full Stack Developer",
    myName: "Mirco Kraenz",
    academicDegree: "M.Sc. Mathematics",
    landingPageSecondaryButton: "CV on LinkedIn",
    logo: "/logo/Kraenz-Software-Development-trimmed.png",
    urls: {
        linkedIn: "https://www.linkedin.com/in/mirco-kraenz/",
        github: "https://github.com/proSingularity/",
    },
    email: "software@kraenz.eu",
    address: {
        name: "Mirco Kraenz",
        street: "Lindenallee 10",
        city: "17111 Nossendorf",
        country: "Germany",
    },
    contact: {
        id: "contact",
        title: "Contact",
        subheader:
            "Let's have a call to find out how I can support you with your project.",
    },
    services: {
        id: "services",
        title: "Services",
        subheader: "Freelance React Frontend and NodeJS Backend Development",
        description: `
            Your project needs a fullstack web developer to make your dream a reality?
            As a freelancer, I create the Frontend, Backend, and (React Native-) app for you. 
            Also as part of an existing development team.
        `,
        description2: `
            Additionally, thanks to multiyear experience in DevOps and automation, 
            we streamline workflows together and thereby increase overall productive team output.
        `,
        strengths: [
            {
                name: "TypeScript & JavaScript",
                link: "https://www.typescriptlang.org/",
            },
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
        subheader: "",
        cards: [
            {
                title: "miralytik healthcare consulting GmbH",
                imgTitle: "miralytik logo",
                imgAlt: "miralytik logo",
                imgPath: "/latest-work/miralytik.svg",
                role: "Freelance Backend Developer",
                description: `Healthcare consulting and benchmarking platform for hospitals and medical professionals.`,
                externalLink: "https://www.miralytik.de/",
                internalLink: "/latest-work/coachhub",
                techStack: [
                    "NestJS",
                    "GraphQL",
                    "Svelte",
                    "Agile",
                    "Lean",
                    "Kanban",
                ], // TODO add details page
                teamSize: "20-50 people",
            },
            {
                title: "Daily Questions",
                imgTitle: "Daily Questions logo",
                imgAlt: "Daily Questions logo",
                imgPath: "/latest-work/daily-questions.png",
                role: "Product Manager, React Native Developer",
                description: `Self-improvement app following leadership coach Marshall Goldsmith's Daily Questions from his book Triggers. Available on Google Play Store.`,
                externalLink:
                    "https://play.google.com/store/apps/details?id=eu.kraenz.dailyquestions",
                internalLink: "/latest-work/daily-questions",
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
                imgTitle: "CoachHub logo",
                imgAlt: "CoachHub logo",
                imgPath: "/latest-work/coachhub.svg",
                role: "Fullstack Developer",
                description: `Coaching Platform connecting companies like Amazon and SoundCloud 
                    with Coaches for one-on-one online training sessions to increase employee 
                    engagement, skills, and happiness.`,
                externalLink: "https://coachhub.io/",
                internalLink: "/latest-work/coachhub",
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
                imgTitle: "TypeScript Teatime logo",
                imgAlt: "TypeScript Teatime logo",
                imgPath: "/latest-work/typescriptteatime.png",
                role: "Streamer, Host, Software Developer",
                description: `My weekly stream on software development in TypeScript, about infrastructure including AWS, game development, and more.`,
                externalLink: "https://www.twitch.tv/typescriptteatime",
                internalLink: "/latest-work/typescriptteatime",
                techStack: [],
                teamSize: "1 person",
            },
            {
                title: "vestr",
                imgTitle: "vestr logo",
                imgAlt: "vestr logo",
                imgPath: "/latest-work/vestr.svg",
                role:
                    "Senior Backend Developer, Backend Developer and DevOps Engineer",
                description: `Swiss Fintech startup providing bank-integrated workflow 
                for Actively Managed Certificates with more than
                500 Million Euro managed via the platform.`,
                externalLink: "https://www.vestr.com/",
                internalLink: "/latest-work/vestr",
                techStack: [],
                teamSize: "10-20 people",
            },
            {
                title: "You are Awesome App! Daily Motivation Up!",
                imgTitle: "You are Awesome App! logo",
                imgAlt: "You are Awesome App! logo",
                imgPath: "/latest-work/awesome-app.png",
                role:
                    "Product Manager, React Native Developer, DevOps, Marketing",
                description: `Community-driven motivational quotes for Android and IPhone. 
                    Available on the Google Play Store.`,
                externalLink:
                    "https://play.google.com/store/apps/details?id=eu.kraenz.youareawesomeapp",
                internalLink: "/latest-work/you-are-awesome-app",
                techStack: [],
                teamSize: "1 person",
            },
            {
                title: "Der Fürsorger",
                imgTitle: "Fürsorger in-game view",
                imgAlt: "Fürsorger in-game view",
                imgPath: "/latest-work/fursorger-in-game.png",
                role:
                    "Product Manager, Fullstack Developer, DevOps, Marketing, Mentor",
                description: `Fantasy Puzzle & Logic Game. Developed by 2-persons team.
                    Inspired by the Star Trek: Voyager episode "Caretaker".`,
                externalLink: "https://fursorger.now.sh/",
                internalLink: "/latest-work/fursorger",
                techStack: [
                    "TypeScript",
                    "JavaScript",
                    "Phaser3",
                    "ZEIT Now",
                    "HTML5",
                ],
                teamSize: "2 persons",
            },
            {
                title: "Parvenu",
                imgTitle: "Parvenu in-game view",
                imgAlt: "Parvenu in-game view",
                imgPath: "/latest-work/parvenu-in-game.png",
                role: "Product Manager, Developer, DevOps, Mentor",
                description: `Medieval economic simulation game prototype inspired by Patrician II. 
                    Predecessor of Der Fursorger`,
                externalLink: "https://prosingularity.github.io/parvenu/",
                internalLink: "/latest-work/parvenu",
                techStack: [],
                teamSize: "2 persons",
            },
            {
                title: "Flappy Fly",
                imgTitle: "Flappy Fly in-game view",
                imgAlt: "Flappy Fly in-game view",
                imgPath: "/latest-work/flappy-fly-in-game.png",
                role: "Product Manager, Frontend Developer",
                description: `Open-source clone of 2013's viral game Flappy Bird developed by Dong Nguyen. 
                Created fully with publicly licensed assets.`,
                externalLink: "https://prosingularity.github.io/flappy-fly/",
                internalLink: "/latest-work/flappy-fly",
                techStack: ["TypeScript", "JavaScript", "Phaser3", "HTML5"],
                teamSize: "1 person",
            },
        ],
    },
    footers: [
        {
            title: "Legal",
            description: [
                { href: "/imprint", title: "Imprint" },
                { href: "/imprint#privacy-policy", title: "Privacy Policy" },
            ],
        },
        {
            title: "Resources",
            description: [
                { href: "https://phaser.io/phaser3", title: "Phaser 3" },
                {
                    href: "https://material-ui.com/",
                    title: "Material-UI",
                },
            ],
        },
    ],
    privacyPolicy: {
        id: "privacy-policy",
    },
    imprint: {
        images: [
            { filename: "coachhub-logo.svg", owner: "CoachHub GmbH" },
            { filename: "vestr.svg", owner: "vestr AG" },
            { filename: "awesome-app-logo.png", owner: "Mirco Kraenz" },
            { filename: "parvenu-in-game.png", owner: "Mirco Kraenz" },
            { filename: "fursorger-in-game.png", owner: "Mirco Kraenz" },
            { filename: "flappy-fly-in-game.png", owner: "Mirco Kraenz" },
        ],
    },
    meta: {
        keywords:
            "full stack developer, full stack entwickler, fintech, nodejs backend developer, typescript, Nodejs, fullstack, berlin typescript entwickler, typescript freelancer, typescript freiberufler",
        description:
            "Awesomeness for your Web App - Mirco Kraenz - Freelance Full Stack Developer - Now Available",
    },
};
