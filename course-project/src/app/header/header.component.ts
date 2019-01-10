import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

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
      (response: Response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  fetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
