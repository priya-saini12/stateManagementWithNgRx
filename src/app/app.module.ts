import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter/my-counter.component';
import { counterReducer } from './state/counter/counter.reducer';
import { CustomInputCounterComponent } from './custom-input-counter/custom-input-counter/custom-input-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, CustomInputCounterComponent],
  imports: [BrowserModule, StoreModule.forRoot({counter: counterReducer}),FormsModule, StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
