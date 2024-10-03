import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    BlogComponent,
    LatestPostsComponent,
    BlogCardComponent,
    ContentDetailComponent,
    CuisinesComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
