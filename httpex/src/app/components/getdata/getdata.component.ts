import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Post } from '../../models/post';
import { HttpErrorResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetdataComponent implements OnInit {

  public posts: Array<Post> = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    //this.getPosts();
  }

  public getPosts() {
    this.httpService.getPosts().subscribe(
      posts => {
        this.posts = [];
        this.posts = posts;
        // console.log(this.posts);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status); // Zwraca kod statusu Http
      }
    );
  }

  public getPost(id: number) {
    this.httpService.getPost(id).subscribe(
      post => {
        this.posts = [];
        this.posts.unshift(post);
        // console.log(this.posts);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status); // Zwraca kod statusu Http
      }
    );
  }

  public getPostsByUser(userId: number) {
    this.httpService.getPostsByUser(userId).subscribe(
      posts => {
        this.posts = [];
        this.posts = posts;
        // console.log(this.posts);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status); // Zwraca kod statusu Http
      }
    );
  }
}
