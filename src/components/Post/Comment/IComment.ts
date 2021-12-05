import { IAuthor } from "../types/IAuthor";

export interface IBaseComment {
    author: IAuthor;
    message: string;
    likesCount: number;
    date: Date;
}
export interface IComment extends IBaseComment {
    
    comments?: IComment[]

}