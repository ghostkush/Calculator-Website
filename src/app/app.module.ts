import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddformComponent } from './components/addform/addform.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { SubformComponent } from './components/subform/subform.component';
import { MulformComponent } from './components/mulform/mulform.component';
import { DivformComponent } from './components/divform/divform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddformComponent,
    MainbodyComponent,
    SubformComponent,
    MulformComponent,
    DivformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
