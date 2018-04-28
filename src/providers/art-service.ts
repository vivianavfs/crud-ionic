import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtService {

	private API = 'http://localhost:8080';
	private ART_API = this.API + '/arts';

	constructor(private http: HttpClient) {
	}

	getTopArts(): Observable<any> {
		return this.http.get(this.API + '/top-arts');
	}

	get(id: string) {
		return this.http.get(this.ART_API + '/' + id);
	}

	save(art: any): Observable<any> {
		console.log(art);
		let result: Observable<Object>;
		if (art['href']) {
			result = this.http.put(art.href, art);
		} else {
			result = this.http.post(this.ART_API, art)
		}
		return result.catch(error => Observable.throw(error));
	}

	remove(id: string) {
		return this.http.delete(this.ART_API + '/' + id);
	}


}