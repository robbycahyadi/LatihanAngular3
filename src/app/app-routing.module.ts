import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BukuComponent} from './buku/buku.component';
import {AnggotaListComponent} from './anggota/anggota-list/anggota-list.component';
import {AnggotaAddComponent} from './anggota/anggota-add/anggota-add.component';
import {AnggotaEditComponent} from './anggota/anggota-edit/anggota-edit.component';

const routes: Routes = [
  {path: 'buku', component: BukuComponent},
  {path: 'anggota', component: AnggotaListComponent},
  {path: 'anggota-add', component: AnggotaAddComponent},
  {path: 'anggota-edit/:id', component: AnggotaEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
