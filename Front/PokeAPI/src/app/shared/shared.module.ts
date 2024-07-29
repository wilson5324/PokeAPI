import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalBannerComponent } from './components/principal-banner/principal-banner.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PrincipalBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    PrincipalBannerComponent
  ]
})
export class SharedModule { }
