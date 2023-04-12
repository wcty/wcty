import styled, { css } from 'styled-components';
import { ReactComponent as SendIco } from '@assets/icons/arrow-up-2.svg'
import { ReactComponent as VoteIco } from '@assets/icons/vote.svg'
import { ReactComponent as LikeIco } from '@assets/icons/like.svg'
import { ReactComponent as ArrowLeft } from '@assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '@assets/icons/arrow-right.svg'
import { ReactComponent as CloseIcon } from '@assets/icons/close-icon.svg'
import { ReactComponent as GalleryIcon } from '@assets/icons/gallery.svg'
import { ReactComponent as FullscreenIcon } from '@assets/icons/fullscreen.svg'
import { ReactComponent as OptionsIcon } from '@assets/icons/post-options.svg'

import { position, layout, space, SpaceProps, LayoutProps, PositionProps, flexbox, FlexboxProps } from 'styled-system';

const variants = {
  'send': <SendIco />,
  'vote': <VoteIco />,
  'upload': <VoteIco />,
  'like': <LikeIco />,
  'arrow-left': <ArrowLeft />,
  'arrow-right': <ArrowRight />,
  'close': <CloseIcon />,
  'gallery': <GalleryIcon />,
  'fullscreen': <FullscreenIcon />,
  'options': <OptionsIcon />
}

interface IconButtonProps {
  icon?: keyof typeof variants;
  s?: 'small' | 'medium' | 'large',
  t?: 'primary' | 'secondary' | 'outlined' | 'subtle' | 'text'
}

const small = css`
  width: 28px;
  height: 28px;
`

const medium = css`
  width: 48px;
  height: 48px;
`

const large = css`
  width: 64px;
  height: 64px;
`

const handleSize = {
  ['small']: small,
  ['medium']: medium,
  ['large']: large
}

export const IconButton = styled.div.attrs(
  ({ icon = 'send', s = 'medium' }: IconButtonProps) =>
    ({ s, children: variants[icon] })) <IconButtonProps & FlexboxProps & SpaceProps & LayoutProps & PositionProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${props => props.theme.colors.titleActive};
    margin-left: 5px;
    border-radius: 50%;
    cursor: pointer;
    padding: 0 !important;

    & > svg {
      margin: 0 !important;
    }
    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    };
    &:active {
        background-color: ${props => props.theme.colors.secondaryAccent};
    };
    &:disabled {
        background-color: ${props => props.theme.colors.body};
    }
    ${({ s }) => handleSize[s!]}
    ${({ t = 'primary', theme }) => theme.buttonTypes[t]};

    ${position}
    ${layout}
    ${space}
    ${flexbox}
`