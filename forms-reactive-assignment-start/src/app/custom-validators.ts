import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {'invalidProjectName': true};
    } else {
      return null;
    }
  }

  static asyncInvalidProjectName(control: FormControl): Observable<any> | Promise<any> {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          return {'invalidProjectName': true};
        } else {
          return null;
        }
      }, 1500);
    }));
  }
}
