export interface IResponseAttributes {
  user: string,
  message: string,
  isACumpriment: boolean,
  cumprimentsCount: number
}

export interface IChatRepository {
  verifyText(ctx: any): Promise<any>
}
export interface ICommandDTO {
  name: string
  help: string
  about?: string
  isA_AmbientEvent?: boolean
  isA_ADMCommand?: boolean
  arguments?: {
    fields: Array<{
      arrayPos: number
      especific: boolean
      value?: string
      errorMessage: string
    }>
  }
}

export interface IResponseDTO {
  status?: string
  message?: string
  isPrivate?: boolean
  hasMessage?: boolean
  data?: string
  image?: any
}

export interface IActivityDTO {
  title: string;
  description: string;
  dificulty: string;
}