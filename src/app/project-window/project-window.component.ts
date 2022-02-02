import {Component, Inject, OnInit} from '@angular/core';
import {ProjectsService} from "../services/projects.service";
import {ProjectModel} from "../models/project.model";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.scss']
})
export class ProjectWindowComponent implements OnInit {

  animo!: string;
  namer!: string;

  btn_text : boolean = false;
  btn_thumb : boolean = false;
  btn_list : boolean = true;
  btn_box : boolean = false;

  sortByValue : number [] = [0,0,0]; //[0] = name, [1] = lastEdited , [2] = custom;

  projectList! : ProjectModel[];
  projectsSubscription = new Subscription();

  constructor(private projectService : ProjectsService, public dialog: MatDialog) {
    this.projectsSubscription = this.projectService.projectsSubject.subscribe(update => this.projectList = update);
    //this.projectList = this.projectService.projects;
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
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectList, event.previousIndex, event.currentIndex);
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height: '300px',
      data: { name: this.namer, animal: this.animo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(this.projectList);
      this.projectService.updateSubscribers();
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialog {

  form: FormGroup;

  constructor(private projectService : ProjectsService, private fb: FormBuilder, public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
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
