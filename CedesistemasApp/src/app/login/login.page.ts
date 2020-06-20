import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navController: NavController) {


   }

  ngOnInit() {
  }

  public goToHome(){
    this.navController.navigateRoot('/home');
  }

}
