import { Routes } from '@angular/router';
import { LayoutComponent } from './web-site/layout/layout.component';
import { LayoutComponent as AdminLayoutComponent } from './admin/layout/layout.component';

export const routes: Routes = [
    { path:"",  component:LayoutComponent },
    { path:"admin", component:AdminLayoutComponent }
];
