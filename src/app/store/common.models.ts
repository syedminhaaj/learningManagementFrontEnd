export interface Course {
    id: number;
    courseName: string;
    courseDuration: string;
    lessons:Lesson[]
  }

  export interface Lesson{
      lessonId:number;
      lessonText:string;
      lessonName:string;
      link:string;
  }
  
  
  export interface Instructor {
    id: number;
    name: string;
    teachingExp: number;
    email: string;
    courses: Course[];
  }