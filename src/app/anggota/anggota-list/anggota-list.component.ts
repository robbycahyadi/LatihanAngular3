import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AnggotaService} from '../anggota.service';
import {AnggotaModel} from '../anggota.model';
import {Buku} from '../../buku/buku.model';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit, OnChanges {

  constructor(private  anggotaService: AnggotaService) { }

  @Input() childListen: string;
  @Output() kirimId = new EventEmitter<string>();
  anggotaList: AnggotaModel[];

  ngOnInit() {
    this.anggotaService.getListAnggota().subscribe(
      data => {
        this.anggotaList = data;
    });
  }

  onEdit(id: string) {
    this.kirimId.emit(id);
    console.log(id);
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
