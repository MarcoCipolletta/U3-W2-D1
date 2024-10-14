import { posts } from './../../../../public/posts';
import { Component } from '@angular/core';
import { iPost } from '../../Modules/i-post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  activePost!: iPost[];

  shuffleArray(array: iPost[]): iPost[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  ngOnInit() {
    console.log('ECCOLAAAA', posts);

    const postsArrShuffled = this.shuffleArray(posts);
    this.activePost = postsArrShuffled.filter((p) => p.active);
  }
}
