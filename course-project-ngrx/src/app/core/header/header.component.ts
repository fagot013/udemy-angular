import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs';
import { Logout } from '../../auth/store/auth.actions';
// import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  saveData() {
    this.dataStorageService.saveRecipes().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  fetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }

}
