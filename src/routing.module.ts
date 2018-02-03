//Routing file
import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


//import the components
import {MainComponent} from "./app/main/main.component"; 
import {AboutComponent} from "./app/about/about.component"; 
import {DetailsComponent} from "./app/details/details.component"; 
import {ServicesComponent} from "./app/services/services.component"; 

//create the routes
const routes: Routes = [
    //paths
    {path:"", component: MainComponent},
    {path:"AboutUs", component: AboutComponent},
    {path:"Services", component: ServicesComponent},
    {path:"Details", component: DetailsComponent},
]

@NgModule({
    //add the routes to the module
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]


})
export class RoutingModule{}
//add the components that will have a route here
export const routingComponents =[
    MainComponent, AboutComponent, ServicesComponent, DetailsComponent
]


