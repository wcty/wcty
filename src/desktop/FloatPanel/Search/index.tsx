import { useI18n } from "shared";
import { SearchInput, SearchWrapper, FieldWrapper, SearchResults } from "../styles";
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg'
import { useState } from "react";
import Buttons from "./Buttons";
import { useSearchResultsSubscription } from 'generated'
import { useRecoilState } from "recoil";
import { Map, ListRow } from 'components'

export default function Search(){
  const i18n = useI18n()
  const [keyword, setKeyword] = useState('')
  const [layers, setLayers] = useRecoilState(Map.layers)

  const {data} = useSearchResultsSubscription({variables:{layers,keyword: `%${keyword}%`}})

  console.log(data)
  return <>
    <SearchWrapper>
      <Buttons/>
      <FieldWrapper>
        <SearchInput 
          type='text' 
          value={keyword} 
          onChange={(e)=>setKeyword(e.target.value)} 
          placeholder={i18n('search')}/>
        <div><SearchIcon/></div>
        <div><button onClick={()=>setKeyword('')}><CancelIcon/></button></div>
      </FieldWrapper>
      <SearchResults data-active={!!keyword}>
        {data?.search_entries.map((v,key)=>
          <ListRow onClick={()=>setKeyword('')} data={v as any} {...{key}} />
        )}
      </SearchResults>
    </SearchWrapper>
  </>
}