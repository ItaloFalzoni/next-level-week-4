import { createContext, useState, ReactNode } from 'react'

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
    console.log('ainda vai')
    setTabActive('home')
    console.log('Foi')
  }

  function goToLeaderboard() {
    setTabActive('leaderboard')
  }


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