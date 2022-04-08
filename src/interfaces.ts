export type Selected = {
  name: string;
  status: string;
  photo: string;
  gender: string;
  origin: string;
  location: string;
};

export interface IState {
  loading: boolean;
  error: boolean;
  data: any;
  selected?: Selected;
  favorites?: any;
}

export interface IRenderItem {
  id: number;
  name: string;
  status: string;
  image: string;
}

// export interface IRenderItemProps {
//   item: IRenderItem;
// }

// export interface IState {
//     loading: boolean;
//     error: boolean;
//     data: {
//       info?: {
//         count: number;
//         pages: number;
//         next: string | null;
//         prev: string | null;
//       };
//       results?: {
//         [key: string]: any;
//       }[];
//     };
//   }
