import { createContext, useState, ReactNode, useEffect } from 'react'

interface NavigationContextData {
  tabActive: string,
  goToHome: () => void,
  goToLeaderboard: () => void,
}

interface NavigationProviderProps {
  children: ReactNode,
}

export const NavigationContext = createContext({} as NavigationContextData)

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [tabActive, setTabActive] = useState('home')

  function goToHome() {
    setTabActive('home')
  }

  function goToLeaderboard() {
    setTabActive('leaderboard')
  }

  useEffect(() => {
    console.log(tabActive)
  }, [tabActive])

  return (
    <NavigationContext.Provider value={{
      tabActive,
      goToHome,
      goToLeaderboard,
    }}>
      {children}
    </NavigationContext.Provider>
  )
}