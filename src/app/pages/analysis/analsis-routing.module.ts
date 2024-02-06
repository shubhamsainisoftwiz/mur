import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis.component';
import { MonthlyAnalysisComponent } from './monthly-analysis/monthly-analysis.component';
import { AnalysisTemplateComponent } from './analysis-template/analysis-template.component';
import { CargoAnalysisComponent } from './cargo-analysis/cargo-analysis.component';
import { ShaAnalysisComponent } from './sha-analysis/sha-analysis.component';
import { ScgAnalysisComponent } from './scg-analysis/scg-analysis.component';



const routes: Routes = [{
  path: '',
  component: AnalysisComponent,
  children: [
    {
      path: 'monthly-analysis',
      component: MonthlyAnalysisComponent,
    },
    {
      path: 'analysis-template',
      component: AnalysisTemplateComponent,
    },
    {
      path: 'cargo-analysis',
      component: CargoAnalysisComponent,
    },
    {
      path: 'sha-analysis',
      component: ShaAnalysisComponent,
    },
    {
      path: 'scg-analysis',
      component: ScgAnalysisComponent,
    },

  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AnalysisRoutingModule { }
