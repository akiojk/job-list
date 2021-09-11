import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobModule } from './job/job.module';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { JobState } from './job/state/job.state';
import { HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { TranslationEn } from './locale/translate-en';

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
		]),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: () => { return new EnTranslateLoader() },
				deps: []
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

export class EnTranslateLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		switch (lang) {
			default:
				return of(TranslationEn.TRANSLATION);
		}
	}
}
