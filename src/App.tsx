import { atom } from 'recoil'
import { useI18nDictionary, User, useUserData } from 'common'

export default function App() {
  return null
}

App.user = atom({
  key: 'user',
  default: undefined as User,
});
