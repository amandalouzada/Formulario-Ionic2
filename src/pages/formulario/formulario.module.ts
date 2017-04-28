import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioPage } from './formulario';
import { FormularioProvider } from '../../providers/formulario/formulario';


@NgModule({
  declarations: [
    FormularioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioPage),
  ],
  exports: [
    FormularioPage,
  ],
  providers: [
    FormularioProvider
  ]
})
export class FormularioPageModule {}
