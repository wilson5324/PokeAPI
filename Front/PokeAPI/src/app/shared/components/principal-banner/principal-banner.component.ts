import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-banner',
  templateUrl: './principal-banner.component.html',
  styleUrls: ['./principal-banner.component.scss']
})
export class PrincipalBannerComponent implements OnInit {

  @Input() title: string = "PIKACHU POWER";
  @Input() description: string = "Master the art of catching Pikachu in the game ";
  @Input() tags = ["text1","text2"];
  @Input() tagsUrl = ["url1","url2"];
  @Input() urlImg: string = "https://images5.alphacoders.com/135/1351278.png";
  constructor() { }

  ngOnInit(): void {
  }

}
