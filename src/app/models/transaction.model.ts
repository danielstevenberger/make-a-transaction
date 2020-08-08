//Model for a transaction
export class Transaction {
  public categoryCode: string;
  public transactionDate: number;
  public merchantLogo: string;
  public merchant: string;
  public transactionType: string;
  public amount: any;
  constructor(
    categoryCode: string,
    transactionDate: number,
    merchantLogo: string,
    merchant: string,
    transactionType: string,
    amount: any
  ) {
    this.categoryCode = categoryCode;
    this.transactionDate = transactionDate;
    this.merchantLogo = merchantLogo;
    this.merchant = merchant;
    this.transactionType = transactionType;
    this.amount = amount;
  }
}
