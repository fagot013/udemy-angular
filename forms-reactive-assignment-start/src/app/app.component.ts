import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'projectName': new FormControl(null, [Validators.required], [this.validProjectName]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl(null, Validators.required)
    });
  }

  validProjectName(control: FormControl): Observable<any> | Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (control.value === 'Test') {
        resolve({'invalidProjectName': true});
      } else {
        resolve(null);
      }
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
