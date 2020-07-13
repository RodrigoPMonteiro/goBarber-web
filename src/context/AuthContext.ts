import { createContext } from 'react';

interface AuthContextDTO {
  name: string;
}

const AuthContex = createContext<AuthContextDTO>({} as AuthContextDTO);

export default AuthContex;
