import { ICommandDTO } from "../DTOs/GlobalDTO";

export const commandDOCS: Array<ICommandDTO> = [
  {
    name: "menu",
    help: "Mostra os comandos",
    about: "Sério, só mostra os comandos",
  },
  {
    name: "about",
    help: "Mostra informações sobre um comando.",
    about: 
    `Mostra um pequenos resumo sobre um comando\n`
    +`<b>Exemplo</b>:about links`,
    arguments: {
      fields: [
        {arrayPos: 0, especific: false, errorMessage: "Você precisa colocar o comando que quer verificar"}
      ]
    }
  }
]