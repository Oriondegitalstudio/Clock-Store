import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../../shared/components/footer/footer';
import { Navbar } from '../../../shared/components/navbar/navbar';

@Component({
  imports: [Navbar, RouterOutlet, Footer],
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
