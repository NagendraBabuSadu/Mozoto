export interface UserLogin {
  email: string;
  password?: string;
}



export interface ProfileInfo extends UserLogin {
  user: any;
  displayName: string;
  photoUrl?: string;
  occupation?: string;
}


export interface ICartItem {
    id: number;
    dish: string;
    imgdata: string;
    address: string;
    delimg: string;
    somedata: string;
    price: number;
    rating: string;
    arrimg: string;
    qnty: number;
  }