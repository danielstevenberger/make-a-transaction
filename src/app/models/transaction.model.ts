export class Transaction {
  public categoryCode: string;
  public transactionDate: Date;
  public merchantLogo: string;
  public merchant: string;
  public transactionType: string;
  public amount: number;
  constructor(
    categoryCode: string,
    transactionDate: Date,
    merchantLogo: string,
    merchant: string,
    transactionType: string,
    amount: number
  ) {
    this.categoryCode = categoryCode;
    this.transactionDate = transactionDate;
    this.merchantLogo = merchantLogo;
    this.merchant = merchant;
    this.transactionType = transactionType;
    this.amount = amount;
  }
}
