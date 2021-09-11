import { Job } from "src/app/core/job.model";

export class LoadJobs {
    static readonly type = '[Job] Load Jobs';
    constructor() { }
}

export class LoadJobSuccess {
    static readonly type = '[Job] Load Jobs Success';
    constructor(public readonly payload: Job[]) { }
}

export class LoadJobFail {
    static readonly type = '[Job] Load Jobs Fail';
    constructor(public readonly error: any) { }
}