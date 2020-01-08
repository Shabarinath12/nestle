import { Component, OnInit } from '@angular/core';

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
      img: "img-1",
      name: "bharghav",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "3",
      img: "img-1",
      name: "geem",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "4",
      img: "img-1",
      name: "safari",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    },
    {
      id: "5",
      img: "img-1",
      name: "apple",
      mobile: 9999999990,
      email: "pava@gmail.com",
      pass: "123secrete"
    }
  ];

}
