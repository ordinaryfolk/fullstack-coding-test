import { useState, useEffect } from "react";
import { useAuth } from "contexts/AuthUserContext";
import Login from "components/Login";
import { useRouter } from "next/router";

export const withAuthen = (Component) => () => {
  return (() => {
    const [isLoggined, setIsLoggined] = useState(false);
    const { authUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !authUser) {
        router.push("/");
        setIsLoggined(false);
      } else {
        setIsLoggined(true);
      }
    }, [authUser, loading]);

    if (isLoggined) {
      return <Component />;
    } else {
      return <Login />;
    }
  })();
};
