import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZoomchartsService } from '@dvsl/angular-zoomcharts';

@Component({
  selector: 'app-root',
  template: `
  <div class='chart-container'>
    <div class='chart chart-left'>
      <app-zoomcharts-component [settings]='piechartSettings' [id]='"component-1"'></app-zoomcharts-component>
    </div>
  </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private zcService: ZoomchartsService) {
    
    // add license key
    this.zcService.setLicenseKey({
      license: '',
      licenseKey: ''
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
