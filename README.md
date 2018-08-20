# The Application Shell

## Set up the Development Enviroment

You need to set up your development environment before you can do anything.

Install Node.js® and npm if they are not already on your machine.

Install the Angular CLI globally.
```
npm install -g @angular/cli
```

## Create new project

```
ng new my-zoomchartsApp
```

## Serve the application

Go to project directory. 
```
cd my-zoomchartsApp
```

## Install and import the ZoomCharts component library

### Install ZoomCharts component library via npm

```
npm  install --save @dvsl/angular-zoomcharts
```

### _src/app/app.module.ts_ file

Import ZoomchartsModule into app.module.ts.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZoomchartsModule, WindowRef } from '@dvsl/angular-zoomcharts';

@NgModule({
  declarations: [
    AppComponent
  ], imports: [
    BrowserModule,
    ZoomchartsModule.forRoot({})
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }  
```

### _src/app/app.component.ts_ file

Import ZoomchartsService into app.component.ts.

```javascript
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZoomchartsService } from '@dvsl/angular-zoomcharts';

@Component({
  selector: 'app-root',
  template: `
  <div class='chart-container'>
    <div class='chart'>
      <app-zoomcharts-component [settings]='piechartSettings' [id]='"component-1"'></app-zoomcharts-component>
    </div>
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private zcService: ZoomchartsService) {

    // add license key
    this.zcService.setLicenseKey({
      license: "",
      licenseKey: ""
    });
  }

  // set data
  piechartSettings: any = {
    pieChart: {
      area: { height: 350 },
      data: {
        preloaded: {
          subvalues: [
            {
              id: 'foo', value: 100, subvalues: [
                { id: 'foo-1', value: 50, style: { expandable: false } },
                { id: 'foo-2', value: 50, style: { expandable: false } }
              ]
            },
            { id: 'bar', value: 50, style: { expandable: false } },
            { id: 'baz', value: 30, style: { expandable: false } }
          ]
        }
      }
    }
  }

  ngOnInit() {

    this.zcService.getComponent('component-1').then(component => {
      component.instance.chart.updateSettings({
        height: 450
      });
    });

  }
}
```

To display the ZoomchartsComponent, you must add it to the template.
```html
<app-zoomcharts-component [settings]='piechartSettings' [id]='"component-1"'></app-zoomcharts-component>
```

### _.angular-cli.json_ file

```javascript
//Add { "glob": "**/*", "input": "../node_modules/@dvsl/angular-zoomcharts/assets", "output": "./assets/" }

"apps": [
   {
      ...
     "assets": [
       "assets",
       "favicon.ico",
       { "glob": "**/*", "input": "../node_modules/@dvsl/angular-zoomcharts/assets", "output": "./assets/" }
     ],
      ...
   }
 ],
```

## Launch the server

```
ng serve --open
```
