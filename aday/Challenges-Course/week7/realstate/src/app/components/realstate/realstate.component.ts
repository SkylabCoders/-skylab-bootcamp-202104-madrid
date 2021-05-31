import { Component, OnInit } from '@angular/core'
import { environment } from '../../../environments/environment'
import { RealstateService } from '../../services/realstate.service'

@Component({
  selector: 'app-realstate',
  templateUrl: './realstate.component.html',
  styleUrls: ['./realstate.component.scss']
})
export class RealstateComponent implements OnInit {
realState:Array<{}> = []
nextUrl: any
prevUrl: any

constructor (public srvMain:RealstateService) { }

ngOnInit (): void {
  this.chargePage()
}

chargePage () {
  const obs$ = this.srvMain.getApi(environment.urlApi).subscribe((res:any) => {
    this.realState = res.data
    this.nextUrl = res.links.next.href
    this.prevUrl = res.links.prev.href
    obs$.unsubscribe()
  })
}

showMore () {
  const obs$ = this.srvMain.getApi(this.nextUrl).subscribe((res:any) => {
    this.nextUrl = res.links.next.href
    this.prevUrl = res.links.prev.href
    this.realState.push(...res.data)
    obs$.unsubscribe()
  })
}

nextPage () {
  const obs$ = this.srvMain.getApi(this.prevUrl).subscribe((res:any) => {
    this.nextUrl = res.links.next.href
    this.realState = res.data
    this.prevUrl = res.links.prev.href
    obs$.unsubscribe()
  })
}

prevPage () {
  const obs$ = this.srvMain.getApi(this.prevUrl).subscribe((res:any) => {
    this.nextUrl = res.links.next.href
    this.realState = res.data
    this.prevUrl = res.links.prev.href
    obs$.unsubscribe()
  })
}
}
