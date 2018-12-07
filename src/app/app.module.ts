import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestService } from './rest.service';
// uso de HTTP datos remotos
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProveedorComponent } from './proveedor/proveedor/proveedor.component';


@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
