import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BukuComponent} from './buku/buku.component';
import {AnggotaAddComponent} from './anggota/anggota-add/anggota-add.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
  {path: 'buku', component: BukuComponent},
  {path: 'anggota', component: AnggotaAddComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
