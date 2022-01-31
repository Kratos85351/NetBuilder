import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.scss']
})
export class ProjectWindowComponent implements OnInit {

  btn_text : boolean = false;
  btn_thumb : boolean = false;
  btn_list : boolean = true;
  btn_box : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  textStateSwitch() {
    this.btn_text = !this.btn_text;
    this.btn_thumb = false
  }

  thumbStateSwitch(){
    this.btn_thumb=!this.btn_thumb;
    this.btn_text = false;
  }

  listStateSwitch(){
    this.btn_list = !this.btn_list;
    this.btn_box = !this.btn_box;
  }

  boxStateSwitch(){
    this.btn_box = !this.btn_box;
    this.btn_list = !this.btn_list;
  }

}
