import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public UserData: any;
  constructor(private readonly http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.UserData = data;
    });
  }


}
