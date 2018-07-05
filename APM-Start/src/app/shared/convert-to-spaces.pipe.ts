import { Pipe, PipeTransform } from '@angular/core';
//custom pipe take parameter character, and convert it into space
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}
//needs to be declared in module.ts