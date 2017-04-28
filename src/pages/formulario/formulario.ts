import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormularioProvider } from '../../providers/formulario/formulario';

/**
 * Generated class for the FormularioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  formularios: any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public formService: FormularioProvider) {
    this.formularios = this.formService.getParametros;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
