import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnggotaModel} from '../anggota.model';
import {AnggotaService} from '../anggota.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-anggota-add',
  templateUrl: './anggota-add.component.html',
  styleUrls: ['./anggota-add.component.css'],
  providers: [AnggotaService]
})
export class AnggotaAddComponent implements OnInit {

  anggotaForm: FormGroup;
  private idx: string;
  private sub: Subscription;
  parentTalk: string;


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
    } else {
      this.anggotaForm = new FormGroup({
        namaAnggota: new FormControl(null, [Validators.required, this.cekIsEmpty]),
        alamatAnggota: new FormControl(null, [Validators.required, this.cekIsEmpty]),
        nomor_ktp: new FormControl(null, [Validators.required])
      });
    }
  }

  tambahAnggota() {
    const anggotaModel = new AnggotaModel();
    anggotaModel.nama = this.anggotaForm.get('namaAnggota').value;
    anggotaModel.alamat = this.anggotaForm.get('alamatAnggota').value;
    anggotaModel.nomor_ktp = this.anggotaForm.get('nomor_ktp').value;
    if (this.idx) {
      anggotaModel.id = this.idx;
    }
    console.log(anggotaModel);
    this.anggotaService.addAnggota(anggotaModel).subscribe(
      data => {
        alert(data.nama + ' berhasil disimpan, dengan id ' + data.id);
        this.parentTalk = data.id;
      });
    this.anggotaForm.reset();
  }

  onDataEdit(id: string) {
    this.idx = id;
    this.ngOnInit();
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }
    return null;
  }

}
