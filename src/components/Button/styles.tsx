import styled, {css} from "styled-components";

export enum EButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUBTLE =  'subtle',
    TEXT  = 'text',
    SHARE  = 'share'
}

export enum EButtonSize  {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small'
}


const large =  css`
    min-width: 160px;
    height: 56px;
    font-size: 14px;
`;

const medium =  css`
    min-width: 120px;
    height: 40px;
    font-size: 12px;
`;

const small =  css`
    min-width: 90px;
    height: 32px;
    font-size: 10px;
`;


const alarm = css`
    min-width: 500px;
    background-color: red;
`

const primary = css`
   background-color: ${props => props.theme.colors.titleActive};
   color: ${props => props.theme.colors.backgroundLight};
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    };
    &:active {
        background-color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        background-color: ${props => props.theme.colors.body};
    }
  
`;

const secondary = css`
    background-color: transparent;
    color: ${props => props.theme.colors.titleActive};
    border: 1px solid ${props => props.theme.colors.titleActive};
    &:hover {
        border-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.secondary};
    };
    &:active {
        border-color: ${props => props.theme.colors.secondaryAccent};
        color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        border-color: ${props => props.theme.colors.body};
        color: ${props => props.theme.colors.body};
    }

`;

const subtle = css`
    background-color: transparent;
    color: ${props => props.theme.colors.titleActive};
    border: 1px solid ${props => props.theme.colors.placeholder};
    &:hover {
        border-color: ${props => props.theme.colors.placeholder};
        color: ${props => props.theme.colors.secondary};
    };
    &:active {
        border-color: ${props => props.theme.colors.placeholder};
        color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        border-color: ${props => props.theme.colors.line};
        color: ${props => props.theme.colors.placeholder};
    }
`;

const text = css`
    background-color: transparent;
    color: ${props => props.theme.colors.titleActive};
    &:hover {
        
        color: ${props => props.theme.colors.secondary};
    };
    &:active {
        
        color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        
        color: ${props => props.theme.colors.placeholder};
    }
`;


const share = css`

`


const handleSize = {
    [EButtonSize.LARGE]:large,
    [EButtonSize.MEDIUM]:medium,
    [EButtonSize.SMALL]:small,
}

const handleType = {
    [EButtonTypes.PRIMARY]:primary,
    [EButtonTypes.SECONDARY]:secondary,
    [EButtonTypes.SUBTLE]:subtle,
    [EButtonTypes.TEXT]:text,
    [EButtonTypes.SHARE]:text,
}









interface ButtonProps {
    customSize:EButtonSize;
    customType:  EButtonTypes;
    label: string;
    isDisabled: boolean;
    onClick?: () => void

}

export const CustomButton = styled.input.attrs((props: ButtonProps) => ({
    type:'button',
    value: props.label,
    disabled: props.isDisabled,
    onclick : props.onClick
}))<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    border-radius: 3px;
    font:  ${props => props.theme.font.body.semibold.t4};
    
    ${({customType}) => handleType[customType]};
    ${({customSize}) => handleSize[customSize]};

    

`;
