import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    selector: 'app-list-students',
    templateUrl: './list-students.component.html',
    styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

    data = null;
    constructor(private postService: PostsService) {
        postService.GetPosts().subscribe(
            data => {
                this.data = data;
            }
        );
    }
    ngOnInit() { }
}