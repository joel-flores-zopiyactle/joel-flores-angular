import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardProjectComponent } from './components/card-project/card-project.component';




@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    CardProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
    CardProjectComponent
  ]
})
export class SharedModule { }
