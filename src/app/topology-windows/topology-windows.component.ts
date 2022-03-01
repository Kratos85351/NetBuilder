import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AnimationDialog, NewTopologyDialog} from "../project-window/project-window.component";

@Component({
  selector: 'app-topology-windows',
  templateUrl: './topology-windows.component.html',
  styleUrls: ['./topology-windows.component.scss']
})
export class TopologyWindowsComponent implements OnInit {

  gridState : boolean = true;
  zoomValue : number = 100;
  miniWindowsStates : boolean [] =[false, false, false] // 0: Devices 1: CLI 2: Settings

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchGrid(){
    this.gridState = !this.gridState;
  }

  onZoomPlus(){
    this.zoomValue += 5;
  }

  onZoomMinus(){
    this.zoomValue -= 5;
  }

  getHeightDevices() : string {
    if(!this.miniWindowsStates[0])
      return '29px'
    return '297px'
  }

  getHeightCLI() : string {
    if(!this.miniWindowsStates[1])
      return '29px'
    return '297px'
  }

  getHeightSettings() : string {
    if(!this.miniWindowsStates[2])
      return '29px'
    return '297px'
  }

  switchMiniWindowStateDevice(){ this.miniWindowsStates[0] = !this.miniWindowsStates[0]}
  switchMiniWindowStateCLI(){this.miniWindowsStates[1] = !this.miniWindowsStates[1]}
  switchMiniWindowStateSettings(){this.miniWindowsStates[2] = !this.miniWindowsStates[2]}
}
