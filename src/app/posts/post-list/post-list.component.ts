import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from 'src/app/core/model/model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  postForm!: FormGroup;
  p: number = 1;
  isEmptyField: boolean = false;

  constructor(
    private postsService: PostsService,
    private router: Router) { 
  }
    
  ngOnInit(): void {
    this.researchForm();
    this.retrievePosts();
  }

  get title() {
    return this.postForm.get('title');
  }

  researchForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.nullValidator)
    })
  }

  retrievePosts(): void {
    this.postsService.getAll()
      .subscribe(data => {
        this.posts = data;
      },
      error => {
        console.log("Error: " + error);
      })
  }

  searchTitle(): void {
    let titleValue: string = this.title?.value;
    this.posts = [];
    this.p = 1;

    this.postsService.findByTitle(titleValue)
      .subscribe(data => {
        this.posts = data;
        this.isEmptyField = this.isSearchValid();
      },
      error => {
        console.log("Error: " + error);
      })
  }

  viewPost(id: any) {
    this.router.navigate(['/posts/post-details', id]);
  }

  isSearchValid(): boolean {
    return this.isTitleTouched() && this.isTitleLength() && !this.isPostLength();
  }

  isPostLength(): boolean {
    return this.posts.length ? true : false;
  }

  isTitleTouched(): boolean {
    return this.title?.touched ? true : false;
  }

  isTitleLength(): boolean {
    return this.title?.value?.length ? true : false;
  }

}
