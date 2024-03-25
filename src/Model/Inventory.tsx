import dayjs, { Dayjs } from "dayjs";

export interface IGeneralInfo {
  airline: string;
  airlineNumber: string;
  returnAirlineNumber: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  tripDuration: string;
}

export interface IDepartureInfo {
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureTerminal: string;
  arrivalTerminal: string;
  nextDay: boolean;
}

export interface IReturnInfo {
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureTerminal: string;
  arrivalTerminal: string;
  nextDay: boolean;
}

export interface IStoppageInfo {
  noOfDepartureStop: string;
  noOfReturnStop: string;
}

export interface ICheckInBaggage {
  adult: string;
  children: string;
  infant: string;
}

export interface ICabinBaggage {
  adult: string;
  children: string;
  infant: string;
}

export interface ICloseBookingBefore {
  days: number;
  closingTime: string;
}

export interface IInfantPrices {
  infantPurchasePrice: string;
  infantSellingPrice: string;
}

export interface IPurchaseSellingPrices {
  purchaseDate: Dayjs | null;
  basePrice: string;
  feesAndTaxes: string;
  pnr: string;
  sellingPrice: string;
  seatQuantity: string;
  Narration: string;
}

export interface IFormData {
  generalInfo: IGeneralInfo;
  departureInfo: IDepartureInfo;
  returnInfo: IReturnInfo;
  stoppageInfo: IStoppageInfo;
  checkInBaggage: ICheckInBaggage;
  cabinBaggage: ICabinBaggage;
  closeBookingBefore: ICloseBookingBefore;
  infantPrices: IInfantPrices;
  purchaseSellingPrices: IPurchaseSellingPrices;
}
