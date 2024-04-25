import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../service/social-media.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../interfaces/album';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
  providers: [SocialMediaService]
})
export class AlbumComponent implements OnInit {
  album = {} as Album
  photos: Photo[] = []
  constructor(private route: ActivatedRoute, private sosmedService: SocialMediaService) { }
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id']
    this.sosmedService.getAlbum(id).subscribe({
      next: res => {
        this.album = res.body!
      }
    })
    this.sosmedService.getAlbumPhoto(id).subscribe({
      next: res => {
        this.photos = res.body!
      }
    })
  }
}
