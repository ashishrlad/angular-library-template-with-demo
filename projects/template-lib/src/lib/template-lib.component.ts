import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-lib-template-lib',
  template: `
    <p>
      This is the template-lib-component from the library project."
    </p>
  `,
  styles: []
})
export class TemplateLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
