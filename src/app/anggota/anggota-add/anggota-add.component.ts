import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnggotaModel} from '../anggota.model';
import {AnggotaService} from '../anggota.service';
import {ActivatedRoute} from '@angular/router';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-anggota-add',
  templateUrl: './anggota-add.component.html',
  styleUrls: ['./anggota-add.component.css'],
  providers: [AnggotaService]
})
export class AnggotaAddComponent implements OnInit {

  anggotaForm: FormGroup;



  constructor(private anggotaService: AnggotaService) {  }

  ngOnInit() {
    this.anggotaForm = new FormGroup({
      namaAnggota: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      alamatAnggota: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      nomor_ktp: new FormControl(null, [Validators.required])
    });
  }

  tambahAnggota() {
    const anggotaModel = new AnggotaModel();
    anggotaModel.nama = this.anggotaForm.get('namaAnggota').value;
    anggotaModel.alamat = this.anggotaForm.get('alamatAnggota').value;
    anggotaModel.nomor_ktp = this.anggotaForm.get('nomor_ktp').value;
    console.log(anggotaModel);

    this.anggotaService.addAnggota(anggotaModel).subscribe(
      data => {
        alert(data.nama + ' berhasil disimpan, dengan id ' + data.id);
      });
    this.anggotaForm.reset();
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }
    return null;
  }

}
