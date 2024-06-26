import { Component ,AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';
import { MapService } from '@app/shared/services/map.service';

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
  selector: 'app-our-location',
  templateUrl: './our-location.component.html',
  styleUrls: ['./our-location.component.css']
})
export class OurLocationComponent implements AfterViewInit , OnInit{
  @ViewChild('searchBox', { static: false }) searchBoxRef!: ElementRef;

  locations: any[] = [];
  area: any[] = [];
  langMain: any;
  latMain: any;
  locationsArea: any[] = [];
  isLoading: boolean = false;
  selectedLocationId: number | null = null;
  selectedAreaId: any | null = null;

  center: google.maps.LatLngLiteral = { lat: 26.8206, lng: 30.8025 }; // Center of Egypt
  zoom = 4;

  options: google.maps.MapOptions = {
    styles: mapStyles
  };

  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  infoWindow!: google.maps.InfoWindow;

  constructor(private serv: MapService) {}

  ngOnInit(): void {
    this.loadAreas();
    this.getAllLocations();
  }

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

      const bounds = new google.maps.LatLngBounds();
      places?.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const position = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };

        this.createCustomMarker(position.lat, position.lng, 'Search Result', ''); // Empty string for image

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
    });

    this.infoWindow = new google.maps.InfoWindow();
  }

  getAllLocations(): void {
    this.isLoading = true;
    this.serv.getLocationsAll().subscribe({
      next: (response) => {
        this.locations = response.Locations.data;
        this.isLoading = false;
        this.addMarkers();
      }
    });
  }

  addMarkers(): void {
    this.locations.forEach(location => {
      const position = { lat: parseFloat(location.lat), lng: parseFloat(location.lng) };
      this.createCustomMarker(position.lat, position.lng, location.name, location.image);
    });
  }

  loadAreas(): void {
    this.serv.getAreas().subscribe(areas => {
      this.area = areas.sliders.data;
    });
  }

  loadLocations(): void {
    this.serv.getLocations(this.selectedAreaId).subscribe(locations => {
      this.locationsArea = locations.Locations.data;
      this.clearMarkers();
      this.locationsArea.forEach(location => {
        const position = { lat: parseFloat(location.lat), lng: parseFloat(location.lng) };
        this.createCustomMarker(position.lat, position.lng, location.name, location.image);
      });
    });
  }

  clearMarkers(): void {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
    document.querySelectorAll('.custom-marker').forEach(marker => marker.remove());
  }

  onAreaChange(): void {
    this.loadLocations();
  }

  onLocationChange(): void {
    if (this.selectedLocationId) {
      const selectedLocation = this.locationsArea.find(location => location.id === this.selectedLocationId);
      if (selectedLocation) {
        const position = { lat: parseFloat(selectedLocation.lat), lng: parseFloat(selectedLocation.lng) };
        this.map.setCenter(position);
        this.map.setZoom(14);

        this.clearMarkers();

        this.createCustomMarker(position.lat, position.lng, selectedLocation.name, selectedLocation.image);
      }
    }
  }

  search(): void {
    if (this.selectedLocationId) {
      const position = { lat: parseFloat(this.latMain), lng: parseFloat(this.langMain) };
      const image = 'assets/images/navbar/logo.png'; // Default image for search result

      this.map.setCenter(position);
      this.map.setZoom(14);

      this.clearMarkers();

      this.createCustomMarker(position.lat, position.lng, 'Search Result', image); // Empty string for image
    } else {
      alert('Please select a location.');
    }
  }

  getLatAndLang(event: any): void {
    const [lat, lng] = event.target.value.split(',').map(Number);
    this.latMain = lat;
    this.langMain = lng;
  }

  createCustomMarker(lat: number, lng: number, title: string, image: string): void {
    const defaultImage = 'assets/images/navbar/logo.png';
    const markerImage = image || defaultImage; // Use default image if no image provided

    const div = document.createElement('div');
    div.className = 'custom-marker';
    div.innerHTML = `
      <div class="marker-content">
        <img src="assets/images/navbar/logo.png" alt="marker">
      </div>
    `;
    div.style.position = 'absolute';
    div.style.transform = 'translate(-50%, -100%)';

    const overlay = new google.maps.OverlayView();
    overlay.onAdd = () => {
      const panes = overlay.getPanes();
      panes?.overlayMouseTarget.appendChild(div);
    };
    overlay.draw = () => {
      const point = overlay.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(lat, lng));
      if (point) {
        div.style.left = `${point.x}px`;
        div.style.top = `${point.y}px`;
      }
    };
    overlay.onRemove = () => {
      div.remove();
    };
    overlay.setMap(this.map);

    div.addEventListener('click', () => {

      const infoContainer = document.createElement('div');
      const div = document.createElement('div');
      div.className = 'infoContainer'
    div.className = 'custom-marker';
    div.innerHTML = `
        <div class="infoContainer">
      <div class="marker-content w-100 h-75 rounded-3 ">
       <img src="assets/images/navbar/logo.png" class="imageWindow"  alt="${title}"/>
       </div>
       <h2 class="my-4   w-100" >${title}</h2>
       <span class="   w-100" >${title}</span>

      </div>
    `


      const contentString = `
        <div style="text-align: center;">

        </div>
      `;
      this.infoWindow.setContent(div);
      this.infoWindow.setPosition({ lat, lng });
      this.infoWindow.open(this.map);
    });
  }
}
