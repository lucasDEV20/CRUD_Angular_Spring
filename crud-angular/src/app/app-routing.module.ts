import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:  Routes = [
  { path: '', pathMatch:'full', redirectTo: 'cousers'},

 { path: 'courses',
  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
