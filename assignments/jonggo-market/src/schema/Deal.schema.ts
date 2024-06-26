export type SDeal<IsDetail extends boolean = false> = {
  title: string;
  price: number;
  location: string;
  imgURL: string;
  likesCount: number;
  id: number;
} & (IsDetail extends true
  ? {
      createdAt?: number;
      content?: string;
      viewsCount?: number;

      seller?: {
        avatarImgURL: string;
        email: string;
      };
    }
  : {});
