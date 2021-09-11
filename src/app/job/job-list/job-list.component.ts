import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Job } from 'src/app/core/job.model';
import { LoadJobs } from '../state/job.actions';
import { JobState } from '../state/job.state';

@Component({
	selector: 'app-job-list',
	templateUrl: './job-list.component.html',
	styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

	@Select(JobState.jobs) jobs$: Observable<Job[]>;
	
	constructor(private store: Store) {
		this.store.dispatch(new LoadJobs());
	}

	ngOnInit() {
	}

}
