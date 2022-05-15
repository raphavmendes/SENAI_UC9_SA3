import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticias } from 'src/app/models/noticias'; 

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiasService: NoticiasService) { }

  listaNoticias = [] as Noticias []

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias() {
    this.noticiasService.getNoticias().subscribe( (noticiasRecebidas: Noticias[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    })
  
  }

}
