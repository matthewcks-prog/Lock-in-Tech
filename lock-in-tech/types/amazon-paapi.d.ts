declare module 'amazon-paapi' {
  export interface Common {
    AccessKey: string;
    SecretKey: string;
    PartnerTag: string;
    PartnerType: string;
    Marketplace?: string;
  }

  export interface GetItemsRequest {
    ItemIds: string[];
    Resources?: string[];
    [key: string]: any;
  }

  export enum PartnerType {
    ASSOCIATES = 'Associates'
  }

  export enum GetItemsResource {
    ImagesPrimaryLarge = 'Images.Primary.Large',
    ItemInfoTitle = 'ItemInfo.Title',
    OffersListingsPrice = 'Offers.Listings.Price',
    DetailPageURL = 'DetailPageURL'
  }

  export const Host: any;
  export const Region: any;

  export function GetItems(common: Common, request: GetItemsRequest): Promise<any>;
}
