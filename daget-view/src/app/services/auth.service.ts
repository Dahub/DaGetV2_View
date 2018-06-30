import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';

@Injectable()
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user: User = null;

  constructor() { 
    this.manager.getUser().then(user => {
      this.user = user;
    })
  }

 
}

export function getClientSettings(): UserManagerSettings{
  return {
    authority: 'http://localhost:63293/',
    client_id: 'dEx5f12sPLEN5S09',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type:"token",
    scope: 'daget:bankaccount:write daget:bankaccount:read daget:operation:write daget:operation:read',
    filterProtocolClaims: true,
    loadUserInfo: true
  }
}