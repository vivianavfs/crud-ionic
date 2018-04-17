import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArtService } from '../../providers/art-service';

@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {

	private arts: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public artService: ArtService) {
  }

  ionViewDidLoad() {
  	this.artService.getTopArts().subscribe(arts => {
  		this.arts = arts;
  	})
    
  }

}
