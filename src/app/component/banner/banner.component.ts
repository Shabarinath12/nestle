import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profiles: any[] = [
    {
      id: "1",
      img: "../../../assets/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg",
      name: "pavan",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "2",
      img: "../../../assets/11465381155576-Campus-Sutra-Blue-T-shirt-4491465381155293-1.jpg",
      name: "bharghav",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "3",
      img: "../../../assets/Myntra-Men-Black-Krrish-3-Attitude-Print-T-shirt_4d0c40a73c2abd6e3d99d1f2a0fdb55a_images.jpg",
      name: "geem",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "4",
      img: "../../../assets/11465381155576-Campus-Sutra-Blue-T-shirt-4491465381155293-1.jpg",
      name: "safari",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    }
  ];

}
