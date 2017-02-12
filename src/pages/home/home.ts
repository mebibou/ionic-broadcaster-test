import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var broadcaster;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ready: boolean = false;
  public registered: boolean = false;

  private eventListener: Function = event => {
    console.log('event received');
  }

  constructor(navCtrl: NavController, platform: Platform) {
    platform.ready().then(() => {
      this.ready = true;
    });
  }

  register() {
    broadcaster.addEventListener('event', this.eventListener);
    this.registered = true;
  }

  unregister() {
    broadcaster.removeEventListener('event', this.eventListener);
    this.registered = false;
  }
}
