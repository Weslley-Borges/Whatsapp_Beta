import { CommandsController } from "./CommandsController";
import { CommandsUsecase } from "./CommandsUsecase";

const commandsUsecase = new CommandsUsecase 
const commandsController = new CommandsController( commandsUsecase )

export { commandsUsecase, commandsController }