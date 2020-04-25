import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.scss']
})
export class TemplatedrivenformsComponent implements OnInit {

  @ViewChild('contForm')
  contForm: NgForm; // Wstrzyknięta nazwa formularza z widoku

  public courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];
  public message: TemplateMessage = new TemplateMessage(null, null, null, null, this.courses[0], false);

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.contForm);
    console.log(this.message);
    // Wysyłanie danych

    // Reset danych
    this.reset();
  }

  public reset(): void {
    this.message = new TemplateMessage(null, null, null, null, this.courses[0], false);
    this.contForm.resetForm(this.message);
  }

}

class TemplateMessage {
  constructor(
    public topic?: string,
    public msg?: string,
    public name?: string,
    public email?: string,
    public course?: string,
    public bot?: boolean) { }
}
