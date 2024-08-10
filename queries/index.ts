export interface CommonResponse<T> {
  data: T;
  code: number;
  message: string;
  success: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
}

export interface Destination {
  itinerary_id: string;
  itinerary_name: string;
  itinerary_day: number;
  itinerary_slug: string;
  partner_name: string;
  partner_alias: string;
  itinerary_location: string;
  itinerary_short_description: string;
  itinerary_long_description: string;
  morph_class: string;
  related_galleries: {
    itinerary_id: string;
    gallery_id: number;
    gallery_alt_text: string;
    gallery_path: string;
    src: string;
    title: string;
  }[];
  related_variant: {
    itinerary_id: string;
    itinerary_variant_id: number;
    itinerary_variant_pub_price: string;
    itinerary_variant_disc_price: string;
    unit_name: string;
    related_unit: null;
  };
}

export const getArticles = (): Promise<CommonResponse<Article[]>> =>
  fetch("https://pandooin.com/api/zamrood/article").then((res) => res.json());

export const getDestination = (): Promise<CommonResponse<Destination[]>> =>
  fetch("https://pandooin.com/api/zamrood/itinerary").then((res) => res.json());

export const getDestinationHighlight = (): Promise<
  CommonResponse<Destination[]>
> =>
  fetch("https://pandooin.com/api/zamrood/itinerary?highlight=true").then(
    (res) => res.json()
  );
