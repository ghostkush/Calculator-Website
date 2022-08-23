import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { AddformComponent } from './components/addform/addform.component';
import { SubformComponent } from './components/subform/subform.component';
import { MulformComponent } from './components/mulform/mulform.component';
import { DivformComponent } from './components/divform/divform.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:MainbodyComponent},
  {path:'add', component:AddformComponent},
  {path:'sub', component:SubformComponent},
  {path:'mul', component:MulformComponent},
  {path:'div', component:DivformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
