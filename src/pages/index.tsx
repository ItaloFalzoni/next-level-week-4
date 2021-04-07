import { GetServerSideProps } from 'next';

import { Router } from '../router';
import { NavigationProvider } from '../contexts/NavigationContext';
import { AuthenticationProvider } from '../contexts/AuthenticationContext';

interface MainProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  isAuthenticated: boolean
}

export default function MainScreen({ routerProps }, props: MainProps) {
  return (
    <NavigationProvider>
      <AuthenticationProvider isAuthenticated={props.isAuthenticated}>
        <Router {...routerProps} props={props} />
      </AuthenticationProvider>
    </NavigationProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, isLogged } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isLogged: isLogged
    }
  }
}