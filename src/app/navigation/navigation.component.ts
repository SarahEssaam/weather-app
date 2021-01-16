import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/app/app-routing/data.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, public data: DataProvider) { }

  ngOnInit(): void {
  }
  onShowStats(){
      
      console.log(this.data.climateAverages);
      // return window.location.origin+'/statistics/';
      this.router.navigateByUrl('/statistics');

      //  this.router.navigate([]).then(result => {  window.open('/statistics', '_blank'); });
    }
}
