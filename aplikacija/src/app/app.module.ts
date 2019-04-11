import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KartaComponent } from "./karta/karta.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full"
  },
  {
    path: "posts",
    component: KartaComponent
  }
];
@NgModule({
  declarations: [AppComponent, KartaComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
