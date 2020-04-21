import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class PostdataComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public addedPost: Post;

  ngOnInit(): void {
  }

  addPost() {
    const newPost: Post = ({
      userId: 1,
      id: null, // zostanie nadane na servwerze
      title: 'Bociany w Polsce',
      body: 'Do polskie na wiosnę przylatują bociany',
    });

    this.httpService.addPost(newPost).subscribe(post => {
      this.addedPost = post;
      console.log('Dodano posta:');
      console.log(post);
    });
  }

}
