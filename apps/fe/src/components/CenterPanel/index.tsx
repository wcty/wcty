import { ReactNode } from 'react'
import { Box, Wrapper, Close } from './styles'
import { ReactComponent as Logo } from 'assets/icons/wecity.svg'
import { useLayout } from 'common'

export function CenterPanel({children, onClose}:{children:ReactNode, onClose?:()=>void}){
  const layout = useLayout()
  return <>
    <Wrapper>
      <Box>
            <Close onClick={()=>onClose&&onClose()}/>
        {children}
      </Box>
    </Wrapper>
  </>
}