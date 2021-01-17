import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SearchService } from 'src/app/search.service';
import { Location } from '../../../models/location.model';
import { MainAreaComponent } from '../main-area.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  locations: Array<Location>;
  searchInput: string='';
  currentLocation: Location;
  constructor(private appComponent: AppComponent, private searchService: SearchService, private myElement: ElementRef) {}
  onSearchInput(event: Event){
    this.searchInput  = (<HTMLTextAreaElement>event.target).value;
    console.log("event: "+(<HTMLTextAreaElement>event.target).value);
    // console.log(event.target.value);
    if ((<HTMLTextAreaElement>event.target).value ==''){
      this.locations.length = 0;
    } else{
      this.searchService.getMatchingLocations((<HTMLTextAreaElement>event.target).value, (loc) => {
        this.locations = loc;
        console.log("Added locations");
        console.log(this.locations);
      });
    }
  }
  updateSearchField(event: Event, loc:Location){
    this.locations.length = 0;
    console.log((<HTMLLinkElement>event.target).innerHTML); 
    // console.log(this.myElement.nativeElement.ViewChild('search-input')); 
    this.searchInput = (<HTMLLinkElement>event.target).innerHTML;
    this.currentLocation = loc;
  }
  updateTemplate(event: Event){
    this.locations.length = 0;
    this.searchInput = '';
    this.appComponent.setGlobalData(this.currentLocation);
  }
  ngOnInit(): void {
  }
  getListPosition(){
    if (this.locations.length == 0){
      return 'relative';
    } else{
      return 'absolute';
    }
      
  }

}
