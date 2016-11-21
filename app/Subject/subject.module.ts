/**
 * Created by Tal on 20/11/16.
 */

import {NgModule} from "@angular/core";
import {subjectsProvider} from "./subjects-provider";

@NgModule({
    providers: [subjectsProvider],
    exports: [subjectsProvider]

})

export class subjectsModule { }
