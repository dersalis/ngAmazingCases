import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.scss']
})
export class DeletedataComponent implements OnInit {

  public deletedPost: Post;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public deletePost() {
    const delPostId: number = 2;
    this.httpService.deletePost(delPostId).subscribe(post => {
      this.deletedPost = post;
      console.log('Usunięto posta:');
      console.log(post);
    });
  }
}
