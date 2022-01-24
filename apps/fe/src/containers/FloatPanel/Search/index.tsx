import { atoms,  useLayout } from 'common';
import { SearchInput, SearchWrapper, FieldWrapper, SearchResults } from "../styles";
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '@assets/icons/cancel.svg'
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { useSearchResultsQuery } from 'generated'
import { useRecoilState } from "recoil";
import { ListRow } from 'components'
import Slides from 'containers/Slides';
import { t, Trans } from '@lingui/macro'

export default function Search(){
  const [keyword, setKeyword] = useState('')
  const [layers, setLayers] = useRecoilState(atoms.layers)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(atoms.viewport)
  const layout = useLayout()
  const {data} = useSearchResultsQuery({variables:{layers,keyword: `%${keyword}%`}})
  const [searchResults, setSearchResults] = useState(data)

  useEffect(()=>{
    if(data?.entries && data.entries.length>0){
      setSearchResults(data)
    }
    if(keyword===''){
      setSearchResults(undefined)
    }
  },[data, setSearchResults, keyword])
  
  return <>
    <SearchWrapper>
      <Buttons/>
      <FieldWrapper>
        <SearchInput 
          type='text' 
          value={keyword} 
          onChange={(e)=>setKeyword(e.target.value)} 
          placeholder={t`Search`}/>
        <div><SearchIcon/></div>
        <div><button onClick={()=>setKeyword('')}><CancelIcon/></button></div>
      </FieldWrapper>
      <SearchResults data-active={!!keyword}>
        {searchResults?.entries.map((v,key)=>
          <ListRow onClick={
            layout==='desktop'?
            ()=>setKeyword(''):
            ()=>{
              console.log('search',v)
              setKeyword('')
              setFocus(v.geometry.coordinates)
              setViewport({
                longitude: v.geometry.coordinates[0],
                latitude: v.geometry.coordinates[1],
                zoom: 16,
                viewportChangeMethod: 'easeTo'
              })
              setSlideIndex(0)
            }
          } data={v as any} {...{key}} />
        )}
      </SearchResults>
    </SearchWrapper>
  </>
}