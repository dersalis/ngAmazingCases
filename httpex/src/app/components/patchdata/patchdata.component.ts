import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-patchdata',
  templateUrl: './patchdata.component.html',
  styleUrls: ['./patchdata.component.scss']
})
export class PatchdataComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  public patchedPost: Post;

  ngOnInit(): void {
  }

  public updatePost() {
    const newPost: Post = ({
      userId: 1,
      title: 'Bociany w Polsce',
    });

    this.httpService.patchPost(newPost).subscribe(post => {
      this.patchedPost = post;
      console.log('Zaktualizowano posta:');
      console.log(post);
    });
  }

}
