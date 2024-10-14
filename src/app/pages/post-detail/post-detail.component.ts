import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../Modules/i-post';
import { posts } from './../../../../public/posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  post!: iPost;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);

      const foundPost = posts.find((p) => p.id === parseInt(params.id));
      if (foundPost) {
        this.post = foundPost;
        console.log(this.post);
      }
    });
  }
}