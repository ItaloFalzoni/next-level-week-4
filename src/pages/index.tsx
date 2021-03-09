import { NavigationProvider } from '../contexts/NavigationContext';
import { AuthenticationProvider } from '../contexts/AuthenticationContext';

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
