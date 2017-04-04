import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';


@Component({
  selector: 'nx-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];
}