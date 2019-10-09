import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { EditpComponent } from './editp/editp.component';
import { EditeComponent } from './edite/edite.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'list/details/:id', component: DetailsComponent},
  {path: 'list/details/:id/edite/:id', component: EditeComponent },
  {path: 'list/details/:id/editp/:id', component: EditpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
