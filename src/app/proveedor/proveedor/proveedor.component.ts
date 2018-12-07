import { Component, OnInit } from '@angular/core';
import { RestService} from 'src/app/rest.service';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  // mensaje: string;
  constructor(public restService: RestService) { }

  ngOnInit() {
    // this.restService.postToken({'username': 'admin', 'password': 'qwerty231094'});
    this.restService.example();
    // this.mensaje = this.restService.getProveedores();
  }

}
