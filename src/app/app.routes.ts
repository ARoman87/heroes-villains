import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


export const appRoutes: Route[] = [
    
    {
        path: "search-results",
        loadChildren: () => import("@heroes-villains/search-results").then((m) => m.SearchResultsModule),
        
    },
    {
        path: "**",
        component: MainComponent
    },
];
