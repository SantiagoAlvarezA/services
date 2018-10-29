import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  data = null;
  constructor(private comments:CommentsService ) {
    comments.getPosts().subscribe(
      data => {
          this.data = data;
      }
  );
   }

  ngOnInit() {


  }

}
