import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { asapScheduler, of, scheduled } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Job } from "src/app/core/job.model";
import { JobApiService } from '../shared/job-api.service';
import { LoadJobFail, LoadJobs, LoadJobSuccess } from './job.actions';

export class JobStateModel {
    public jobs: Job[];
}

@State<JobStateModel>({
    name: 'job',
    defaults: {
        jobs: []
    }
})
@Injectable()
export class JobState {
    constructor(private jobApi: JobApiService) { }

    @Selector()
    static jobs(state: JobStateModel): Job[] {
        return state.jobs;
    }

    @Action(LoadJobs)
    loadJobs(ctx: StateContext<JobStateModel>) {
        return this.jobApi.getJobs().pipe(
            tap((data) => {
                asapScheduler.schedule(() => ctx.dispatch(new LoadJobSuccess(data)));
            }),
            catchError(error =>
                scheduled(ctx.dispatch(new LoadJobFail(error)), asapScheduler)
            ));
    }

    @Action(LoadJobSuccess)
    loadJobsSuccess(ctx: StateContext<JobStateModel>, action: LoadJobSuccess) {
        ctx.patchState({ jobs: action.payload });
    }

    @Action(LoadJobFail)
    loadJobsFail(_ctx: StateContext<JobStateModel>, action: LoadJobFail) {
        console.error(action.error);
    }
}