import { Component } from '@angular/core';
import { LibrosService } from './services/libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';

  public Libros: Array<any> = []
  public Autores: Array<any> = []
  public Editoriales: Array<any> = []
  constructor(
    private libroService: LibrosService
  ){
    this.libroService.getLibros().subscribe((resp:any) =>{
      this.Libros = resp;
    })

    this.libroService.getAutores().subscribe((resp:any) =>{
      this.Autores = resp;
    })

    this.libroService.getEditoriales().subscribe((resp:any) =>{
      this.Editoriales = resp;
    })

    
  }
}
