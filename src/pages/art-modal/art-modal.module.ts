import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtModalPage } from './art-modal';

@NgModule({
  declarations: [
    ArtModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtModalPage),
  ],
})
export class ArtModalPageModule {}
