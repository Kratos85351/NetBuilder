export class ProjectModel{

  constructor( public name : string,
               public date : Date,
               public user : string,
               public description : string

  ) {
    this.name = name + ".xml";
    this.user = "@" + user;
  }
}
