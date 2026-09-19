import { Component } from '@angular/core';
import { HeroComponent } from '../../features/home/components/hero/hero.component';
import { Collections } from '../collections/collections';
import { collection } from '../../features/home/components/collections/collection';

@Component({
  imports: [HeroComponent, Collections, collection],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {}
