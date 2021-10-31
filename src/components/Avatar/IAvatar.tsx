import { EAvatarSize } from "./EAvatarSize";

export interface IAvatar {
    picture?:  string;
    name?: string;
    size?: 'small' | 'medium' | 'large'
}