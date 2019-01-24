import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Buku} from '../buku.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css']
})
export class BukuAddComponent implements OnInit {

  @Output() bukuAdd = new EventEmitter<Buku>();
  bukuForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.bukuForm = new FormGroup({
      isbn: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      namaBuku: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      qty: new FormControl(null, [Validators.required])
    });
  }

  pilihBuku() {
    const bukuModel = new Buku();
    bukuModel.isbn = this.bukuForm.get('isbn').value;
    bukuModel.namaBuku = this.bukuForm.get('namaBuku').value;
    bukuModel.qty = this.bukuForm.get('qty').value;
    console.log(bukuModel);
    this.bukuAdd.emit(bukuModel);
    this.bukuForm.reset();
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }return null;
  }

}
