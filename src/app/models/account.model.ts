//Model for an account
export class Account {
  public accountName: string;
  public balance: number;
  constructor(accountName: string, balance: number) {
    this.accountName = accountName;
    this.balance = balance;
  }
}
