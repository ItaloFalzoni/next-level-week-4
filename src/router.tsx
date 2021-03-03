import { useContext } from 'react';

import Home from './pages/home'
import Leaderboard from './pages/leaderboard'

import { NavigationContext } from './contexts/NavigationContext'

export default function Router() {
  const { tabActive } = useContext(NavigationContext)

  return (
    tabActive == 'home' ? (
      <Home />
    ) : tabActive == 'leaderboard' && (
      <Leaderboard />
    )
  )
}