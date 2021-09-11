import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Job } from 'src/app/core/job.model';
@Component({
	selector: 'app-job-item',
	templateUrl: './job-item.component.html',
	styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {

	@Input() job: Job;

	constructor() { }

	ngOnInit() {
	}

	getCreatedFromNow() {
		return moment(this.job.createdAt).fromNow();
	}
}
