import { Message } from "venom-bot"
import { envs } from "../envoriments"
import { bot } from "../main"
import { commandDOCS } from "../utils/commandDOCS"


export const execute = async (message: Message, args: []) => {
  let response = ""
  response +=
  '.⸺⸺⸺⸺⸺⸺⸺⸺\n'+
  '|     Lista de comandos\n'+
  '|\n'+
  '| BOT    : LaraStack\n'+
  '| Dono  : t.me/Weslley_Borges\n'+
  "'⸺⸺⸺⸺⸺⸺⸺⸺\n"
  commandDOCS.map((command) => {
    if (!command.isA_AmbientEvent && !command.isA_ADMCommand) {
      response += `*${envs.prefix}${command.name}* -> ${command.help}\n`
    }
  })
  return {isPrivate: false, message: `${response}${(await getADMCommands(message))}`}
}

async function getADMCommands(message: Message) {
  let ADMresponse = ""
  if (message.chat.isGroup) {
    const You_ADM = (await bot.getGroupAdmins(message.chatId)).find((adm) => {return String(adm.id) == message.sender.id})

    if(You_ADM != undefined) {
      const ADM_Commands = commandDOCS.filter(command => {return command.isA_ADMCommand == true})
      ADMresponse +=
      '.⸺⸺⸺⸺⸺⸺⸺⸺\n'+
      '|     Comandos de ADM\n'+
      "'⸺⸺⸺⸺⸺⸺⸺⸺\n"
      ADM_Commands.map(command => {
        ADMresponse += `*${envs.prefix}${command.name}* -> ${command.help}\n`
      })
    }
  }
  return ADMresponse
}