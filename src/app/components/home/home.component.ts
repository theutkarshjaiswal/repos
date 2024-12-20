import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';

import { MainService } from '../../services/main.service';
MainService;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private mainService: MainService,
    private route: ActivatedRoute
  ) {}
  title = 'repost';

  ngOnInit(): void {
    this.fetchas();
    console.log(this.route.snapshot.paramMap);
  }

  fetchas() {
    this.mainService.test().subscribe((result) => {
      console.log(result, 'resultresultresult');
    });
  }
}
