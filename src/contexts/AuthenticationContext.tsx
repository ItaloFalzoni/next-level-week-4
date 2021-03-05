import { createContext, ReactNode, useState } from 'react'

interface AuthenticationContextData {
  user: string,
  handleDefaultButton: (userParam: string) => void,
  handleGithubButton: () => void,
}

interface AuthenticationProviderProps {
  children: ReactNode,
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [user, setUser] = useState(null)

  function handleDefaultButton(userParam: string) {
    setUser(userParam)
    console.log('Default button clicked!')
  }

  function handleGithubButton() {
    console.log(user, 'Github button clicked!')
  }

  return (
    <AuthenticationContext.Provider value={{
      user,
      handleDefaultButton,
      handleGithubButton,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}