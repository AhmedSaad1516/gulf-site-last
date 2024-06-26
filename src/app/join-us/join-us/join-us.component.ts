import { HttpClient } from  '@angular/common/http';
import { Component, OnInit} from  '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { JoinUsService } from '../services/join-us.service';
import { Country } from '../interfaces/country';

interface UploadedFile {
  name: string;
  progress: number;
  uploading: boolean;
}


@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit{

  countries: any[] = [ ];
  selectedCountry:string=''
  placeholderValue:string='0106 831 5377'
  selectedFlag:string='https://flagcdn.com/w320/eg.png'
  selectedCode:string='+20'
  searchValue:string=''
  selectedPattern:string=''


getAllCountriesInfo()
{
  this._JoinUsService.getAllCountriesInfoMain().subscribe({
    next:(Response) => {
      this.countries = Response
    }
  })
}

  getFlagUrl(country: Country): string {
    return `https://flagcdn.com/w20/${country.isoCode}.png`;
  }


  selectedCountryFlagAndCode(i:any)
  {
    this.selectedFlag = this.countries[i].flags.png
    this.selectedCode = this.countries[i].idd.root + this.countries[i].idd.suffixes
    this.selectedPattern = this.countries[i].postalCode.regex
    console.log(this.selectedPattern)

  }


  selectedFiles: File[] = [];
  ifSuccess:string=''
  anotherReq:boolean=false;

 joinUs :FormGroup = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required,Validators.pattern(`${this.selectedPattern}`)]),
    message: new FormControl(),
    images: new FormControl()
  });
  constructor(private _JoinUsService:JoinUsService ){
    this.joinUs = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required,Validators.pattern(`${this.selectedPattern}`)]),
      message: new FormControl(),
      images: new FormControl()
    });
  }






  sendChance(): void {
    const formData = new FormData();
    formData.append('first_name', this.joinUs.get('first_name')?.value);
    formData.append('last_name', this.joinUs.get('last_name')?.value);
    formData.append('email', this.joinUs.get('email')?.value);
    formData.append('phone', this.joinUs.get('phone')?.value);
    formData.append('message', this.joinUs.get('message')?.value);

    this.selectedFiles.forEach((file, index) => {
      formData.append('images[]', file, file.name);
    });



    this._JoinUsService.sendChanceMain(formData).subscribe({
      next: (response) => {
        this.ifSuccess=response.message
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

sendAnother()
{
  this.ifSuccess='';
  this.anotherReq = false
}

  show:boolean=false
  uploadedFiles: UploadedFile[] = [];

    onFileSelected(event: any): void {
      const files: FileList = event.target.files;
      this.selectedFiles = Array.from(files);
      if (files.length > 0) {
        Array.from(files).forEach(file => {
          let newFile: UploadedFile = {
            name: file.name,
            progress: 0,
            uploading: true
          };
          this.uploadedFiles.push(newFile);

          // Simulate gradual file upload
          const uploadInterval = setInterval(() => {
            if (newFile.progress < 100) {
              newFile.progress += 10; // Increase progress
            } else {
              newFile.uploading = false;
              this.show = true; // Set show to true when upload is complete
              clearInterval(uploadInterval);
            }
          }, 1000); // Increment progress every second
        });
      }



    }


  deleteFile(index: number): void {
    if (index > -1 && index < this.uploadedFiles.length)
       {
      this.uploadedFiles.splice(index, 1);
    }
  }


ngOnInit(): void {
  this.getAllCountriesInfo()

  console.log(this.selectedCode)
}

}
