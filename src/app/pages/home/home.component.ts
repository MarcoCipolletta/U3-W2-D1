import { Component } from '@angular/core';
import { iPost } from '../../Modules/i-post';
import { posts } from './../../../../public/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  featuredPost!: iPost;
  relatedPosts: iPost[] = [];
  allPosts: iPost[] = [];
  changePost: iPost = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [],
    active: false,
  };

  formOpenId!: number | null;

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
    const postsArrShuffled = this.shuffleArray(posts);
    this.allPosts = posts;
    this.featuredPost = postsArrShuffled[0];
    this.relatedPosts = postsArrShuffled.slice(1, 5);
  }
  handleData(event: number) {
    const postToChange = this.allPosts.find((p) => p.id === event);
    if (this.formOpenId === event) {
      // Se il form è già aperto, si chiude
      this.formOpenId = null;
    } else {
      // Altrimenti si apre il form per questo post
      this.formOpenId = event;
      const postToChange = this.allPosts.find((p) => p.id === event);
      if (postToChange) {
        this.changePost = postToChange;
        const index = this.allPosts.findIndex((p) => p.id === event); // Trova l'indice dell'oggetto

        if (index !== -1) {
          this.allPosts[index].title = this.changePost.title; // Aggiorna la proprietà desiderata
          this.allPosts[index].body = this.changePost.body; // Aggiorna altre proprietà
        }
      }
    }
  }
}
