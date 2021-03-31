import {commandsController} from "./systems/SYS_Commands"
import {config} from "dotenv"
config()

export const envs = {
  commandsController,
  LaraToken: {
    WABrowserId: process.env.WABROWSER_ID,
    WASecretBundle: process.env.WASECRETE_BUNDLE,
    WAToken1: process.env.WATOKEN_1,
    WAToken2: process.env.WATOKEN_2
  },
  prefix: "!"
}

