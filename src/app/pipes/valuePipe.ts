﻿import {Pipe, PipeTransform} from '@angular/core';
import {Disciplina} from "../interfaces/disciplina";

@Pipe({
  name: 'filterByValue',
  standalone: true
})

export class FilterByValuePipe implements PipeTransform {
  transform(items: Disciplina[], tipo: number): any[] {
    if (!items) return [];
    return items.filter(item => item.tipo === tipo);
  }
}
