import { useI18nDictionary, useUserData } from "common"

export default function Auth(){
  useUserData()
  useI18nDictionary()
  return null
}