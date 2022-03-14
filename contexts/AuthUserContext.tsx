import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "hooks/useFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async (email: string, passwordOne: string) => {},
  createUserWithEmailAndPassword: async (email: string, passwordOne: string) => {},
  signOut: async () => {},
});

export function AuthUserProvider({ children }) {
  const auth: any = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);
