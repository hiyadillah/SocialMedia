import { Component, OnInit } from '@angular/core';
import { Photo } from '../../interfaces/photo';
import { ActivatedRoute } from '@angular/router';
import { SocialMediaService } from '../../service/social-media.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
  providers: [PhotoService]
})
export class PhotoComponent implements OnInit {

  photo = {} as Photo
  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id']
    this.photoService.getPhoto(id).subscribe({
      next: res => {
        this.photo = res.body!
      }
    })
  }
}
