import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';

export const routes: Routes = [
    { path: '', component: UsersComponent, providers: [HttpClient] },
    { path: 'users/:id', component: UserComponent, providers: [HttpClient] },
    { path: 'posts/:id', component: PostComponent, providers: [HttpClient] },
    { path: 'albums/:id', component: AlbumComponent, providers: [HttpClient] },
    { path: 'photos/:id', component: PhotoComponent, providers: [HttpClient] },
];
