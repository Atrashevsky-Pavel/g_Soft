import { Component } from '@angular/core';
import {GetService} from './services/get.service';

interface Main {
  id: string;
  name: string;
  project_name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  list: Array<Main>;
  constructor(private getService: GetService) {
    this.getService.getData()
      .subscribe(xmlString => {
        const result = [];
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const arrItems = xmlDoc.getElementsByTagName('item');
        Object.keys(arrItems).forEach((key) => {
          result.push(
            {
              id: arrItems[key].getElementsByTagName('id')[0].innerHTML,
              name: arrItems[key].getElementsByTagName('name')[0].innerHTML,
              project_name: arrItems[key].getElementsByTagName('project_name')[0].innerHTML
            });
        });
        this.list = result;
      });
  }
}
