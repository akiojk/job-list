export class Job {
    createdAt: Date;
    employmentType: EmploymentType;
    endDate?: Date;
    id: string;
    jobDurationDisplay: JobDuration;
    jobType: JobType;
    location: JobLocation;
    profession: Profession;
    rate: Rate;
    startDate: string;
    timeFrame: TimeFrame;
    title: string;
}

export class JobDuration {
    duration: number;
    durationType: JobDurationType;
}

export class Profession {
    name: string;
    id: number;
}

export class Rate {
    max: number;
    min: number;
    type: RateType;
}

export class JobLocation {
    postcode: string;
    suburb: string;
    id: number;
    state: string;
}

export enum RateType {
    FIXED = 'FIXED', QUOTE = 'QUOTE', HOUR = 'HOUR'
}

export enum EmploymentType {
    PART_TIME = 'PART_TIME',
    SUBBIE = 'SUBBIE',
    APPRENTICE = 'APPRENTICE'
}

export enum JobType {
    COMMERCIAL = 'COMMERCIAL'
}

export enum JobDurationType {
    DAYS = 'DAYS', WEEKS = 'WEEKS'
}

export enum TimeFrame {
    NEXT_FEW_WEEKS = 'NEXT_FEW_WEEKS', NEXT_FEW_DAYS = 'NEXT_FEW_DAYS'
}