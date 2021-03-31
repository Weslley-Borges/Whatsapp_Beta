import { Message } from "venom-bot"
import { IResponseDTO } from "../../DTOs/GlobalDTO"
import { bot } from "../../main"
import { CommandsUsecase } from "./CommandsUsecase"

export class CommandsController {
  constructor (
    private commandsUsecase: CommandsUsecase
  ){}

  async handle(message: Message) {
    try {
      const result: IResponseDTO | null = await this.commandsUsecase.execute(message)

      if (result != null) {
        const chat = result.isPrivate ? message.sender.id : message.chat.id

        if (result.image) await bot.sendImage(chat, result.image)
        if (result.message) bot.sendText(chat, result.message)
      }
    } catch (err) {return { message: err.message || "Unexpected error." }} 
  }
}