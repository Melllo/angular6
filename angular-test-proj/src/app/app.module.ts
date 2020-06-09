import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { GroupComponent } from './group/group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MyComponent, GroupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
