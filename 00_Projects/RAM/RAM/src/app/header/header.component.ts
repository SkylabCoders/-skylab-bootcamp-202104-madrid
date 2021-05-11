import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dashboardTag = 'Dashboard';
  listTag = 'List';
  favoriteTag = 'Favourites';
  logIn = 'LogIn'
  searchInput = ''
  ram:any
  

  constructor (public srvMain:MainService, public router:Router) { }

  ngOnInit (): void {
  }

  searchSubmit(){
    console.log(this.searchInput);
    const obs$ = this.srvMain.getTheAPI("https://rickandmortyapi.com/api/character/?name=" + this.searchInput).subscribe((res:any) => {
      console.log('esta')
      this.ram = res.results;
      obs$.unsubscribe();
      this.srvMain.goToList("https://rickandmortyapi.com/api/character/?name=" + this.searchInput)
      this.router.navigate(['/list'])
    }, (err:any) => {
      console.log('no esta')
    })
  }
}
