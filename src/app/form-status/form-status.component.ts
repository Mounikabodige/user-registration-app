import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormStatusComponent implements OnInit {

  @Input() message = '';
  @Input() isError = false;

  constructor() { }

  ngOnInit(): void {
  }

}
