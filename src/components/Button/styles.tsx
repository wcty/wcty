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
    width: 15em;
    background-color: red;
`

const primary = css`
    
`;

const secondary = css`
    
`;

const subtle = css`
    
`;

const text = css`
    
`;


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

}

export const CustomButton = styled.input.attrs((props: ButtonProps) => ({
    type:'button',
    value: props.label  
}))<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 15px;
    border-radius: 3px;
    font: ${props => props.theme.font.title.monserat.large};
    /* font-size: 2em;
    
    border: 1px solid ${props => props.theme.colors.titleActive};
    font:  ${props => props.theme.font.title.mono.h3};
    color: ${props => props.theme.colors.titleActive}; */

    ${({customType}) => handleType[customType]};
    ${({customSize}) => handleSize[customSize]};

`;
