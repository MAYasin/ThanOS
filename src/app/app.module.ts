import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { ContextmenuComponent } from './components/contextmenu/contextmenu.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { WindowComponent } from './components/window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ContextmenuComponent,
    TaskbarComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
