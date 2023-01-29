export type ContextApp = {
    state: State
    login?: (name: string) => void
    logout?: () => void
}

export type State = {
    logged: boolean,
    name?: string,
}

export type Action = {
    type: string,
    payload?: {
        id: number,
        name: string
    }
}