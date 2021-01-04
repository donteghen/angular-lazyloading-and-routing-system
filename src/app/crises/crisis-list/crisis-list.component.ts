import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis-service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises:Crisis[]
  constructor(private crisisService:CrisisService) { }

  ngOnInit(): void {
    this.crisisService.getCrises().subscribe(data => this.crises = data);
  }

}
