import { Subscription } from 'rxjs';

export interface ErrorHandler {
    message: string ;
    errorSub: Subscription;
}