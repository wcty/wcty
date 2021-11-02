import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Expense, List } from "./styles";
import {ReactComponent as LinkIcon} from 'assets/icons/link.svg';

export default function ExpenseList() {
  const {id} = useParams<{id:string}>();
  const user = useUser()
  const {data} = useInitiativeByPkQuery({variables:{id,user_id:user?.id}, fetchPolicy:"cache-only"});
  const i18n = useI18n()
  const [open, setOpen] = useState(true);

  return (
    <List {...{open}}>
      <span onClick={()=>setOpen(!open)}>
        <span>{i18n('list_of_expenses')}</span>
        <span>
          {open?i18n('hide'):i18n('show')}
          <ArrowDropDown/>
        </span>
      </span>
      <div>
        {
          [{
            name: 'Expense name', 
            value: 7000, 
            currency: 'uah', 
            documentName: 'Expense document name',
            documentLink: 'https://google.com'
          }].map((v,i)=>
            <Expense key={i}>
              <span>{i+1}</span>
              <div>
                <span>{v.name}</span>
                <span>
                  <LinkIcon/>
                  <a href={v.documentLink}>{v.documentName}</a>
                </span>
              </div>
              <span>{`${v.value} ${v.currency}`}</span>
            </Expense>
          )
        }
      </div>
    </List>
  )
}