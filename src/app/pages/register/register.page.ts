import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms'; 
import { RegisterPageForm } from './register.page.form';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  user: any = {};

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

  constructor(private router: Router, public http: HttpClient, private formBuilder: FormBuilder, public alertController: AlertController) {}

  ngOnInit() {
    this.form = new RegisterPageForm(this.formBuilder).createRegisterForm();
  }

 submit(){
  this.http.post("http://localhost:8080/api/v1/user", this.user).subscribe((res: any) => {
    if(res.message == "User Created."){
      this.router.navigate(['home']);
    }else{
      this.presentAlert();
    }
  })
 }

}
