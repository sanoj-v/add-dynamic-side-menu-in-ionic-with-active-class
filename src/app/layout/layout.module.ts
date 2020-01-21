import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlankLayout } from "./blank-layout/blank.component";
import { FullLayout } from "./full-layout/full.component";
@NgModule({
  declarations: [BlankLayout, FullLayout],
  imports: [CommonModule],
  exports: [BlankLayout, FullLayout],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
