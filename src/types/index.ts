export interface ICreatePostDto {
  title: string;
  content: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  imageURL: string;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user: IUser;
}
