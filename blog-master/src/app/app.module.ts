import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component'; // Import AppComponent

@NgModule({
  declarations: [
    HeroComponent,
    NavbarComponent,
    BlogComponent,
    BlogCardComponent,
    ContentDetailComponent,
    AboutComponent,
    HomeComponent,
    AppComponent // Add AppComponent to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap AppComponent instead of HomeComponent
})
export class AppModule { }
