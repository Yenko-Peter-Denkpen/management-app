import { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = AuthContext.Provider;

function AuthContextProvider({ children }) {
  const { success, setSuccess } = useState(false);
  const { error, setError } = useState(null);
  
  const { user, setUser } = useState(null);

  //login function
  const authLogin = async (email, password) => {
    
    await fetch("https://worrisome-hem-hen.cyclic.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
   
  };

  //signup function
  const authRegister = async (username, email, password) => {
    
    await fetch("https://worrisome-hem-hen.cyclic.app/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
   
  };
  
  //logout function
  const authLogout = () => {
    setSuccess(false);
    setUser(null);
  };
  return (
    <AuthProvider
      value={{
        success,
        error,
       
        user,
        authLogin,
        authRegister,
        authLogout,
      }}
    >
      {children}
    </AuthProvider>
  );

}

export { AuthContext, AuthContextProvider };
