import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[], filterText:any): any[] {
    if(!filterText){
      return data;
    }
    else{
      const a = filterText.trim().toLowerCase();
      return data.filter((d) => {
        return d.id.toString().includes(a) || d.name.toLowerCase().includes(a);
      }
    )
    }
  }

}
