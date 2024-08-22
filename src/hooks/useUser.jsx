import { useContext } from "react";

import { usuariosContext } from "../contexts/UserContext";

export function useUser() {
    return useContext(usuariosContext)
}