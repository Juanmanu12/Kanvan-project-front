import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private http = inject(HttpClient);

  constructor() {}

  getProject(){
    return this.http.get('http://localhost:3000/project');
  }

  getProjectById(id: String){
    return this.http.get('http://localhost:3000/project' + id);
  }

  createProject(project: any){
    return this.http.post('http://localhost:3000/project', project);
  }
}
