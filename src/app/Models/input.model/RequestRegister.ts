import { RequestBase } from './RequestBase';

export class RequestRegister extends RequestBase {
    override UserName!: string;
    Email!: string;
    UserCategory!: number;
}