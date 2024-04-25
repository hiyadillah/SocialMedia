import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialMediaService } from '../../service/social-media.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Post } from '../../interfaces/post';
import { Album } from '../../interfaces/album';
import { AddressPipe } from '../../pipes/address.pipe';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AddressPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [SocialMediaService, PostService],
})
export class UserComponent implements OnInit {
  user = {} as User;
  posts: Post[] = [];
  albums: Album[] = [];
  constructor(private route: ActivatedRoute,
    private sosmedService: SocialMediaService,
    private postService: PostService) { }
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id']
    this.sosmedService.getUser(id).subscribe({
      next: res => {
        console.log(res);
        this.user = res.body!
        console.log(res.body!);
      }
    })
    this.sosmedService.getUserPost(id).subscribe({
      next: res => {
        this.posts = res.body!
      }
    })
    this.sosmedService.getUserAlbum(id).subscribe({
      next: res => {
        this.albums = res.body!
      }
    })
  }
  createPost(e: SubmitEvent) {
    e.preventDefault();
    if (confirm("Apakah anda yakin?")) {
      let title = (document.getElementsByName("postCreateTitle")[0] as HTMLInputElement).value
      let body = (document.getElementsByName("postCreateBody")[0] as HTMLInputElement).value

      let post: Post = {
        id: 0,
        userId: 0,
        title: title,
        body: body,
      }
      this.postService.createPost(post).subscribe({
        next: res => {
          if (res.ok) {
            alert("Berhasil")
          }
        }
      })
    }
  }
  editPost(e: SubmitEvent, id: number) {
    e.preventDefault()
    if (confirm("Apakah anda yakin?")) {
      let title = (document.getElementsByName("postUpdateTitle")[0] as HTMLInputElement).value
      let body = (document.getElementsByName("postUpdateBody")[0] as HTMLInputElement).value

      let post: Post = {
        id: id,
        userId: 0,
        title: title,
        body: body,
      }
      this.postService.updatePost(post).subscribe({
        next: res => {
          if (res.ok) {
            alert("Berhasil")
          }
        }
      })
    }
  }
  deletePost(id: number) {
    if (confirm("Apakah anda yakin?")) {
      this.postService.deletePost(id).subscribe({
        next: res => {
          if (res.ok) {
            alert("Berhasil")
          }
        }
      })
    }
  }
}
