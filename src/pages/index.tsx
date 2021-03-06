import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { NavigationProvider } from '../contexts/NavigationContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


import { LateralMenu } from '../components/LateralMenu';
import { AuthenticationContext, AuthenticationProvider } from '../contexts/AuthenticationContext';
import { useContext, useEffect } from 'react';
import Login from './login';
import Router from '../router';

export default function MainScreen({ routerProps }) {
  return (
    <NavigationProvider>
      <AuthenticationProvider>
        <Router {...routerProps} />
      </AuthenticationProvider>
    </NavigationProvider>
  )
}
