import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
