import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { UserPhoneComponent } from './user-phone/user-phone.component';

// const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new ValueProvider(
//   NG_VALUE_ACCESSOR, {
//     useExisting: forwardRef(() => UserPhoneComponent),
//     multi: true
//   });

@NgModule({
  declarations: [
    TemplateDrivenComponent,
    AppComponent,
    UserPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,      
      multi: true,
      useExisting: forwardRef(() => UserPhoneComponent),     
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
