import { createContext, ReactNode, useState } from 'react'

export interface UserDataProps {
  login: string,
  avatar_url: string,
  name?: string,
}

interface AuthenticationContextData {
  isAuthenticated: boolean,
  handleSetIsAuthenticated: (param: boolean) => void,
  userData: UserDataProps,
  handleSetUserData: ({ login, avatar_url, name }: UserDataProps) => void,
  handleLogout: () => void,
}

interface AuthenticationProviderProps {
  children: ReactNode,
}

const initialUserState = {
  login: '',
  avatar_url: '',
  name: ''
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [userData, setUserData] = useState(initialUserState)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleSetIsAuthenticated(param: boolean) {
    setIsAuthenticated(param)
  }

  function handleSetUserData({ login, avatar_url, name }: UserDataProps) {
    setUserData({
      login,
      avatar_url,
      name
    })
  }

  function handleLogout() {
    setUserData({
      login: '',
      avatar_url: '',
      name: ''
    })
    handleSetIsAuthenticated(false)
  }

  return (
    <AuthenticationContext.Provider value={{
      isAuthenticated,
      handleSetIsAuthenticated,
      userData,
      handleSetUserData,
      handleLogout,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}