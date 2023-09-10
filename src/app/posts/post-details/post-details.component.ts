import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from 'src/app/core/model/model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post = {
    title: '',
    body: ''
  }
  isViewAvailable: boolean = true;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPost(this.activatedRoute.snapshot.params.id);
  }

  getPost(id: number) {
    this.postsService.findById(id)
      .subscribe(data => {
        this.post = data;
      },
      error => {
        this.isViewAvailable = false;
        console.log("error: " + error);
      })
  }

  
  navigateToPostDetails() {
    this.router.navigate(['posts/post-list'])
  }

}
