import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../service/social-media.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../interfaces/album';
import { Photo } from '../../interfaces/photo';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  album = {} as Album
  photos: Photo[] = []
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService) { }
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id']
    this.albumService.getAlbum(id).subscribe({
      next: res => {
        this.album = res.body!
      }
    })
    this.albumService.getAlbumPhoto(id).subscribe({
      next: res => {
        this.photos = res.body!
      }
    })
  }
}
