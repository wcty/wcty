export interface IButton {
    icon?: 'send' | 'upload' | 'vote';
    customType?: 'primary' | 'secondary' | 'subtle' | 'text' | 'share',
    customSize?: 'large'|  'medium' | 'small'
    label?: string,
    isDisabled?: boolean

}