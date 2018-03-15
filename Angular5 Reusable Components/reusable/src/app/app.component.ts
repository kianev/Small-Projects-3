import { Component } from '@angular/core';
import { FavoriteChanged } from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChanged) {
    console.log('Favorite changed: ', eventArgs.newValue);
  }
}
