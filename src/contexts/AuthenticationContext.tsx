import { createContext, ReactNode, useState } from 'react'

interface AuthenticationContextData {
  handleDefaultButton: (userParam: Array<string>) => void,
  handleGithubButton: () => void,
  handleLogout: () => void,
  userData: Array<string>,
}

interface AuthenticationProviderProps {
  children: ReactNode,
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [userData, setUserData] = useState([])

  function handleDefaultButton(userParam: Array<string>) {
    setUserData(userParam)
  }

  function handleGithubButton() {
    console.log(userData, 'Github button clicked!')
  }

  function handleLogout() {
    setUserData([])
  }

  return (
    <AuthenticationContext.Provider value={{
      userData,
      handleDefaultButton,
      handleGithubButton,
      handleLogout,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}