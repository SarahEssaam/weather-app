import { Component, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SearchService } from 'src/app/services/search.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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
    this.searchInput = (<HTMLLinkElement>event.target).innerHTML;
    this.currentLocation = loc;
  }
  updateTemplate(event: Event){
    this.locations.length = 0;
    this.searchInput = '';
    this.appComponent.setGlobalData(this.currentLocation);
  }
  
  getListPosition(){
    if (this.locations.length == 0){
      return 'relative';
    } else{
      return 'absolute';
    }
      
  }

}
