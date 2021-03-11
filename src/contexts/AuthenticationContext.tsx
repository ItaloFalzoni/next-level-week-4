import { createContext, ReactNode, useState } from 'react'

export interface UserDataProps {
  login: string,
  avatar_url: string,
  name?: string,
}

interface AuthenticationContextData {
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

  function handleSetUserData({ login, avatar_url, name }: UserDataProps) {
    setUserData({
      login: login,
      avatar_url: avatar_url,
      name: name
    })
  }

  function handleLogout() {
    setUserData(initialUserState)
  }

  return (
    <AuthenticationContext.Provider value={{
      userData,
      handleSetUserData,
      handleLogout,
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}