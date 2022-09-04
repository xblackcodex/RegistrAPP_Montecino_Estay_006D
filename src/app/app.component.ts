import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cerrando Sesion...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  componentes : Componente[] =[
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'person-outline',
      name: 'Ingresar',
      redirecTo: '/ingresar'
    },
    {
      icon: 'person-add-outline',
      name: 'Crear Usuario',
      redirecTo: '/crear'
    },
    {
      icon: 'qr-code-outline',
      name: 'Escanear',
      redirecTo: '/qr'
    },
    
  ];
}
