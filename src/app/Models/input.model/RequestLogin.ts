import { RequestBase } from './RequestBase';

export class RequestLogin extends RequestBase {
    Password!: string;
    UserCategory!: number;
}