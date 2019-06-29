import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-prix',
  templateUrl: './vote-prix.component.html',
  styleUrls: ['./vote-prix.component.scss']
})
export class VotePrixComponent implements OnInit {
  percent=100;
  dynamic: number;
  type: string;

  constructor() { }

  ngOnInit() {
  }

  increase(): void {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }
  decline(): void {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
  
  
}
