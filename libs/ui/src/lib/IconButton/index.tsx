import styled, { css } from 'styled-components';
import {ReactComponent as SendIco} from '@assets/icons/arrow-up-2.svg'
import {ReactComponent as VoteIco} from '@assets/icons/vote.svg'
import {ReactComponent as LikeIco} from '@assets/icons/like.svg'
import {ReactComponent as ArrowLeft} from '@assets/icons/arrow-left.svg'
import {ReactComponent as ArrowRight} from '@assets/icons/arrow-right.svg'
import { position, layout } from 'styled-system';

const variants = {
  'send': <SendIco/>,
  'vote': <VoteIco/>,
  'upload': <VoteIco/>,
  'like': <LikeIco/>,
  'arrow-left': <ArrowLeft/>,
  'arrow-right': <ArrowRight/>,
}

interface  IconButtonProps {
  icon?: keyof typeof variants;
  size?: 'small' |  'medium' |  'large'
}

const small = css<{}>`
  width: 28px;
  height: 28px;
`

const medium = css<{}>`
  width: 48px;
  height: 48px;
`

const large = css<{}>`
  width: 64px;
  height: 64px;
`

const handleSize =  {
  ['small']:  small,
  ['medium']: medium,
  ['large']: large
}

export const IconButton =  styled.div.attrs(
  ({icon = 'send', size = 'medium'}: IconButtonProps)=>
  ({size, children: variants[icon]}))<IconButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${props => props.theme.colors.titleActive};
    margin-left: 5px;
    border-radius: 50%;
    cursor: pointer;
    
    & > svg {
        width: 60%;
    }
    ${({size})  => handleSize[size!]}
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    };
    &:active {
        background-color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        background-color: ${props => props.theme.colors.body};
    }
    ${position}
    ${layout}
`