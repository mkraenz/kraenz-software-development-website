import { isProductionBrowser } from "../isProductionBrowser";

export const CONFIG = {
    levelsMetadataUri: isProductionBrowser
        ? "https://r7qyjnm5u0.execute-api.eu-central-1.amazonaws.com/prod/prod/levels"
        : "http://localhost:3140/prod/levels",
    emailJs: {
        serviceId: "default_service",
        templateId: "template_QsOH5koE",
        userId: "user_BsXgSjnZ05nGtNjMvebDF",
    },
    gameUrl: "https://prosingularity.github.io/fursorger/",
    googleAnalyticsId: "FAKE ID", // TODO create a new app
};

export interface IEmailJSTemplate {
    name: string;
    email: string;
    message: string;
}
