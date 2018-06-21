import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GooglePlus } from '@ionic-native/google-plus';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isUserLoggedIn: any = false;
  userInfo: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public gp: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.setRoot(HomePage);

  }

  forgotPwd(){

  }

  signUp(){

  }

  loginWithGP(){
    this.gp.login({}).then(res => {
      console.log(res);
      this.userInfo = res;
      this.isUserLoggedIn = true;
    }).catch( err => console.log(err));
  }

  logout(){
    this.gp.logout().then( ()=> {
      this.isUserLoggedIn = false;
    })
  }

}
