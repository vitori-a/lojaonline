import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alerta } from './alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})

export class AlertaComponent implements OnInit {
  alerta = {
    titulo: 'Você tem certeza que deseja excluir?',
    descricao: 'Caso você tenha certeza que deseja excluir, clique no botão "Confirmar".',
    btnSucesso: 'OK',
    btnCancelar: 'Cancelar',
    corBtnSucesso: 'accent',
    corBtnCancelar: 'warn',
    possuirBtnFechar: true,
  } as Alerta;

  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit() {
    if (this.data) {
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao;
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
      this.alerta.corBtnSucesso = this.data.corBtnSucesso || this.alerta.corBtnSucesso;
      this.alerta.corBtnCancelar = this.data.corBtnCancelar || this.alerta.corBtnCancelar;
      this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
    }
  }
}