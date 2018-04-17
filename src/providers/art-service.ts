import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ArtService {

	public API = 'http://localhost:8080';
	public ART_API = this.API + '/arts';

  constructor(public http: HttpClient) {
  }

  getTopArts(): Observable<any> {
  	console.log(this.API + '/top-arts')
  	return this.http.get(this.API + '/top-arts');
  }


}