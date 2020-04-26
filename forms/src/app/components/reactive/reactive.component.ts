import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  public courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];
  contactForm: FormGroup;
  message: ReactiveMessage = new ReactiveMessage();

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      course: new FormControl(this.courses[0]),
      bot: new FormControl(false),
      questions: new FormArray([new FormControl(null), new FormControl(null)], this.questionValidator),
    });

    // Nasłuchiwanie zmian
    // this.contactForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
    // this.contactForm.get('topic').valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // Nasłuchiwanie statusu zmian
    this.contactForm.get('email').statusChanges.subscribe(value => {
      console.log(value);
    });
  }

  public addQuestion(): void {
    const arr = this.contactForm.get('questions') as FormArray;
    arr.push(new FormControl(null));
  }

  // Walidator dynamicznych pól
  public questionValidator(controls: AbstractControl): ValidationErrors {
    const arr = controls.value as Array<string>;
    // Jeśli pojawi się angularjs to błąd
    if (arr.includes('angularjs')) {
      return {'forbbidenCours': true};
    }
  }

  public onSubmit(): void {
    console.log(this.contactForm);

    this.message.topic = this.contactForm.value.topic;
    this.message.msg = this.contactForm.value.message;
    this.message.name = this.contactForm.value.name;
    this.message.email = this.contactForm.value.email;
    this.message.course = this.contactForm.value.course;
    this.message.bot = this.contactForm.value.bot;
    this.contactForm.value.questions.forEach(item => {
      this.message.questions.push(item);
    });
    // Wysyłanie danych

    // Resetowanie
    this.onReset();
    console.log(this.message);
  }

  public onReset(): void {
    // Można restetować poszczególne pola
    this.contactForm.reset({
      topic: '',
      message: '',
      name: '',
      email: '',
      course: this.courses[0],
      bot: true,
      questions: [],
    });
  }

}


class ReactiveMessage {
  constructor(
    public topic?: string,
    public msg?: string,
    public name?: string,
    public email?: string,
    public course?: string,
    public bot?: boolean,
    public questions: string[] = []) { }
}
