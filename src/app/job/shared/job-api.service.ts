import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Job } from 'src/app/core/job.model';
import { catchError } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class JobApiService {
	constructor(private http: HttpClient) { }

	getJobs(): Observable<Job[]> {
		return this.http.get<Job[]>(`./assets/jobs.json`).pipe(catchError((error: any) => throwError(error))); // mock data
	}
}
