import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
