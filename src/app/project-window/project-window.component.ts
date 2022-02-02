import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../services/projects.service";
import {ProjectModel} from "../models/project.model";
import {endWith} from "rxjs";

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.scss']
})
export class ProjectWindowComponent implements OnInit {
  //test = "disabled";

  btn_text : boolean = false;
  btn_thumb : boolean = false;
  btn_list : boolean = true;
  btn_box : boolean = false;

  sortByValue : number [] = [0,0,0]; //[0] = name, [1] = lastEdited , [2] = custom;

  projectList! : ProjectModel[];
  constructor(private projectService : ProjectsService) {
    this.projectList = this.projectService.projects;
  }

  ngOnInit(): void {
  }

  textStateSwitch() {
    if(!this.btn_text && this.btn_box) {
      this.btn_text = true;
      this.btn_thumb = false;
    }else if (!this.btn_text && !this.btn_box){
      this.btn_text = true;
      this.btn_thumb = false;
    }else if (this.btn_text && this.btn_box){
      this.btn_text = false;
      this.btn_thumb = true;
    }else if(this.btn_text && !this.btn_box){
      this.btn_text = false;
    }
  }

  thumbStateSwitch(){
    if(!this.btn_thumb && !this.btn_box) {
      this.btn_thumb = true;
      this.btn_text = false;
    }else if(this.btn_thumb && !this.btn_box){
      this.btn_thumb = false;
    }else if(this.btn_thumb && this.btn_box){
      this.btn_thumb = false;
      this.btn_text = true;
    } else if(!this.btn_thumb && this.btn_box){
      this.btn_thumb = true;
      this.btn_text = false;
    }


  }

  listStateSwitch(){
    this.btn_list = !this.btn_list;
    this.btn_box = !this.btn_box;
  }

  boxStateSwitch(){
    if(!this.btn_box && !this.btn_text){
      if(!this.btn_thumb){this.btn_text = true;}
      this.btn_box = true;
      this.btn_list = false;
      if(this.btn_text)this.btn_thumb = false;
    }else if (!this.btn_box && this.btn_text){
      this.btn_box = true;
      this.btn_list = false;
    }else if (this.btn_box && this.btn_text){
      this.btn_box = false;
      this.btn_list = true;
    }
  }

  sortedByValueChanged(event: any) {
    let name = "name";
    let lastEdited = "last edited";
    let custom = "custom";
    event.target.value == name ?
      this.sortByValue [0] = 1
      : this.sortByValue[0] = 0;

    event.target.value == lastEdited ?
      this.sortByValue [1] = 1
      : this.sortByValue[1] = 0;

    event.target.value == custom ?
      this.sortByValue [2] = 1
      : this.sortByValue[2] = 0;
  }
}
