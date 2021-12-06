import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup | any ;
  listItem: any[] = [];
  timer: Observable<Date> | any;


  constructor() {}


  ngOnInit() {
    this.timer = timer(0, 1000).pipe(map(() => new Date()));
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  addItem() {
    if (this.form.invalid) {
      return;
    }
    const value  = {
      name: this.form.value.name,
      checked: false
    };
    this.listItem.push(value);
    this.form.patchValue({name: ''});
  }

  removeItem(index: any) {
    this.listItem.splice(index, 1);
  }
}
