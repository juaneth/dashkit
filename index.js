#!/usr/bin/env node

import * as prompts from "@clack/prompts";
import color from "picocolors";

import setup from "./setup.js";

async function main() {
  prompts.intro(
    `${color.bgCyan(color.black(" DashboardKit Initialisation "))}`
  );

  const framework = await prompts.select({
    message: "Your current framework:",
    initialValue: "nextjs",
    options: [
      { value: "nextjs", label: "Next.js" },
      {
        value: "nodejs",
        label: "Node.js",
        hint: "For use with any server application",
      },
      {
        value: "discordjs",
        label: "Discord.js",
        hint: "Sets you up with a template already built for discord bots",
      },
    ],
  });

  const style = await prompts.select({
    message: "Template style:",
    initialValue: "default",
    options: [
      {
        value: "default",
        label: "Default",
        hint: "Just a plain dark mode style",
      },
      {
        value: "light",
        label: "Light Mode",
        hint: "Eye-searing",
      },
      {
        value: "discord",
        label: "Discord style",
        hint: "Similar style to discord's UI",
      },
      {
        value: "none",
        label: "No template",
        hint: "Start from scratch to build your own components with the docs",
      },
    ],
  });

  const apikey = await prompts.text({
    message: "API Key:",
    placeholder: "Find at https://dashkit.juaneth.dev/dashboard?showkey=true",
    initialValue: "",
    /*validate(value) {
                        if (value.length === 0) return `Value required!`;
                        if (value.length !== 32) return `Invalide value!`;
                    },*/
  });

  setup(framework, style, apikey);
}

main().catch(console.error);
