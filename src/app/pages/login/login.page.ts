import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginPageForm } from './login.page.form';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  user: any = {};

  constructor(private router: Router, public http: HttpClient, private formBuilder: FormBuilder, public alertController: AlertController) {
    console.log("asd");
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Login Error',
      message: 'Username or password is incorrect.',
      buttons: ['OK'] 
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }



  login() {
    this.http.post("http://localhost:8080/api/v1/user/login", this.user).subscribe((res: any) => {
    if (res.message == "User Logged In.") {
      
      console.log(res.message);
      this.router.navigate(['home']);
    }else{
      console.log(res.message);
      this.presentAlert();
    }
  })
    
  }
  register() {
    this.router.navigate(['register']);
  }

}
