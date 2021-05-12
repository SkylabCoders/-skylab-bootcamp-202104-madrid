import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { MainService } from '../../services/main.service'
import { URL } from '../../models/url'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Meet de mighty heroes and villains of Marvel Universe'
  marvelList:Imarvel [] = []
  randomList:Imarvel [] = []
  topHeros:Imarvel [] = []
  character:any

  constructor (public route: Router, public mainSrv:MainService, private activatedRoute: ActivatedRoute) {}

  ngOnInit (): void {
    this.mainSrv.getAction('getList', (URL.apiURL + URL.CharactersURL)).subscribe((res:any) => {
      this.randomList = res.data.results.sort(() => Math.random() - 0.5)
      for (let i = 0; i < 4; i++) {
        this.topHeros.push(this.randomList[i])
        console.log(this.topHeros)
      }
    })
  }

  goCharacter (characters:any) {
    console.log(this.mainSrv.character)
    this.mainSrv.character = characters
    this.route.navigate(['details'])
  }
}
