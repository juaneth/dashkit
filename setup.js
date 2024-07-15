#!/usr/bin/env node

import { spinner } from "@clack/prompts";

import * as prompts from "@clack/prompts";

import { execSync } from "child_process";

export default async function setup(framework, style, apikey) {
    const s = spinner();

    s.start("Installing @dashboardkit/core packages");

    try {
        execSync("npm i @dashboardkitjs/core");
    } catch {
        prompts.outro(`Error installing core package!`);

        process.exit();
    }

    s.stop("Installed @dashboardkit/core package");

    switch (framework) {
        case "nodejs":
            s.start("Installing @dashboardkit/nodejs package");

            // TODO add node package install and boilerplate setup

            s.stop("Installed @dashboardkit/nodejs packages");

            break;
        case "nextjs":
            // TODO add nextjs package install and boilerplate setup
            break;
        case "discordjs":
            // CARLO STUFF

            s.start("Installing @dashboardkit/nodejs package");

            // TODO add node package install and boilerplate setup

            s.stop("Installed @dashboardkit/nodejs packages");

            s.start("Installing @dashboardkit/discordjs package");

            // TODO add discordjs package and boilerplate setup

            s.stop("Installed @dashboardkit/discordjs packages");

            break;
    }

    prompts.outro("Thank you for installing dashboardkit, read the docs here: https://dashkit.juaneth.dev/docs")
}