import { Common, GetItemsRequest } from 'amazon-paapi';

export type AmazonProduct = {
  asin: string;
  title: string;
  detailPageUrl: string;
  priceDisplay?: string;
  currency?: string;
  amount?: number;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
};

// Environment variables
const ACCESS_KEY = process.env.PAAPI_ACCESS_KEY || '';
const SECRET_KEY = process.env.PAAPI_SECRET_KEY || '';
const PARTNER_TAG = process.env.PAAPI_PARTNER_TAG || '';
const MARKETPLACE = process.env.PAAPI_MARKETPLACE || 'www.amazon.com';

// Configure the common parameters
const commonParams: Common = {
  AccessKey: ACCESS_KEY,
  SecretKey: SECRET_KEY,
  PartnerTag: PARTNER_TAG,
  PartnerType: 'Associates' as any,
  Marketplace: MARKETPLACE as any, // Cast to any to avoid strict enum issues if string is passed
};

export async function getAmazonItemsByAsins(asins: string[]): Promise<AmazonProduct[]> {
  if (!ACCESS_KEY || !SECRET_KEY || !PARTNER_TAG) {
    console.warn("PA-API credentials missing. Returning empty list.");
    return [];
  }

  if (asins.length === 0) return [];

  const requestParameters: GetItemsRequest = {
    ItemIds: asins,
    Resources: [
      'Images.Primary.Large',
      'ItemInfo.Title',
      'Offers.Listings.Price',
      'DetailPageURL',
    ],
  };

  try {
    // Dynamic import to avoid server-side issues if package has them, though usually fine.
    // Using the package directly.
    const { GetItems } = await import('amazon-paapi');
    
    const data = await GetItems(commonParams, requestParameters);

    if (!data.ItemsResult || !data.ItemsResult.Items) {
      return [];
    }

    const products: AmazonProduct[] = data.ItemsResult.Items.map((item: any) => {
      const image = item.Images?.Primary?.Large;
      const price = item.Offers?.Listings?.[0]?.Price;

      return {
        asin: item.ASIN,
        title: item.ItemInfo?.Title?.DisplayValue || 'Unknown Product',
        detailPageUrl: item.DetailPageURL || '#',
        priceDisplay: price?.DisplayAmount,
        currency: price?.Currency,
        amount: price?.Amount,
        imageUrl: image?.URL || '',
        imageWidth: image?.Width || 0,
        imageHeight: image?.Height || 0,
      };
    });

    return products;

  } catch (error) {
    console.error("PA-API Error:", error);
    // Return empty array or throw depending on requirement. 
    // User said "Handle missing data gracefully and not crash the page".
    return [];
  }
}
