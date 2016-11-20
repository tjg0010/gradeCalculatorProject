/**
 * Created by Tal on 12/11/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 id="mainTitle">Grades Calculator</h1>
               <semester-component></semester-component>
    `,
    styleUrls:['./styles.css']
})
export class AppComponent { }

