import { ReactNode, createContext, useState, useContext } from 'react';

interface Usuarios {
    id: number;
    nome: string;
    email: string;
    password: string;
}

interface UsuarioContextProps {
    usuario: Usuarios[];
    signin: () => void;
}

interface UsuariosProviderProps {
    children: ReactNode;
}

export const usuariosContext = createContext<UsuarioContextProps>({} as any);

export function UsuariosProvider({ children }: UsuariosProviderProps) {
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]); // Inicialize como um array vazio

    function signin(): void {
        const authorization = localStorage.getItem('Token');

        if (!authorization) {
            console.error('Usuário não autenticado');
            return;
        }

        // Simulação de autenticação: aqui você pode adicionar a lógica para autenticar o usuário
        console.log('Usuário autenticado');
    }

    return (
        <usuariosContext.Provider value={{usuario: usuarios , signin}}>
            {children}
        </usuariosContext.Provider>
    );
}
