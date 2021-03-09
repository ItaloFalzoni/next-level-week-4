import { createContext, ReactNode, useState } from 'react'

interface AuthenticationContextData {
  user: string,
  handleDefaultButton: (userParam: string) => void,
  handleGithubButton: () => void,
  handleLogout: () => void,
}

interface AuthenticationProviderProps {
  children: ReactNode,
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [user, setUser] = useState('')

  function handleDefaultButton(userParam: string) {
    setUser(userParam)
  }

  function handleGithubButton() {
    console.log(user, 'Github button clicked!')
  }

  function handleLogout() {
    setUser('')
  }

  return (
    <AuthenticationContext.Provider value={{
      user,
      handleDefaultButton,
      handleGithubButton,
      handleLogout,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}