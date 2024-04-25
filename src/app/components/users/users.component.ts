import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialMediaService } from '../../service/social-media.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [SocialMediaService]
})
export class UsersComponent implements OnInit {
  users: User[] = []
  constructor(private router: Router, private sosmedService: SocialMediaService) {
  }
  ngOnInit(): void {
    this.sosmedService.getAllUser().subscribe({
      next: (res) => {
        this.users = res.body!;
      },
    })
  }
}
