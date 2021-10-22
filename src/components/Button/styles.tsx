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




function handleSize(size: EButtonSize) {
    console.log(size);
    switch(size){
        case EButtonSize.LARGE:
            return large;
            
        case EButtonSize.SMALL:
            return small;
            
        default:
            return alarm; 
            
    };
}

function handleType(type: EButtonTypes) {
    //console.log(type);
    switch(type){
        case EButtonTypes.PRIMARY:
            return large;
            
        case EButtonTypes.SECONDARY:
            return small;
            
        default:
            return alarm; 
            
    };
}


const large =  css`
    padding: 1em 0;
    width: 10em;
`;

const small =  css`
    padding: 0.75em  0;
    width: 8em;
`;

const alarm = css`
    width: 15em;
    background-color: red;
`

const primary = css`
    
`;

interface ButtonProps {
    customSize:EButtonSize;
    customType:  EButtonTypes;
    label: string;

}

export const CustomButton = styled.input.attrs((props: ButtonProps) => ({
    type:'button',
    value: props.label  
}))<ButtonProps>`
    
    font-size: 2em;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.colors.titleActive};
    font:  ${props => props.theme.font.title.mono.h3};
    color: ${props => props.theme.colors.titleActive};

    ${({customType}) => handleType(customType)}
    ${({customSize}) => handleSize(customSize)};

`;
