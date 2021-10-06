import { ReactNode } from 'react'
import { Box, Wrapper, Close } from './styles'
import { ReactComponent as Logo } from 'assets/icons/wecity.svg'

export function CenterPanel({children, onClose}:{children:ReactNode, onClose?:()=>void}){
  return <>
    <Wrapper>
      <Box>
        <Logo/>
        <Close onClick={()=>onClose&&onClose()}/>
        {children}
      </Box>
    </Wrapper>
  </>
}