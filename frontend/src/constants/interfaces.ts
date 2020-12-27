export interface RegistrationModel {
  _id: string;
  vehicalNo: string;
  amount: number;
  isReturn: boolean;
  validTill: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface EntryModel {
  vehicalNo: string;
  isReturn: boolean;
}
