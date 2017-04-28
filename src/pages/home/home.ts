import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formPage:any = FormularioPage;
  constructor(public navCtrl: NavController) {

  }


  goForm(){
    this.navCtrl.push(this.formPage);
  }

}
