import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topology-windows',
  templateUrl: './topology-windows.component.html',
  styleUrls: ['./topology-windows.component.scss']
})
export class TopologyWindowsComponent implements OnInit {

  gridState : boolean = true;
  zoomValue : number = 100;
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

  getGridStatus() : string{
    if(this.gridState)
      return ".big-container"
    return ".big-container-grid-off";
}
}
