import { spinner } from "@clack/prompts";

export default function setup(framework, style, apikey) {
    const s = spinner();

    s.start("Installing dashboardkitcore packages:");

    const { execSync } = require("child_process");
    let stdout = execSync("npm i @dashboardkit/core");

    s.stop("Installed dashboardkitcore packages");

    switch (framework) {
        case "nodejs":
            console.log("node!");
            break;
        case "nextjs":
            // code block
            break;
        case "yah":
            // code block
    }
}