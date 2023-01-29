import { createContext } from "react";
import { ContextApp } from "../interfaces/types";

const context: ContextApp = {
    state: {
        logged: false
    }
}

export const AuthContext = createContext(context);