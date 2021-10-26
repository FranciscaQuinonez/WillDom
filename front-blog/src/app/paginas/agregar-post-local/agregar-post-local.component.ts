import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Publicacion } from '../../servicios/modelos/publicacion.model';
import { CommonService } from '../../servicios/transversales/common.service';
import { AgregarPostLocalService } from './agregar-post-local.service';

@Component({
  selector: 'app-agregar-post-local',
  templateUrl: './agregar-post-local.component.html',
  styleUrls: ['./agregar-post-local.component.css'],
  providers: [AgregarPostLocalService]
})
export class AgregarPostLocalComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public publicacion: Publicacion;

  constructor(private addPostService: AgregarPostLocalService, private router: Router, private commonService: CommonService) {
    this.publicacion = new Publicacion();
  }

  ngOnInit() {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.publicacion = this.commonService.post_to_be_edited;
      console.log('La publicacion es ', this.publicacion.id);
    });
  }

  addPost() {
    if (this.publicacion.cabecera && this.publicacion.detalle) {
      if (this.publicacion.id) {
        //update no hay
      } else {

        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        this.publicacion.fechaHora = `${day}-${month}-${year}`;
        this.publicacion.clasePublicacion = "LOCAL";
        this.addPostService.addPostLocal(this.publicacion).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition();
        });
      }
    } else {
      alert('El titulo y la descripción son requeridos');
    }
  }

}
