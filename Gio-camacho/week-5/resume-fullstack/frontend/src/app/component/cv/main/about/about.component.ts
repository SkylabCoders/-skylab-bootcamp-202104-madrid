import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutMe:any

  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  ngOnInit (): void {
    this.fetchInfo(environment.aboutUrl)
  }

  fetchInfo (url:string) {
    this.httpClient.get(url).subscribe(
      (res) => {
        this.aboutMe = res
      }
    )
  }
}
