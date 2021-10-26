import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion } from '../../servicios/modelos/publicacion.model';
import { Observable } from 'rxjs';

function getLocalStorage(): Storage {
	return localStorage;
}

@Injectable()
export class AgregarPostLocalService {

	constructor(private http: HttpClient) {

	}

	get localStorage(): Storage {
		return getLocalStorage();
	}

	addPost(publicacion: Publicacion) {
		return this.http.post('http://localhost:57628/api/Publicacion', {
      id: 0,
			cabecera : publicacion.cabecera,
			detalle : publicacion.detalle,
			fechaHora : publicacion.fechaHora,
			clasePublicacion : publicacion.clasePublicacion
		}, {responseType: 'text'}

		)


	}

	addPostLocal(publicacion: Publicacion) {
		return new Observable(Observable => {
			const datos = JSON.parse(this.localStorage.getItem('datos'));

			if (datos) {
				datos.push(publicacion);
				const jsonData = JSON.stringify(datos);
				this.localStorage.setItem('datos', jsonData);
			} else {
				const datos = [];
				datos.push(publicacion);
				const jsonData = JSON.stringify(datos);
				this.localStorage.setItem('datos', jsonData);
			}


			Observable.next();
		});

	}

	getPostLocales() {
		const datos = JSON.parse(this.localStorage.getItem('datos'));
		if (!datos) {
			return [];
		}
		return datos;
	}







}
