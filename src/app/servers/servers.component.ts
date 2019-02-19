import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', // The [] means that it is like a CSS selector.
  //selector: '.app-servers', // Acts like a selector of a div class.
  selector: 'app-servers',
  //template: `<app-server></app-server>
  //           <app-server></app-server>`, // You can link to templateUrl or template but one must be present. Fine for small lines of code.
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'Testserver';

  constructor() { 
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  } 

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
