import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ToastController } from 'ionic-angular';
import { ArtService } from '../../providers/art-service';
import { ArtModalPage } from '../art-modal/art-modal'

@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {

	private arts: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public artService: ArtService, public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  	this.artService.getTopArts().subscribe(arts => {
  		this.arts = arts;
  	})

  }

  openModal(artId) {
    let modal = this.modalCtrl.create(ArtModalPage, artId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad());
  }

  remove(art) {
    this.artService.remove(art.id).subscribe(response => {
      for (let i = 0; i < this.arts.length; i++) {
        if (this.arts[i] === art) {
          this.arts.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Art "' + art.name + '" deleted.',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      }
    });
  }
  
}
