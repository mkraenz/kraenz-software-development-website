export const content = {
    title: "Kraenz Software Development",
    subtitle: "High Quality Web Development for you",
    subsubTitle: "Mirco Kraenz - available for freelance work",
    myName: "Mirco Kraenz",
    landingPageSecondaryButton: "LinkedIn",
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
        subheader: "Let's discuss on how I can support your project in a call.",
    },
    skills: {
        id: "skills",
        title: "Skills",
        subheader: "",
    },
    latestWork: {
        id: "projects",
        title: "Recent Projects",
        subheader: "",
        cards: [
            {
                title: "CoachHub",
                imgTitle: "CoachHub logo",
                imgAlt: "CoachHub logo",
                imgPath: "/latest-work/coachhub-logo.svg",
                role: "Fullstack Developer",
                description: `Coaching Platform connecting companies like Amazon and SoundCloud 
                    with Coaches for one-on-one online training sessions to increase employee 
                    engagement, skills, and happiness.`,
                externalLink: "https://coachhub.io/",
                internalLink: "/latest-work/coachhub",
                techStack: [], // TODO add to details page
                teamSize: "50-100 persons",
            },
            {
                title: "vestr",
                imgTitle: "vestr logo",
                imgAlt: "vestr logo",
                imgPath: "/latest-work/vestr-logo.png",
                role:
                    "Senior Backend Developer, Backend Developer and DevOps Engineer",
                description: `Swiss Fintech startup providing bank-integrated workflow 
                for Actively Managed Certificates with more than
                500 Million Euro managed via the platform.`,
                externalLink: "https://www.vestr.com/",
                internalLink: "/latest-work/vestr",
                techStack: [],
                teamSize: "10-20 persons",
            },
            {
                title: "Der Fursorger",
                imgTitle: "Fursorger in-game view",
                imgAlt: "Fursorger in-game view",
                imgPath: "/latest-work/fursorger-in-game.png",
                role:
                    "Product Owner, Fullstack Developer, DevOps, Marketing, Mentor",
                description: `Fantasy Puzzle & Logic Game. Developed by 2-person team.
                    Inspired by the Star Trek: Voyager episode "Caretaker".`,
                externalLink: "https://fursorger.now.sh/",
                internalLink: "/latest-work/fursorger",
                techStack: [],
                teamSize: "2 persons",
            },
            {
                title: "You are Awesome App! Daily Motivation Up!",
                imgTitle: "You are Awesome App! logo",
                imgAlt: "You are Awesome App! logo",
                imgPath: "/latest-work/awesome-app-logo.png",
                role: "Product Owner, Android Developer, DevOps, Marketing",
                description: `Community-driven motivational quotes for Android. 
                    Currently in Closed-Alpha testing on the Google Play Store.`,
                externalLink: "https://youareawesomeappmo.wixsite.com/awesome",
                internalLink: "/latest-work/you-are-awesome-app",
                techStack: [],
                teamSize: "1 person",
            },
            {
                title: "Parvenu",
                imgTitle: "Parvenu in-game view",
                imgAlt: "Parvenu in-game view",
                imgPath: "/latest-work/parvenu-in-game.png",
                role: "Product Owner, Developer, DevOps, Mentor",
                description: `Medieval economic simulation game prototype inspired by Patrician II. 
                    Predecessor of Der Fursorger`,
                externalLink: "https://prosingularity.github.io/parvenu/",
                internalLink: "/latest-work/parvenu",
                techStack: [],
                teamSize: "2 persons",
            },
        ],
    },
    footers: [
        {
            title: "Legal",
            description: [
                { href: "/imprint", title: "Imprint" },
                { href: "/imprint#privacy-policy", title: "Privacy policy" },
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
            { filename: "vestr-logo.png", owner: "vestr AG" },
            { filename: "awesome-app-logo.png", owner: "Mirco Kraenz" },
            { filename: "parvenu-in-game.png", owner: "Mirco Kraenz" },
            { filename: "fursorger-in-game.png", owner: "Mirco Kraenz" },
        ],
    },
};
