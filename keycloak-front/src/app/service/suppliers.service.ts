import { KeycloakSecurityService } from './keycloak-security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient,private keyService:KeycloakSecurityService) {

   }

   public getsuppliers(){
     return this.http.get("http://localhost:8083/suppliers");
     //{headers:new HttpHeaders({Authorization:'Bearer '+this.keyService.kc.token})});
   }
}
