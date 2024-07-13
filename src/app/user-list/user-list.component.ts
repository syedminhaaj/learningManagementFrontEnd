import { Component, OnInit } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  instructors: any;
  displayedColumns: string[] = ['id', 'name', 'teachingExp', 'email','courses','actions'];
  innerDisplayedColumns: string[] = ['courseId', 'courseName','courseDuration','viewLessons'];
  color:string="deepSkyBlue";
  hoveredRowIndex: number | null = 1;

  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
    console.log("data is----->",this.instructors)
  }

  navigateToAddInstructor(): void {
    this.router.navigate(['/add-instructor']);
  }
  fetchData(): void {
    this.apiService.getData().subscribe(data=>{ 
        this.instructors = data;
      },
    );
  }

  deleteUser(id: number): void {
    this.instructors = this.instructors.filter((user:any) => {
    if(user.id !== id){
this.apiService.DeleteInstructor(id).subscribe(resp=>{
  this.fetchData();
});
    }
    
    });
  }

  viewCourse(couseId:any){
    console.log("id is",couseId)
  }

}
