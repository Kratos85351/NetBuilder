import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAnimationDialogSaving(): void {
    let dialogRef3 = this.dialog.open(AnimationDialogSaving, {
      width: '260px',
      backdropClass: 'backdropBackground'
    });

    dialogRef3.afterClosed().subscribe((result) => {
    });
  }

}

@Component({
  selector: 'animation-dialog-saving',
  templateUrl: '../header/animation-dialog-saving.html',
  styleUrls: ['../header/animation-dialog-saving.scss']
})
export class AnimationDialogSaving implements OnInit{

  constructor(private router : Router, public dialogRef: MatDialogRef<AnimationDialogSaving>) {
  };

  ngOnInit(): void {
    setTimeout(()=> {
      this.router.navigateByUrl('projects');
      this.dialogRef.close();
    }, 2500);
  }
}
