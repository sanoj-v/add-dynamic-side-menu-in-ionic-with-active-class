import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LayoutModule } from './layout/layout.module';
import { BlankLayout } from "./layout/blank-layout/blank.component";
const routes: Routes = [
  {
    path: "login",
    loadChildren: "./login/login.module#LoginPageModule",
    component: BlankLayout
  },
  {
    path: "",
    loadChildren: "./menu/menu.module#MenuPageModule"
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
