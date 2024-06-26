import { Component ,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '@app/contact-us/services/contact.service';



const    mapStyles: google.maps.MapTypeStyle[] = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#e8eaed' }]  // White background for all elements
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#000000' }]  // Black text
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#e8eaed' }]  // White text background
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#e8eaed' }]  // White administrative boundaries
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#e8eaed' }]  // White country borders
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#e8eaed' }]  // White landscape
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#e8eaed' }]  // White points of interest
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]  // White roads
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#dcdcdc' }]  // Light grey road strokes
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#000000' }]  // Black road labels
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]  // White transit elements
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#blue' }]  // Light grey water
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#000000' }]  // Black water labels
  }
];
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit{
constructor(private _ContactService:ContactService){}

successMessage:string=''

contactUs:FormGroup = new FormGroup({
  first_name: new FormControl(null, Validators.required),
  last_name: new FormControl(null, Validators.required),
  email: new FormControl(null, [Validators.required, Validators.email]),
  phone: new FormControl(null, Validators.required),
  message: new FormControl(),
})



sendContact(sendContactForm:FormGroup)
{
  console.log(sendContactForm.value)
  this._ContactService.sendContactMain(sendContactForm.value).subscribe({
    next:(Response) => 
      {
        this.successMessage= Response.message
        console.log(Response)
      },
      error(err) {
        console.log(err)
      },
  })
}














  
  center: google.maps.LatLngLiteral = { lat: 24.7136, lng: 46.6753 };
  zoom = 12;





  options: google.maps.MapOptions = {
    styles: mapStyles
  };

  map!: google.maps.Map;


  ngAfterViewInit(): void {
    const input = document.getElementById('search-box') as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);

    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: this.center,
      zoom: this.zoom,
      styles: mapStyles
    });

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places?.length === 0) {
        return;
      }

      // Clear out the old markers.
      const markers: google.maps.Marker[] = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places?.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: this.map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
    });
  }


  
}
