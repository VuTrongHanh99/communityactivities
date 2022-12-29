import { RequestBase } from './RequestBase';

export class RequestLogin extends RequestBase {
    override UserName!: string;
    Password!: string;
    UserCategory!: number;
}