import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, APP_INITIALIZER, DoBootstrap, NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from"@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrdouctsComponent } from './prdoucts/prdoucts.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { KeycloakSecurityService } from './service/keycloak-security.service';
import { RequestInterceptorService } from './service/request-interceptor.service';

/*export function kcFactory(kcSecurity:KeycloakSecurityService){

  return  ()=>kcSecurity.init();

}*/
const securityService=new KeycloakSecurityService();

@NgModule({
  declarations: [
    AppComponent,
    PrdouctsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:KeycloakSecurityService,useValue:securityService},
   //{provide:APP_INITIALIZER, deps:[KeycloakSecurityService], useFactory:kcFactory, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true}
  ],
  entryComponents:[AppComponent]
 // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {

securityService.init()
.then(authenticated=>{

  console.log(authenticated);
  appRef.bootstrap(AppComponent)
}).catch(err=>{
    console.log(err);
})

  }
}
