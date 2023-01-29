import { createContext } from "react";

type ContextApp = {
    user?: UserApp
    setUser?: React.SetStateAction<any>
}

type UserApp = {
    id: number,
    name: string,
    email: string,
    token: string,
}

const context: ContextApp = {}

export const AuthContext = createContext(context);