import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {
    this.galleryOptions = [
      {
      'thumbnailsColumns': 3,
      'thumbnailsRows': 1,
      'thumbnailsPercent': 40,
      'imagePercent': 100,
       'thumbnailMargin': 2,
        'thumbnailsMargin': 2,
        'width': '100%',
        'height': '71.3vh',
        'previewCloseOnEsc': true,
        'previewKeyboardNavigation': true,
        'previewCloseOnClick': true,
        'imageSwipe': true,
        'previewSwipe': true,
        'thumbnailsSwipe': true
      },
      { 'breakpoint': 992,
       'width': '100%',
        'height': '71.3vh',
       'thumbnailsColumns': 3
      },
      { 'breakpoint': 600,
       'width': '100%',
        'height': '71.3vh',
         'thumbnailsColumns': 2
      }];

    this.galleryImages = [
      {
        small: 'assets/galeria/1-small.jpg',
        medium: 'assets/galeria/1-medium.jpg',
        big: 'assets/galeria/1-big.jpg'
      },
      {
        small: 'assets/galeria/2-small.jpg',
        medium: 'assets/galeria/2-medium.jpg',
        big: 'assets/galeria/2-big.jpg'
      },
      {
        small: 'assets/galeria/3-small.jpg',
        medium: 'assets/galeria/3-medium.jpg',
        big: 'assets/galeria/3-big.jpg'
      },
      {
        small: 'assets/galeria/4-small.jpg',
        medium: 'assets/galeria/4-medium.jpg',
        big: 'assets/galeria/4-big.jpg'
      },
      {
        small: 'assets/galeria/5-small.jpg',
        medium: 'assets/galeria/5-medium.jpg',
        big: 'assets/galeria/5-big.jpg'
      },
      {
        small: 'assets/galeria/6-small.jpg',
        medium: 'assets/galeria/6-medium.jpg',
        big: 'assets/galeria/6-big.jpg'
      },
      {
        small: 'assets/galeria/7-small.jpg',
        medium: 'assets/galeria/7-medium.jpg',
        big: 'assets/galeria/7-big.jpg'
      },
      {
        small: 'assets/galeria/8-small.jpg',
        medium: 'assets/galeria/8-medium.jpg',
        big: 'assets/galeria/8-big.jpg'
      },
      {
        small: 'assets/galeria/9-small.jpg',
        medium: 'assets/galeria/9-medium.jpg',
        big: 'assets/galeria/9-big.jpg'
      }
    ];
  }
}
