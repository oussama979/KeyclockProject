import { KeycloakSecurityService } from './service/keycloak-security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'keycloak-front';

  constructor(public kcService:KeycloakSecurityService ){

  }

  ngOnInit():void {

  }
  onLogout(){
    this.kcService.kc.logout(); 
  }
  onLogin(){
    this.kcService.kc.login(); 

  }

  onChangePassword(){
    this.kcService.kc.accountManagement(); 

  }
  isAppManager(){
    return this.kcService.kc.hasRealmRole('MANAGER');
  }
}
