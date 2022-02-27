import {Component, Inject, OnInit} from '@angular/core';
import {ProjectsService} from "../services/projects.service";
import {ProjectModel} from "../models/project.model";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.scss']
})
export class ProjectWindowComponent implements OnInit {

  searchText! : string;
  form!: FormGroup;

  btn_text : boolean = false;
  btn_thumb : boolean = false;
  btn_list : boolean = true;
  btn_box : boolean = false;

  sortByValue : number [] = [0,0,0]; //[0] = name, [1] = lastEdited , [2] = custom;

  projectList! : ProjectModel[];
  projectsSubscription = new Subscription();

  constructor(private projectService : ProjectsService, public dialog: MatDialog, private fb_2: FormBuilder) {
    this.projectsSubscription = this.projectService.projectsSubject.subscribe(update => this.projectList = update);
    //this.projectList = this.projectService.projects;
    this.form = this.fb_2.group({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.projectService.updateSubscribers();
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

    this.selectValueChanged(event);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectList, event.previousIndex, event.currentIndex);
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(NewTopologyDialog, {
      width: '460px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.projectList);
      this.projectService.updateSubscribers();
    });
  }

  openAnimationDialog(): void {
    let dialogRef2 = this.dialog.open(AnimationDialog, {
      width: '260px',
      backdropClass: 'backdropBackground'
    });

    dialogRef2.afterClosed().subscribe((result) => {
    });
  }

  selectValueChanged(event: any) {
    let name = "name";

    if (event.target.value == name)
      this.projectList.sort(this.sortByName);
  }

  sortByName = function (a: any, b: any) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }

  onSearchCalled()
  {
    // @ts-ignore
    this.searchText = this.form.get('search').value;
  }
}

@Component({
  selector: 'new-topology-dialog',
  templateUrl: 'new-topology-dialog.html'
})
export class NewTopologyDialog {

  form: FormGroup;

  constructor(private projectService : ProjectsService, private fb: FormBuilder , public dialogRef: MatDialogRef<NewTopologyDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    // @ts-ignore
    const userName = this.form.get('userName').value;
    // @ts-ignore
    const projectName = this.form.get('projectName').value;
    // @ts-ignore
    const description = this.form.get('description').value;
    this.projectService.addProject(new ProjectModel(projectName, new Date(), userName, description));
    this.dialogRef.close();
  }

}

@Component({
  selector: 'animation-dialog',
  templateUrl: 'animation-dialog.html',
  styleUrls: ['./animation-dialog.scss']
})
export class AnimationDialog implements OnInit{

  constructor(private router : Router, public dialogRef: MatDialogRef<NewTopologyDialog>) {
    };

  ngOnInit(): void {
    setTimeout(()=> {
      this.router.navigateByUrl('topology');
      this.dialogRef.close();
    }, 2000);

  }
}


