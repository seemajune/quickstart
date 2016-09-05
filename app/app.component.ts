import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>hi</h1>
      <a routerLink="/about">About</a>
      <a routerLink="/">Home</a>
      <router-outlet></router-outlet>
    `
})

export class AppComponent { 

}
