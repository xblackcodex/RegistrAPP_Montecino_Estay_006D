import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  constructor(private menuController:MenuController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Creando cuenta...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  usuario={
    name:'',
    apellido:'',
    rut:'',
    telefono:'',
    cumple:'',
    email:'',
    password:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
