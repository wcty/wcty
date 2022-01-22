import { ReactComponent as ArrowDropDown } from 'assets/icons/arrow-drop-down.svg'
import { useState } from "react";
import { Expense, List } from "./styles";
import {ReactComponent as LinkIcon} from 'assets/icons/link.svg';
import { InitiativeProps } from 'containers/Initiative';
import { Trans } from '@lingui/macro'

export default function ExpenseList({initiative}:InitiativeProps) {

  const [ open, setOpen ] = useState(true);
  const isAvailable = initiative && initiative.expenses.length>0
  
  return (
    <List {...{open}}>
      <span onClick={()=>setOpen(!open)}>
        <span>{
          isAvailable?
          <Trans>List of expenses</Trans>:
          <Trans>Expenses were not added yet</Trans>}</span>
        {isAvailable && <span>
          {open? <Trans>Hide</Trans>:<Trans>Show</Trans>}
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