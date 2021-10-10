import { useI18n, useUser } from "misc"
import { UserIconRow } from "../styles"

export default function Organizations(){
  const user = useUser()
  const i18n = useI18n()

  return <>
    <div>
      <UserIconRow>
          <span style={{fontSize: 12}}>
            {user?i18n('myOrganisations'):i18n('organisations')}
          </span>
          <span style={{fontSize: 10}}>
            {user?'11 organisations':'123 organisations'}
          </span>
      </UserIconRow>
    </div>
  </>
}