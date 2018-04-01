
import {Component} from '@angular/core';
import {NavController, LoadingController, ToastController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {AuthService} from "../../Services/auth";
import {finalize} from 'rxjs/operators/finalize';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private readonly navCtrl: NavController,
              private readonly loadingCtrl: LoadingController,
              private readonly authService: AuthService,
              private readonly toastCtrl: ToastController) {
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  login(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    this.authService
      .login(value)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        () => {},
        err => this.handleError(err));
  }

  handleError(error: any) {
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}