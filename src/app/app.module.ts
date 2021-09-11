import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobModule } from './job/job.module';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { JobState } from './job/state/job.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JobModule,
    CoreModule,
    HttpClientModule,
    NgxsModule.forRoot([
      JobState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
