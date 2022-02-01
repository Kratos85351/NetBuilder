import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.scss']
})
export class ProjectWindowComponent implements OnInit {
  test = "disabled";
  btn_text : boolean = false;
  btn_thumb : boolean = false;
  btn_list : boolean = true;
  btn_box : boolean = false;

  constructor() { }

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
      this.btn_box = true;
      this.btn_list = false;
      this.btn_text = true;
    }else if (!this.btn_box && this.btn_text){
      this.btn_box = true;
      this.btn_list = false;
    }else if (this.btn_box && this.btn_text){
      this.btn_box = false;
      this.btn_list = true;
    }
  }

}
