import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const STORAGE_KEY = 'local_post';

@Injectable()
export class ListaPostService {



	constructor(private http: HttpClient) {

	}

	obtenerPost() {

		return this.http.get('http://localhost:57628/api/Publicacion',{})

		//Aqui debe llamar al servicio


	}




}
