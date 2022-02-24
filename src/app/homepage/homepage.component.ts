import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProjectsService} from "../services/projects.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  onContinue() {
    this.router.navigateByUrl('projects');
  }

}
