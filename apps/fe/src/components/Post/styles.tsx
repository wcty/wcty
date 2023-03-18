import styled, { css } from 'styled-components'
import { ReactComponent as OptionsIcon} from '@assets/icons/post-options.svg'
import { Button } from "@ui";
import { layout, LayoutProps } from 'styled-system';

export const 
Avatar = styled.div`
  flex-shrink: 0;
  margin-right: 7px;
`,

Info  =  styled.div`
 display: flex;
 flex-direction: column;
`,

Content = styled.div`
  padding: 15px 19px 0 19px;
  ${props =>  props.theme.font.body.regular.t4};
  color: ${props  => props.theme.colors.body};
`,
    

Message = styled.div`
`,

Tags = styled.div`
  padding-top: 27px;
  color: ${props => props.theme.colors.label}
`,

CommentCounter = styled.div`
  color: ${props => props.theme.colors.label}
`,

LikeCounter = styled.div`
    padding-right: 4px;
`,

Likes  = styled.div<{ liked?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${p => p.theme.colors.label};
  >svg{
    ${p=>p.liked? 
      css`fill: ${p => p.theme.colors.titleActive};`:
      css`fill: ${p => p.theme.colors.label};`}
  }
  :hover {
    color: ${p => p.theme.colors.secondary};
    >svg{
      fill: ${p => p.theme.colors.secondary} !important;
    }
  }
  :active {
    color: ${p => p.theme.colors.secondaryAccent};
    >svg{
      fill: ${p => p.theme.colors.secondaryAccent} !important;
    }
  }
  :disabled {
    color: ${p => p.theme.colors.placeholder};
    >svg{
      fill: ${p => p.theme.colors.placeholder} !important;
    }
  }
`,


CreateVote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,

Chip = styled.div`
  height: 19px;
  ${props => props.theme.font.body.regular.t5};
  color: ${props => props.theme.colors.label};
  border: none;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.backgroundActive};
  padding: 5px;
  margin-right: 10px;
`,

Actions = styled.div`
  padding: 15px 19px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,

Container = styled.div`
  width: 100%;    
  display: flex;
  flex-direction: column;
  background-color: ${props =>  props.theme.colors.backgroundLighter};
  box-shadow: 0px 0px 2px rgba(137, 150, 159, 0.1), 0px 2px 2px rgba(137, 150, 159, 0.1), 0px 1px 3px rgba(137, 150, 159, 0.1);
  border-radius: 3px;
  padding-bottom: 1rem;
  margin-bottom: 6px;
  position: relative;
`,

OptionsButton = styled(Button).attrs({
  children: <OptionsIcon/>
})`
  padding: 0;
  width: 18px;
  height: 18px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  margin: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  >svg{
    margin: 0px !important;
  }
`,

OptionsMenu = styled.div`
  z-index: 1;
  width: 144px;
  border-radius: 3px;
  position: absolute;
  top: 3.5rem;
  right: 0;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
`,

DeletionMenu = styled.div`
  padding: 4rem;
  z-index: 1;
  width: 360px;
  border-radius: 3px;
  position: absolute;
  /* top: 3.5rem;
  right: 0; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 3px 3px 6px rgba(0,0,0,0.4);
  >div{
    margin-top: 2rem;
    display: flex;
    >:last-child{
      margin-left: 1rem;
    }
    >button{
      justify-content: center;
    }
  }
`,

ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: #f0f0f0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1.5rem;
`,

ImageWrapper = styled.div<{ url:string }& LayoutProps>`
  min-width: 40%;
  cursor: pointer;
  ${layout}
  color: white;
  margin: 0 1px 1px 0;
  font-family: system-ui;
  font-weight: 900;
  font-size: 2rem;
  flex: 1 0 auto;
  background-image: url(${p=>p.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  :hover{
    opacity: 0.975;
  }
`
