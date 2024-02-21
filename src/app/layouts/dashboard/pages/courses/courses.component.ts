import { Component } from '@angular/core';
import { course } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  displayedColumns: string[] = ['id', 'teacher', 'date', 'type', 'actions'];

  courses: course[]= []
  // constructor(private coursesService: CoursesService){
  //   this.coursesService.getCourses().subscribe({
  //     next: (courses) =>{
  //       this.courses = courses;
  //     }
  //   })
  // }
  // El servicio arroja un error en consola: 
  /*
  ERROR NullInjectorError: R3InjectorError(_DashboardModule)[_CoursesService -> _CoursesService -> _CoursesService]: 
  NullInjectorError: No provider for _CoursesService!
    at NullInjector.get (core.mjs:5682:27)
    at R3Injector.get (core.mjs:6125:33)
    at R3Injector.get (core.mjs:6125:33)
    at R3Injector.get (core.mjs:6125:33)
    at ChainedInjector.get (core.mjs:15427:36)
    at lookupTokenUsingModuleInjector (core.mjs:4193:39)
    at getOrCreateInjectable (core.mjs:4241:12)
    at Module.ɵɵdirectiveInject (core.mjs:12045:19)
    at NodeInjectorFactory.CoursesComponent_Factory [as factory] (courses.component.ts:11:30)
    at getNodeInjectable (core.mjs:4447:44)
  */
}
