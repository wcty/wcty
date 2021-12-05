import { IAuthor } from "./IAuthor";
import { ILike } from "./ILike";
import { IPostComment } from "./IPostComment";

export interface IPost {
    author: IAuthor;
    message: string;
    tags?: string[];
    comments: IPostComment[];
    likes: ILike[];
}   