export enum TaskCategory {
  Personal = 'Personal',
  Work = 'Work',
  Shopping = 'Shopping',
  Entertainment = 'Entertainment',
  Fitness = 'Fitness',
  PhoneCall = 'Phone Call',
  Other = 'Other'
}

  export class Task {
    _id: string ="";
    title: string="";
    category: (TaskCategory) =TaskCategory.Other;
    expiration: Date = new Date();
    description: string="";
    completed: boolean=false;
  
    // constructor(id: string, title: string, category: TaskCategory, expiration: Date, description: string, completed: boolean) {
    //   this._id = id;
    //   this.title = title;
    //   this.category = category;
    //   this.expiration = expiration;
    //   this.description = description;
    //   this.completed = completed;
    // }
  }
    