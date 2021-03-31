import * as venom from "venom-bot"
import { envs } from "./envoriments"
let bot: venom.Whatsapp

venom
  .create(
    'Lara', null, null,
    {folderNameToken: 'tokens', headless: false}, envs.LaraToken
  )
  .then((client) => start(client))
  .catch((erro) => console.log(erro))

function start(client: venom.Whatsapp) {
  bot = client
  client.onMessage((message: venom.Message) => {
    if (message.body === 'Stack de programadores...') {
      client.sendText(message.from, "não tem bots ksksksks")
        .then((result) => console.log(message))
        .catch((erro) => console.error('Error when sending: ', erro))

    } else if (message.body[0] == envs.prefix) {
      envs.commandsController.handle(message)
    }
  })

}

export {venom, bot}