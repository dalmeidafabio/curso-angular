import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'events', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
