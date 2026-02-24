export default interface IhomePageFooterItem {
  itemOne: IoptionItemsValues[];
  itemTwo: IoptionItemsValues[];
  itemThree: IoptionItemsValues[];
  itemFour: IoptionItemsValues[];
}

export interface IoptionItemsValues {
  id: number;
  headerTitle?: string;
  desktopTitle: string;
  mobileTitle?: string;
}
