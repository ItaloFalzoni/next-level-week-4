import { createContext, ReactNode, useState } from 'react'

interface AuthenticationContextData {
  userLogin: string,
  avatarUrl: string,
  handleSetUserLogin: (userLogin: string) => void,
  handleSetAvatarUrl: (userAvatarUrl: string) => void,
  handleLogout: () => void,
}

interface AuthenticationProviderProps {
  children: ReactNode,
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [userLogin, setUserLogin] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  function handleSetUserLogin(userLogin: string) {
    setUserLogin(userLogin)
  }

  function handleSetAvatarUrl(userAvatarUrl: string) {
    setAvatarUrl(userAvatarUrl)
  }

  function handleLogout() {
    setUserLogin('')
    setAvatarUrl('')
  }

  return (
    <AuthenticationContext.Provider value={{
      userLogin,
      avatarUrl,
      handleSetUserLogin,
      handleSetAvatarUrl,
      handleLogout,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}