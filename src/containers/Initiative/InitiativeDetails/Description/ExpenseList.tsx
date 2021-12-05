import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { useI18n, useUser } from "common";
import { useInitiativeByPkQuery } from "generated";
import { useState } from "react";
import { Expense, List } from "./styles";
import {ReactComponent as LinkIcon} from 'assets/icons/link.svg';
import { InitiativeProps } from 'containers/Initiative';
export default function ExpenseList({initiative}:InitiativeProps) {

  const i18n = useI18n()
  const [ open, setOpen ] = useState(true);
  const isAvailable = initiative && initiative.expenses.length>0
  
  return (
    <List {...{open}}>
      <span onClick={()=>setOpen(!open)}>
        <span>{
          isAvailable?
          i18n('list_of_expenses'):
          i18n('expenses_absent')}</span>
        {isAvailable&&<span>
          {open?i18n('hide'):i18n('show')}
          <ArrowDropDown/>
        </span>}
      </span>
      {isAvailable && <div>
        {
          initiative!.expenses.map((v,i)=>
            <Expense key={i}>
              <span>{i+1}</span>
              <div>
                <span>{v.description}</span>
                <span>
                  <LinkIcon/>
                  {v.link&& <a href={v.link}>{v.link_name||v.link}</a>}
                </span>
              </div>
              <span>{`${v.amount} ${v.currency}`}</span>
            </Expense>
          )
        }
      </div>}
    </List>
  )
}