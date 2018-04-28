import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtModalPage } from '../art-modal/art-modal';
import { ArtPage } from './art'

@NgModule({
  declarations: [
  	ArtPage,
    ArtModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtPage),
  ],
  entryComponents: [
    ArtModalPage
  ]
})
export class ArtPageModule {}
