import { IAuthor } from "../types/IAuthor";

export interface IComment {
    author: IAuthor;
    message: string;
    likesCount: number;
    date: Date;
    
}