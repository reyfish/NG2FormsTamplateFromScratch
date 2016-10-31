import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-user-phone',
  templateUrl: './user-phone.component.html',
  styleUrls: ['./user-phone.component.css'],
  providers: [
        {
      provide: NG_VALUE_ACCESSOR,      
      multi: true,
      useExisting: forwardRef(() => UserPhoneComponent),     
    }
  ]
})
export class UserPhoneComponent implements ControlValueAccessor, OnInit {

  constructor() { }

  @Output() newPhone = new EventEmitter<any>();

  @Input() phoneNumber: string;
  propagateChange = (_: any) => {}

  writeValue(value: any) {
    if(value) {
      this.phoneNumber = value;
    }      
  }

    onChange = (_) => {};
    onTouched = () => {};

 registerOnChange(fn: (_: any) => void): void { this.propagateChange = fn; }
 registerOnTouched(){}
 setDisabledState(isDisabled: boolean): void {};

  ngOnInit() {
  }

  onKey(value: string){
    this.phoneNumber = value;
    this.propagateChange(this.phoneNumber);
    this.newPhone.emit(this.phoneNumber);
  }


}
