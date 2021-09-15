import { CircularProgress, Box, Fab, useMediaQuery } from '@material-ui/core'
import { LoadMoreContainer, LoadMoreWrapper } from './styles'


export default ()=>{
  const desktop = useMediaQuery('(min-width:600px)')

  return (
    <LoadMoreContainer>
      {!desktop &&
      <LoadMoreWrapper>   
        <Box         
          top={"50%"}
          left={"50%"}
          style={{transform: "translate(-50%, -50%)"}}
          position="absolute"
          alignItems="center"
          justifyContent="center" 
        >
          <Fab style={{background:'#ffffff'}}>
            <CircularProgress />
          </Fab>
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
          </Box>
        </Box>
      </LoadMoreWrapper>}
    </LoadMoreContainer>
  )
}
