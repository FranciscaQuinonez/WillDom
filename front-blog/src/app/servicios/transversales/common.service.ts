import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Publicacion } from '../modelos/publicacion.model';

@Injectable()
export class CommonService {

	public postAdded_Observable = new Subject();
	public postEdit_Observable = new Subject();
	public postAddedRem_Observable = new Subject();
	public post_to_be_edited;

	constructor(){
		this.post_to_be_edited = new Publicacion();
	}

	notifyPostEdit(){

		this.postEdit_Observable.next();
	}



	setPostToEdit(publicacion: Publicacion){
		this.post_to_be_edited = publicacion;
		this.notifyPostEdit();
	}

	notifyPostAddition(){
		this.postAdded_Observable.next();
	}

	notifyPostRemAddition(){
		this.postAddedRem_Observable.next();
	}

}
