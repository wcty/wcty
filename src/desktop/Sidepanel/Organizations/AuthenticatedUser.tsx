import { useI18n, useUser } from "misc";
import { UserIconRow } from "../styles";

export default function Organization(){
  const user = useUser()
  const i18n = useI18n()

  return <>
    <div>
      <UserIconRow>
          <span>
            {i18n('myInitiatives')}
          </span>
          <span style={{fontSize: 10}}>
            {'11 initiatives'}
          </span>
      </UserIconRow>
    </div>
  </>
}