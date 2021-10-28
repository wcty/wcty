import { ILike } from "./ILike";
import { IPostComment } from "./IPostComment";

export interface IPost {
    author: string;
    roles?:  string[];
    message: string;
    date: string;
    avatar?: string;
    tags?: string[];
    comments: IPostComment[];
    likes: ILike[];
}   