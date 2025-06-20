import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class FormStatusComponent implements OnInit {

  @Input() message : string  = '';
  @Input() isError : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
