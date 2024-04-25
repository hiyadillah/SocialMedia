import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../service/social-media.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Commentary } from '../../interfaces/commentary';
import Swal from 'sweetalert2';
import { CommentService } from '../../service/comment.service';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [SocialMediaService, CommentService, PostService]
})
export class PostComponent implements OnInit {
  post = {} as Post
  comments: Commentary[] = []
  commentForm = {} as Commentary
  constructor(private route: ActivatedRoute,
    private sosmedService: SocialMediaService,
    private postService: PostService,
    private commentService: CommentService) { }
  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id']
    this.sosmedService.getPost(id).subscribe({
      next: res => {
        this.post = res.body!
      }
    })
    this.sosmedService.getPostComment(id).subscribe({
      next: res => {
        this.comments = res.body!
      }
    })
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
            this.post.body = post.body
            this.post.title = post.title
          }
        }
      })
    }
  }
  createComment(e: SubmitEvent) {
    e.preventDefault();
    if (confirm("Apakah anda yakin?")) {
      let name = (document.getElementsByName("commentCreateName")[0] as HTMLInputElement).value
      let email = (document.getElementsByName("commentCreateEmail")[0] as HTMLInputElement).value
      let body = (document.getElementsByName("commentCreateBody")[0] as HTMLInputElement).value

      let comment: Commentary = {
        id: 0,
        postId: 0,
        name: name,
        email: email,
        body: body,
      }
      this.commentService.createComment(comment).subscribe({
        next: res => {
          if (res.ok) {
            alert("Berhasil")
            this.comments.push(comment)
          }
        }
      })
    }
  }
  editComment(e: SubmitEvent, id: number) {
    e.preventDefault()
    if (confirm("Apakah anda yakin?")) {
      let name = (document.getElementsByName("commentUpdateName")[0] as HTMLInputElement).value
      let email = (document.getElementsByName("commentUpdateEmail")[0] as HTMLInputElement).value
      let body = (document.getElementsByName("commentUpdateBody")[0] as HTMLInputElement).value

      let comment: Commentary = {
        id: id,
        postId: 0,
        body: body,
        name: name,
        email: email,
      }
      this.commentService.createComment(comment).subscribe({
        next: res => {
          if (res.ok) {
            alert("Berhasil")
            this.comments.forEach((value, index) => {
              if (value.id == comment.id) {
                this.comments[index].body = comment.body
                this.comments[index].email = comment.email
                this.comments[index].name = comment.name
              }
            })
          }
        }
      })
    }
  }
  deleteComment(id: number) {
    if (confirm("Apakah anda yakin?")) {
      this.commentService.deleteComment(id).subscribe({
        next: res => {
          if (res.ok) {
            alert("Berhasil")
            this.comments = this.comments.filter(value => value.id != id)
          }
        }
      })
    }
  }
}

