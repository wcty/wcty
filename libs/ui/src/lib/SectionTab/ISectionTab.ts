export interface ISectionTab {
    label: string;
    disabled?: boolean;
    active?: boolean;
    onClick?: () => void;
}