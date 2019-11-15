import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';




const routes: Routes = [{
 
  path : 'about' , component : AboutComponent
},{
 
  path : 'footer' , component : FooterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
