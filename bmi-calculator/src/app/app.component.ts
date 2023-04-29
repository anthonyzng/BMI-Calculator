import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

// for input format control error


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmi-calculator';
  bmi: number | null = null;

  weightFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]{2,3}(\\.[0-9]{0,1})?$"),
  ]);

  heightFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]{3}(\\.[0-9]{0,1})?$"),
  ]);

  onSubmit(){
    const weight = parseFloat(this.weightFormControl.value!!);
    const height = parseFloat(this.heightFormControl.value!!);
    this.bmi = weight / Math.pow(height/100, 2);
  }

}
