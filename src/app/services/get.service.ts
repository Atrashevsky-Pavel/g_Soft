import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private url = 'https://api.busy-fly.com/public-api/v1/unit-model?filter%5Bproject_name%5D=BusyFly&fields=id,name&expand=project_name';
  getData(): Observable<string> {
    return  new Observable(observer => {
      fetch(this.url, {
        headers: {
          accept: 'application/xml'
        }
      })
        .then(response => response.text())
        .then(value => observer.next(value));
    });
  }
}
