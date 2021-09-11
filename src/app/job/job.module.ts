import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list/job-list.component';
import { JobItemComponent } from './job-item/job-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JobListComponent, JobItemComponent],
  exports: [JobListComponent, JobItemComponent]
})
export class JobModule { }
