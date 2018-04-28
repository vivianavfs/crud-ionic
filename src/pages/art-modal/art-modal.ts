import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ArtService } from '../../providers/art-service';

@Component({
  templateUrl: 'art-modal.html',
})
export class ArtModalPage {

	@ViewChild('name') name;
  art: any = {};
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public viewCtrl: ViewController, public toastCtrl: ToastController,
  	public artService: ArtService,) {

  	if (this.navParams.data.id) {
      this.artService.get(this.navParams.get('id')).subscribe((art: any) => {
        this.art = art;
        this.art.href = art._links.self.href;
      });
  	}
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.name.setFocus();
    },150);
  }

  save(form: NgForm) {
    let update: boolean = form['href'];
    this.artService.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Art "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }
}
