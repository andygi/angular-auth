interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'x6Hxip7VxRBRokjlM33PNYD2etfn3HUp',
  domain: 'gekode.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
