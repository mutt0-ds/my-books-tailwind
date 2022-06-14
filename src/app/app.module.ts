import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTiltModule } from 'angular-tilt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BooksComponent,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTiltModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
