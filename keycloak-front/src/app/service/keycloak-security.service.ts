import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import {KeycloakInstance} from 'keycloak-js';
declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc;

  constructor() { }

   init(){
     return new Promise((resolve,rejects)=>{
      console.log("walaa");
      this.kc=new Keycloak({
        url:"http://localhost:8080/auth",
        realm:"my-ecom-realm",
        clientId:"angularProductApp"
      });
      
       this.kc.init({
        //onLoad:'login-required'    
        onLoad:"check-sso"
      }).then((authenticated)=>{
        console.log(authenticated)
        console.log(this.kc.token)
        resolve({auth:authenticated,token:this.kc.token})
      });
      console.log(this.kc.token);
     }).catch(err=>{
       rejects(err);
     })
    
  }

}
