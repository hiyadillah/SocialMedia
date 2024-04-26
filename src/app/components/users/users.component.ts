import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: User[] = []
  constructor(
    private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getAllUser().subscribe({
      next: (res) => {
        this.users = res.body!;
      },
    })
  }
}
