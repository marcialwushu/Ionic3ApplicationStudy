import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isUserLoggedIn: any = false;
  userInfo: any = {};
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gp: GooglePlus,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
  }

  public createAccount(){
    this.navCtrl.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscriber(allowed => {
      if(allowed) {
        this.navCtrl.setRoot('HomePage');
      } else {
        this.showError("Acess Denied");
      }
      error => {
        this.showError(error);
      }

    })
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text){
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }



  Login(){
    this.navCtrl.setRoot('HomePage');

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
