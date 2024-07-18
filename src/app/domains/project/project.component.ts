import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectServiceService } from '../../services/project.service.service';
import { Input } from '@angular/core';
import { response } from 'express';
import { Project } from '../../models/project.model';import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeaderComponent, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  
  todo = [''];
  inprogress = [''];
  done = [''];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  @Input() id?: string;

  project = signal<any| Project>(null)
  private projectService = inject(ProjectServiceService);

  ngOnInit(){
    if (this.id !== undefined){
      this.projectService.getProjectById(this.id).subscribe({
        next: (response) => {
          this.project.set(response)
        }, error: (error)=> console.log(error)
      })
    }
  }
}
