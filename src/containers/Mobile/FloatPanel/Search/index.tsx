import { atoms, useI18n } from 'common';
import { SearchInput, SearchWrapper, FieldWrapper, SearchResults } from "../styles";
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg'
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { useSearchResultsQuery } from 'generated'
import { atom, useRecoilState } from "recoil";
import { Map, ListRow } from 'components'
import Slides from 'containers/Mobile/Slides'

export default function Search(){
  const i18n = useI18n()
  const [keyword, setKeyword] = useState('')
  const [layers, setLayers] = useRecoilState(Map.layers)
  const [focus, setFocus] = useRecoilState(atoms.focalPoint)
  const [slideIndex, setSlideIndex] = useRecoilState(Slides.index)
  const [viewport, setViewport] = useRecoilState(Map.viewport)

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
          onChange={(e)=>{e.preventDefault();setKeyword(e.target.value)}} 
          placeholder={i18n('search')}/>
        <div><SearchIcon/></div>
        <div><button onClick={()=>setKeyword('')}><CancelIcon/></button></div>
      </FieldWrapper>
      <SearchResults data-active={!!keyword}>
        {searchResults?.entries.map((v,key)=>
          <ListRow onClick={
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