import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const ROUTES: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'post-details/:id', component: PostDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }