import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AgregarPostLocalService } from '../agregar-post-local/agregar-post-local.service';
import { Publicacion } from '../../servicios/modelos/publicacion.model';
import { CommonService } from '../../servicios/transversales/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-post-remoto',
  templateUrl: './agregar-post-remoto.component.html',
  styleUrls: ['./agregar-post-remoto.component.css'],
  providers: [AgregarPostLocalService]
})
export class AgregarPostRemotoComponent implements OnInit {

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
        //no hay
      } else {
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        this.publicacion.fechaHora = `${day}-${month}-${year}`;
        this.publicacion.clasePublicacion = "REMOTO";

        this.addPostService.addPost(this.publicacion).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostRemAddition();
        });
      }
    } else {
      alert('El titulo y la descripción son requeridos');
    }
  }

}
