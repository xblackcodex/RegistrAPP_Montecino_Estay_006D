import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ingresar',
    loadChildren: () => import('./Pages/ingresar/ingresar.module').then( m => m.IngresarPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./Pages/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./Pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./Pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'codigo',
    loadChildren: () => import('./Pages/codigo/codigo.module').then( m => m.CodigoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
