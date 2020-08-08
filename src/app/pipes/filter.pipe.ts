import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    //If nothing is entered it returns null. It's important to make sure to also add a space so users can search with spaces inbetween words.
    if (!value && value != " ") return null;
    if (!args) return value;
    args = args.toLowerCase();

    return value.filter(function (item) {
      //Creates a copy of the object being filtered
      var temp = { ...item };
      // Removes the data that the user cannot search by. Otherwise the any of the letters from the images or other infor will be included.
      delete temp["merchantLogo"];
      delete temp["categoryCode"];
      delete temp["transactionDate"];
      delete temp["transactionType"];
      delete temp["amount"];
      //Uses object.values() to make sure that the user cannot search for the object keys.
      return JSON.stringify(Object.values(temp)).toLowerCase().includes(args);
    });
  }
}
