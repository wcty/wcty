import { desktop, mobile, useLayout } from "common";
import { useRouter } from "next/router";
import { FilletButton, Image } from "./styles";
import { ReactComponent as EditPen } from '@assets/icons/edit-pen.svg'
import { css } from "styled-components";
import { useRecoilState } from "recoil";
import { editorAtom } from "../InitiativeDetails";

interface ImageProps {
  src: string
}

export default function ImageHeader(props: ImageProps) {
  const router = useRouter()
  const [editor, setEditor] = useRecoilState(editorAtom)

  return (
    <Image src={props.src}>
      <>
        <button
          onClick={() => setEditor(true)}
          css={`
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.5);
            ${desktop(css`
              top: calc(min((100vw - 960px) / 2, 60px)); 
              margin-top: 10px;
              right: 10px;
            `)}
            ${mobile(css`top: 2.5rem; right: 3rem;`)}
            border: none;
            :hover {
              background-color: rgba(255,255,255,0.6);
            }
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          `}>
          <><EditPen /></>
        </button>
        <FilletButton onClick={() => router.push('/')} />
      </>
    </Image>
  )
}