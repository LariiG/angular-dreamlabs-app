import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../core/model/model';

@Injectable()
export class PostsService {

  postsUrl!: string;

  constructor(private httpClient: HttpClient) { 
    this.postsUrl = `${environment.apiUrl}/posts`;
  }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl);
  }

  findByTitle(filter: string): Observable<Post[]> {
    let params = new HttpParams();

    if(filter) {
      params = params.set('title', filter);
    }

    return this.httpClient.get<Post[]>(`${this.postsUrl}`, { params });
  }

  findById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.postsUrl}/${id}`);
  }

}
