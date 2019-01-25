import { Component, OnInit } from '@angular/core';
import {AnggotaService} from '../anggota.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-anggota-edit',
  templateUrl: './anggota-edit.component.html',
  styleUrls: ['./anggota-edit.component.css'],
  providers: [AnggotaService]
})
export class AnggotaEditComponent implements OnInit {

  private idx: string;
  private sub: Subscription;

  constructor(private anggotaService: AnggotaService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.idx = params['id'];
    });

    this.anggotaForm = new FormGroup({
      namaAnggota: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      alamatAnggota: new FormControl(null, []),
      nomor_ktp: new FormControl(null, [Validators.required])
    });
  }

  anggotaForm: FormGroup;

  ngOnInit() {
    if (this.idx) {
      this.anggotaService.getAnggota(this.idx).subscribe(data => {
        console.log(data.nama);
        this.anggotaForm = new FormGroup({
          namaAnggota: new FormControl(data.nama, [Validators.required]),
          alamatAnggota: new FormControl(data.alamat, [Validators.required]),
          nomor_ktp: new FormControl(data.nomor_ktp, [Validators.required])
        });
      });
    }
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }
    return null;
  }

}
