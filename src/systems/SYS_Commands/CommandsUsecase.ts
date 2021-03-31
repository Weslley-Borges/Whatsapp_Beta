import { bot } from "../../main"
import { envs } from "../../envoriments"
import { ICommandDTO } from "../../DTOs/GlobalDTO"
import { commandDOCS } from "../../utils/commandDOCS"
import { getResponse } from "../../utils/messageDOCS"
import { Message } from "venom-bot"

export class CommandsUsecase {
  constructor (){}
  
  async execute(message: Message) {
    const args = message.body.slice(envs.prefix.length).split(" ")
    const commandName = args.shift()

    try {
      const command: ICommandDTO | undefined = commandDOCS
        .find((command) => {return command.name == commandName})

      if (command == undefined) return {message:getResponse("commandNotFound", commandName), isPrivate:false}
      if (await message.type != "private" && command.isA_ADMCommand) {
        
        const You_ADM = (await bot.getGroupAdmins(message.chatId)).find((adm) => {return String(adm.id) === message.sender.id})
        console.log("AAAAAAAAAAAAAAAAA")
        if (You_ADM == undefined) return {
          message:getResponse("youAreNot_ADM",[commandName]),
          isPrivate:false
        }
      }
      console.log("AAAAAAAAAAAAAAAAA")
      return this.executeCommand(message, args, command)
      
    } catch(e) {
      console.log(e)
      return {message:getResponse("commandError",[]), isPrivate:false}
    }
  }
  
  executeCommand(message: Message, args:Array<any>, command:ICommandDTO) {
    let result = {Valid: false, message: ""}

    if (command.arguments) {
      command.arguments.fields.forEach((field) => {
        result = (field.especific && (field.value != args[field.arrayPos])) || (args[field.arrayPos] == undefined)
          ? {Valid:false, message: result.message+`- ${field.errorMessage}\n`}
          : {Valid:true,  message: result.message}
      })

    } else result = !args[0] && args[0] != undefined
        ? {Valid:false, message:result.message+`- Essa função não precisa de parâmetros`}
        : {Valid:true, message: ""}
    
    console.log("BBBBBBBB")
    
    return result.Valid 
      ? require(`../../commands/${command.name}.ts`).execute(message, args)
      : {message: getResponse("argsError",[result.message, command.name]), isPrivate: false}
  }
}