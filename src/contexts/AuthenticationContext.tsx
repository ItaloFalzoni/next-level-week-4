import Cookies from 'js-cookie'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface UserDataProps {
  login: string,
  avatar_url: string,
  name?: string,
}

interface AuthenticationContextData {
  isAuthenticated: boolean,
  handleSetIsAuthenticated: () => void,
  userData: UserDataProps,
  handleSetUserData: ({ login, avatar_url, name }: UserDataProps) => void,
  handleLogout: () => void,
}

interface AuthenticationProviderProps {
  children: ReactNode,
  isAuthenticated: boolean
}

const initialUserState = {
  login: '',
  avatar_url: '',
  name: ''
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children, ...rest }: AuthenticationProviderProps) {
  const [userData, setUserData] = useState(initialUserState)
  const [isAuthenticated, setIsAuthenticated] = useState(rest.isAuthenticated ?? false)

  useEffect(() => {
    Cookies.set('isAuthenticated', String(isAuthenticated))
  }, [isAuthenticated])

  function handleSetIsAuthenticated() {
    setIsAuthenticated(true)
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
    setIsAuthenticated(false)
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