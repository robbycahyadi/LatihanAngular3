import { Component, OnInit } from '@angular/core';
import {AnggotaService} from '../anggota.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AnggotaModel} from '../anggota.model';

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

  ubahAnggota() {
    if (this.idx) {
      const anggotaModel = new AnggotaModel();
      anggotaModel.id = this.idx;
      anggotaModel.nama = this.anggotaForm.get('namaAnggota').value;
      anggotaModel.alamat = this.anggotaForm.get('alamatAnggota').value;
      anggotaModel.nomor_ktp = this.anggotaForm.get('nomor_ktp').value;
      console.log(anggotaModel);

      this.anggotaService.addAnggota(anggotaModel).subscribe(
        data => {
          alert(data.nama + ' berhasil diubah, dengan id ' + data.id);
        });
      this.anggotaForm.reset();
    }
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }
    return null;
  }

}
