import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BukuComponent } from './buku/buku.component';
import { BukuAddComponent } from './buku/buku-add/buku-add.component';
import { BukuListComponent } from './buku/buku-list/buku-list.component';
import { AnggotaListComponent } from './anggota/anggota-list/anggota-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AnggotaAddComponent } from './anggota/anggota-add/anggota-add.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { AnggotaEditComponent } from './anggota/anggota-edit/anggota-edit.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from './auth/auth.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuAddComponent,
    BukuListComponent,
    AnggotaListComponent,
    AnggotaAddComponent,
    AnggotaComponent,
    AnggotaEditComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
