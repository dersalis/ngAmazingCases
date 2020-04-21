import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-putdata',
  templateUrl: './putdata.component.html',
  styleUrls: ['./putdata.component.scss']
})
export class PutdataComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public updatedPost: Post;

  ngOnInit(): void {
  }

  public updatePost() {
    const newPost: Post = ({
      userId: 1,
      id: 1, // zostanie nadane na servwerze
      title: 'Bociany w Polsce',
      body: 'Do polskie na wiosnę przylatują bociany',
    });

    this.httpService.updatePost(newPost).subscribe(post => {
      this.updatedPost = post;
      console.log('Zaktualizowano posta:');
      console.log(post);
    });
  }

}
