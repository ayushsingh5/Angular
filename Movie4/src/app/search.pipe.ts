import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[], filterText:any){
    if(!filterText){
      return data;
    }
    else{
      const a = filterText.trim().toLowerCase();
      return data.filter((dat)=>{
        return dat.id.toString().includes(a) || dat.movieName.toLowerCase().includes(a);
      })
    }
  }
}
