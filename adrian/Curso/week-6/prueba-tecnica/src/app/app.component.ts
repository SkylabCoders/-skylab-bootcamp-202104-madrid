/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-tecnica';

houses:Array<any> = [];
limitValue = 200;
url = `https://apidev.holapisos.com/es/api/node/inmuebles?page[limit]=32&page[offset]=0&sort[weight][path]=field_inmu_peso_orde&sort[weight][direction]=DESC&sort[relevancy][path]=relevancy&sort[relevancy][direction]=DESC&fields[node--inmuebles]=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_pobl,field_inmu_area_cons,field_inmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call`;
results:any

constructor(public httpService: HttpService) { }

ngOnInit() {
  this.updateFetch()
}


updateFetch() {
  this.httpService.fetchApi(this.url).subscribe((res:any) => {
    res.data.forEach((house:any) => {
      this.results = res;
      this.houses.push(house)
    });
  });
}

getNext() {
  if (this.results.links.next) {
    this.url = this.results.links.next.href;
  }
  this.updateFetch();
  
}

getPrevius() {
  if (this.results.links.prev) {
    this.url = this.results.links.prev.href;
    this.updateFetch();
  }
}
}
