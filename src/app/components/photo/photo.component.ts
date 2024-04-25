import { Component, OnInit } from '@angular/core';
import { Photo } from '../../interfaces/photo';
import { ActivatedRoute } from '@angular/router';
import { SocialMediaService } from '../../service/social-media.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
  providers: [SocialMediaService]
})
export class PhotoComponent implements OnInit {

  photo = {} as Photo
  constructor(private route: ActivatedRoute, private sosmedService: SocialMediaService) { }
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id']
    this.sosmedService.getPhoto(id).subscribe({
      next: res => {
        this.photo = res.body!
      }
    })
  }
}
