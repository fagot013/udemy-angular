import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
// import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
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

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
