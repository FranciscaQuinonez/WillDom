import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaPostService } from './lista-post.service';
import { Publicacion } from '../../servicios/modelos/publicacion.model';
import { CommonService } from '../../servicios/transversales/common.service';
import { AgregarPostLocalService } from '../agregar-post-local/agregar-post-local.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css'],
  providers: [ListaPostService, AgregarPostLocalService]
})
export class ListaPostComponent implements OnInit {

  /*
  postTotal: number;
  pagina: number;
  paginaAnterior: number;
  presentarPaginacion: boolean;
*/
  public publicaciones: any;

  constructor(private listaPostService: ListaPostService,
    private commonService: CommonService, private agregarPostLocalService: AgregarPostLocalService) {

  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

    this.commonService.postAddedRem_Observable.subscribe(res => {
      this.getAllPost();
    });

  }



  getAllPost() {

    /* descomentar cuando tenga el servicio del backend*/
    this.listaPostService.obtenerPost().subscribe(resultadoRemoto => {
      console.log('resultado ', resultadoRemoto);
      this.publicaciones = resultadoRemoto;
      const datos = this.agregarPostLocalService.getPostLocales();
      this.publicaciones.push(...datos);

    });

   //Comentar cuando tenga el servicio
   // this.publicacion = this.agregarPostLocalService.getPostLocales();




  }

  editPost(publicacion: Publicacion) {
    this.commonService.setPostToEdit(publicacion);
    console.log('la publicacion es ', publicacion);
  }

}
