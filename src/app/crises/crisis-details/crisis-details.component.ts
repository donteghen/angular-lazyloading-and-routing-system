import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis-service';

@Component({
  selector: 'app-crisis-details',
  templateUrl: './crisis-details.component.html',
  styleUrls: ['./crisis-details.component.css']
})
export class CrisisDetailsComponent implements OnInit {
  crises:Crisis;
  editName:string
  constructor(private activeRoute:ActivatedRoute, private crisisService:CrisisService, private router:Router) { }

  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params['id'];
    if(id < 1 || id >4){
      console.log(true)
      this.router.navigateByUrl('/crises/11');
      this.crises = this.crisisService.getCrisis(1);
      this.editName = this.crises.name;
      return
    }
    this.crisisService.getCrises().subscribe(data =>{
      this.crises = data.find(h => h.id == id);
      this.editName = this.crises.name;
    })
  }
 
  getNext(id:number){
    if( id == 4){
      this.router.navigateByUrl("/crises/4");
      return
    }
    const newId = id + 1;
    this.router.navigateByUrl(`/crises/${newId}`);
    this.crises= this.crisisService.getCrisis(newId);
    this.editName = this.crises.name;
  }  
  getPrevious(id:number){
    if(id == 1){
      this.router.navigateByUrl('/crises/1');
      return
    }
    const newId = id - 1;
    this.router.navigateByUrl(`/crises/${newId}`);
    this.crises = this.crisisService.getCrisis(newId);
    this.editName = this.crises.name;
  }

  save(){
    this.crises.name = this.editName;
  }
  cancel(){
    this.router.navigate(['/crises'])
  }

}
