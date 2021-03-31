import { Message } from "venom-bot"
import {commandDOCS} from "../utils/commandDOCS"

export const execute = (message: Message, args: any) => {
  const requestedCommand = commandDOCS.find((command) => {return command.name == args[0]})

  if(requestedCommand != undefined) {
    if(requestedCommand?.about) {
      let message = 
      `*| SOBRE O COMANDO ${requestedCommand.name.toUpperCase()}*\n${requestedCommand.about}`
      return {message: message, isPrivate:true }
    }
    return {message:`Esse comando não possui um about`,isPrivate:false}
  } return {message: `Não achamos esse comando`,isPrivate:false}
}