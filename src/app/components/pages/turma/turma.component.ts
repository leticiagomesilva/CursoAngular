import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent {

  constructor(private router: Router) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

}

// turmas
// int addTurma(Turma turma){
// }

// int delTurma(Turma turma){
// }

// int delTurma(int id_turma){
// }

// Turma getById(int id_turma){
// }

// List<Turma> getAllTurmas(){
// }

// List<Turma> getTurmasByModality(String modalidade){
// }

// List<Turma> getTurmasByDay(String dia){
// }