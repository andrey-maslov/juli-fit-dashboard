import {RaRecord} from "react-admin";

export interface Event extends RaRecord {
    name: string
    date: string
    startsAt: string
    endsAt: string
    isFree: boolean
    totalCapacity: number
    trainer: string
    isCancelled: boolean
    publishedAt: Date
    createdAt: Date
    updatedAt: Date
}

export interface Category extends RaRecord {
    name: string;
}