import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { MainService } from '../../services/main.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor (private mainSrv:MainService) { }

  imgSrc = 'https://trello-attachments.s3.amazonaws.com/6098e25224d83a589028906f/430x653/88f99a970ccc135d7d17c5fa248dbb70/stan_lee.png'
  title = 'Your favorite list'
  yourFavorites = this.mainSrv.favorites
  ngOnInit (): void {
    console.log(this.yourFavorites)
  }

  remove (index:number) {
    if (index > -1) {
      this.yourFavorites.splice(index, 1)
    }
  }

  OnMouseEnter () {
    this.imgSrc = 'https://trello-attachments.s3.amazonaws.com/60755d2282c14f477515af94/6098e25224d83a589028906f/dbbc05c631fdbed050b2d732e43f0a12/stan-lee.png'
  }

  OnMouseOut () {
    this.imgSrc = 'https://trello-attachments.s3.amazonaws.com/6098e25224d83a589028906f/430x653/88f99a970ccc135d7d17c5fa248dbb70/stan_lee.png'
  }

  //  stanLee.onmouseenter = function(){
  //   this.stanLee.src = '../../services/ok2.png'
  //   }

  //   stanLee.onmouseout = function(){
  //   this.stanLee.src = '../../services/ok.png'
  //   }
}
