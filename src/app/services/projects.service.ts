import {Injectable} from "@angular/core";
import {ProjectModel} from "../models/project.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn : 'root'})

export class ProjectsService{
  projectsSubject = new Subject<any[]>();

  projects : ProjectModel [] = [
    new ProjectModel(
      "High-level_security_network",
      new Date(),
      "gateau_chocolat22",
      "Attacks on a network can be devastating and can result in a loss of time and money due to damage or theft of important information or assets. Intruders who gain access by modifying software or exploiting software vulnerabilities are threat actors. After the threat actor gains access to the network, four types of threats may arise: information theft, data loss and manipulation, identity theft, and disruption of service. There are three primary vulnerabilities or weaknesses: technological, configuration, and security policy. The four classes of physical threats are: hardware, environmental, electrical, and maintenance."
    ),
    new ProjectModel(
      "Big_company",
      new Date(),
      "hot_wire53",
      "Networks vary in size, shape, and function. They can be as complex as devices connected across the internet, or as simple as two computers directly connected to one another with a single cable, and anything in-between. However, simply having a wired or wireless physical connection between end devices is not enough to enable communication. For communication to occur, devices must know “how” to communicate."
    ),
    new ProjectModel(
      "Home_network",
      new Date(),
      "gateau_marbré",
      "Today almost every home and small  office has a local network, and an Internet connection.  The home network or small area network enables multiple devices e.g. PCs, tablets etc to connect to each other, and also to connect to the internet. A small network design is usually simple. The number and type of devices included are significantly reduced compared to that of a larger network."
    ),
    new ProjectModel(
      "Network_attacks_simulation",
      new Date(),
      "wannaCry",
      "The WannaCry ransomware attack was a worldwide cyberattack in May 2017 by the WannaCry ransomware cryptoworm, which targeted computers running the Microsoft Windows operating system by encrypting data and demanding ransom payments in the Bitcoin cryptocurrency."
    ),
    new ProjectModel(
      "Network_attacks_simulation",
      new Date(),
      "wannaCry",
      "The WannaCry ransomware attack was a worldwide cyberattack in May 2017 by the WannaCry ransomware cryptoworm, which targeted computers running the Microsoft Windows operating system by encrypting data and demanding ransom payments in the Bitcoin cryptocurrency."
    ),
    new ProjectModel(
      "Network_attacks_simulation",
      new Date(),
      "wannaCry",
      "The WannaCry ransomware attack was a worldwide cyberattack in May 2017 by the WannaCry ransomware cryptoworm, which targeted computers running the Microsoft Windows operating system by encrypting data and demanding ransom payments in the Bitcoin cryptocurrency."
    )
  ]


  addProject(projectModel : ProjectModel){
  this.projects.push(projectModel)
  }

  updateSubscribers(){
    this.projectsSubject.next(this.projects);
  }
}
