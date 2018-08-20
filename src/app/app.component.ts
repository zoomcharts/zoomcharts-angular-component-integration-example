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
      license: "ZCS-t2hr008sw: ZoomCharts SDK Single Developer Licencefor agn..@..s.com " +
        " (valid for development only); upgrades until: 2019-07-06",
      licenseKey: "9126df48b3cba9f773d30a38094a355b9ecab3f32b1f3fe01d" +
        "60a4a0e99243d4fd0137e001d9d775bb721af68df3b41f1e458273468ad26d6c8bd6355a4d1c0" +
        "9e2d479d777248b48754df777d13b3f580764ea21ce7ae7528fc070dbd5b328ebd628108f8a09" +
        "d645c59b8d990501ff35f9bdb630466b31309ca24861281f805a5e2027f4252b6cd4f3075f1fc" +
        "282816ed728a997b207afbc2ab28d9fb40f0ef50811c561c5f4cc9839422526b6a01b4b3c124f" +
        "9502bab914bf9c3ee333d32e59daf87cbdfa92bf444f5fd3a5518a2cc399a5486a42cdd7aeff0" +
        "c5cf4cb0c7854d26160ec74075e04977b0f29a1205fe3e8ba889c4e1ca7d7450a5ef583152037"
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
