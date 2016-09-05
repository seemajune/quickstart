import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><about /> <home />'
})
export class AppComponent { 
  title = "ng2";
}
