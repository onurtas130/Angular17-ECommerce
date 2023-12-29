import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class LayoutComponent {

}
