import styled, { css } from 'styled-components'
import { position, layout, space, PositionProps, LayoutProps, SpaceProps } from 'styled-system'
import { InputHTMLAttributes } from 'react'

export const 
FieldWrapperParams = css`
  height: 100%;
  width: 100%;
  padding: 1rem 1.5rem 1rem 1.5rem;

  /* background-color: white; */
  outline: none;
  border-radius: 3px 3px 3px 3px;
  border: 1px solid ${p=>p.theme.colors.line};
  :hover{
    background-color: ${p=>p.theme.colors.backgroundActive};
    border: 1px solid ${p=>p.theme.colors.secondary};
  }
  :focus {
    border: 1px solid ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.secondary};
    background-color: #ffffff;
    :hover{
      background-color: #ffffff;
    }
  }
  :focus-within {
    background-color: #ffffff;
  }
  :active {
    background-color: #ffffff;
  }
`,

FieldWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 0.2s;
  transform: translate(0px,0px);
  >label:nth-child(2){
    position: absolute;
    top:0px;
    left:0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    >svg{
      margin-left: 0.5rem;
    }
  }
  >div:last-child{
    position: absolute;
    top:0px;
    right:5px;
    height: 100%;
    width: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    display: flex;
    >button{
      width: 16px;
      height: 16px;
      background: none;
      outline: none;
      border: none;
      border-radius: 8px;
      align-self: flex-start;
      margin-top: 1rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      >svg{
        margin: 0;
        position: absolute;
        left: 0px;
        circle{
          transition: fill 0.2s;
        }
        :hover{
          circle {
            fill: #e0e8f0;
          } 
        }
        :active{
          circle {
            fill: #b8c6d4;
          } 
        }
      }
    }
  }
  ${FieldWrapperParams}
`,

TextInputParams = css`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: none;
`,

TextInput = styled.input`
  ${TextInputParams}
  ${position}
  ${layout}
`,

TextAreaInput = styled.textarea<{ extendable?: boolean } & LayoutProps & PositionProps & SpaceProps>`
  ${TextInputParams}
  ${position}
  ${layout}
  ${space}
  resize: none;
  transition: height 0.2s ease-in-out;
  ${({ extendable }) => extendable && css`
    height: 4rem;
    :focus{
      height: 8rem;
    }
  `}
`,

IconWrapper = styled.button<PositionProps & LayoutProps & SpaceProps>`
  width: 16px;
  height: 16px;
  background: none;
  outline: none;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute !important;
  >svg{
    margin: 0;
    position: absolute;
    left: 0px;
    circle{
      transition: fill 0.2s;
    }
    :hover{
      circle {
        fill: #e0e8f0;
      } 
    }
    :active{
      circle {
        fill: #b8c6d4;
      } 
    }
  }
  ${position}
  ${layout}
  ${space}
`,

EmojiWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  overflow: visible;
  min-width: 250px;
`,

FileInput = styled.label.attrs(
  (p:{
    $value?: string,
    $onInputChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
  } & InputHTMLAttributes<HTMLInputElement> &LayoutProps & PositionProps & SpaceProps )=>({
    $onInputChange: p.$onInputChange,
    $value: p.$value,
    children: <>
      <input type="file" value={p.$value} multiple onChange={p.$onInputChange} />
      {p.children}
    </>
}))<{src?:string}>`
  >input[type="file"]{
    display: none;
  }
  ${position}
  ${layout}
  ${space}
`,

ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-color: #f0f0f0;
  margin-bottom: 1.5rem;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 8px;
  overflow: hidden;
`,


ImageWrapper = styled.div<{ url:string }& LayoutProps>`
  min-width: 40%;
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
`,

DeleteIcon = styled.button`
  :after{
    content: '✕';
  }
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  :hover{
    opacity: 0.8;
  }
`