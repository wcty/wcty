import { ReactNode } from 'react'
import { Box, Wrapper, Close } from './styles'
import { useLayout } from 'common'

export function CenterPanel({children, onClose}:{children?:ReactNode, onClose?:()=>void}){
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