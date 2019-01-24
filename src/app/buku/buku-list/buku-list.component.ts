import {Component, Input, OnInit} from '@angular/core';
import {Buku} from '../buku.model';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})
export class BukuListComponent implements OnInit {

  @Input() bukuParent: Buku[];
  totalQty: number;
  totalBuku: any;
  buku: any[];

  constructor() { }

  ngOnInit() {
  }

  deleteBuku(i) {
    this.bukuParent.splice(i, 1);
  }

  getTotal() {
    let total = 0;
    for (let i = 0; i < this.bukuParent.length; i++) {
      if (this.bukuParent[i].qty) {
        total += this.bukuParent[i].qty;
        this.totalQty = total;
      }
    }
    return total;
  }

  getBuku() {
    this.buku = [];
    for (let i = 0; i < this.bukuParent.length; i++) {
      if (this.bukuParent[i].namaBuku) {
        this.buku.push(this.bukuParent[i].namaBuku);
        this.totalBuku = this.buku;
      }
    }
    console.log(this.buku);
    return alert('Buku yang dipinjam adalah : ' + this.buku);
  }



}
