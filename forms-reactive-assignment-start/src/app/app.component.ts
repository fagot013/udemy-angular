import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,
        [Validators.required, CustomValidators.invalidProjectName],
        [CustomValidators.asyncInvalidProjectName]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl(this.statuses[1], Validators.required)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
