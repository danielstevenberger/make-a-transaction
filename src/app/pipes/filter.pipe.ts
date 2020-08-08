import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value && value != " ") return null;
    if (!args) return value;
    args = args.toLowerCase();
    let items = [
      "categoryCode",
      "transactionDate",
      "merchant",
      "transactionType",
      "amount",
    ];

    return value.filter(function (item) {
      var temp = { ...item };
      delete temp["merchantLogo"];
      delete temp["categoryCode"];
      delete temp["transactionDate"];
      delete temp["amount"];
      console.log(JSON.stringify(Object.values(temp)));
      return JSON.stringify(Object.values(temp)).toLowerCase().includes(args);
    });
  }
}
