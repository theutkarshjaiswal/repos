import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private mainService: MainService) {}
  title = 'repost';

  // ngOnInit(): void {
  //   this.mainService.test().subscribe((result) => {
  //     console.log(result, 'resultresultresult');
  //   });
  // }
}
