import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpFetchService } from './http-fetch.service';
import { ErrorHandler } from './error-handler.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Application';
//   error: ErrorHandler;
//  // isFetching = false;
  
//   constructor(private http: HttpClient, private httpFetch: HttpFetchService, error: ErrorHandler) {}
//   ngOnInit(){
//       this.error.errorSub = this.httpFetch.error.subscribe(errorMessage => {
//       this.error.message = errorMessage;
//     });

//     //this.isFetching = true;
//     this.httpFetch.fetch().subscribe(
//       response => {
//         console.log(response);
//       },
//       error => {
//    //     this.isFetching = false;
//         this.error.message = error.message;
//       }
//     );
//   }
//   ngOnDestroy() {
//     this.error.errorSub.unsubscribe();
//   }
}
