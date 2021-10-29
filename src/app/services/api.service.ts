import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GET_ALL_UNITS } from '../helper/rest.api.endpoints';


@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public getAllUnits(param: any): Observable<any> {
        return this.http.get(environment.BASE_URL + GET_ALL_UNITS + "?_page=" + param[0] + "&_limit=" + param[1]);
    }


}
