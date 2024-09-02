export type EventID = string;

export default interface EventItem {
    id: string;
    title: string;
    imageURL: string;
    expirationDate: Date;
}