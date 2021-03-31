import { envs } from "../envoriments"

export function getResponse(stack: string, args: any) {
  const messageDOCS = [
    {stack: "youAreNot_ADM",message: "Você precisa ser ADM pra executar essa função!"},
    {
      stack: "commandError", 
      message: 
      "Vish, houve um erro aqui. Possíveis causas:\n- É sua primeira vez tentando usar o bot: Você tem que chamar o bot para uma conversa no privado e usar o comando /start\n- Ocorreu um erro desconhecido: Chame o desenvolvedor"
    },
    {
      stack: "argsError",
      message:`Encontramos os seguintes erros:\n${args[0]}\n\nUse o comando "${envs.prefix}about ${args[2]}" para aprender a usar esse comando.`
    },
    {stack: "commandNotFound", message: `Opa, parece que o comando "${args}" não foi encontrado :(`},
    {stack: "countryNotFound", message: "País não encontrado (tente usar o nome em inglês)"},
    {stack: "nothingFound", message: "Não encontramos nada, ou houve um erro"}
  ]

  const ResponseToSend = messageDOCS.find( (response: any) => { return response.stack == stack})
  return ResponseToSend?.message
}