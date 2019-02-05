import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs';
import { Logout } from '../../auth/store/auth.actions';
import { FetchRecipe, SaveRecipe } from '../../recipes/store/recipe.actions';
// import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private router: Router,
              private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  saveData() {
    this.store.dispatch(new SaveRecipe());
  }

  fetchData() {
    this.store.dispatch(new FetchRecipe());
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }

}
