import { selectWords } from 'common';
import { animated, Interpolation } from 'react-spring';
import styled, { css } from 'styled-components';
import { Trans, t } from '@lingui/macro'

export const
InitiativeDescription = styled.div<{open:boolean, layout:string}>`
  margin-top: 1rem;
  flex: 1 1 auto;
  line-height: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: padding-bottom 0.5s, border-bottom 0.5s;
  padding-bottom: ${({open}) => open ? '2rem' : '0rem'};
  border-bottom:  ${({open}) => open ? css<{}>`1px solid rgba(0,0,0,1)` : css<{}>`1px solid rgba(0,0,0,0)`};
  >span{
    ${p=>p.layout==='desktop' ? 
      css<{}>`display: none;`:
      css<{open:boolean}>`
        padding: 0rem 2rem;
        flex: 1 1 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        border-bottom: solid 1px #000000;
        >svg{
          transform: ${p=>p.open ? css<{}>`rotate(180deg)` : css<{}>`rotate(0deg)`};
          transition: transform 0.2s;;
        }
        >span{
          transition: transform 0.2s;
          transform: translate(0px,0px);
        }
        &:hover{
          >span{
            transform: translate(2px,2px);
          }
        }
      `
    }
  }
  >div{
    padding: ${p=>p.layout==='mobile'? css<{}>`0rem 2rem`: css<{}>`0rem 0rem`};
    position: relative;
    max-height: ${p=>p.open ? css<{}>`600px` : css<{}>`0px`};
    transition: max-height 0.5s, padding 0.5s;
    >div:first-child{
      ${p=>p.theme.layout==='desktop'?
        css<{}>`margin: 0`:
        css<{}>`margin: 2rem 0rem;`
      }
    }
  }
`,

CircleText = styled.div`
  ${p=>p.theme.font.body.semibold.t3}
  color: black;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  padding-bottom:100%;
  height: 0;
  >div{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,

Gauge = styled.div.attrs((p:{
  percent: Interpolation<number, number>,
  radius: number
})=>({
  percent:p.percent,
  radius:p.radius,
  children:
    <>
      <svg width={(p.radius+8)*2} height={(p.radius+8)*2}>
        <circle cx={p.radius+8} cy={p.radius+8} r={p.radius} fill='none' stroke='#D2BEA7' strokeWidth={8}/>
        <animated.circle 
          strokeDasharray={2*Math.PI*p.radius} 
          strokeDashoffset={p.percent.to(x => (1 - x) * 2*Math.PI*p.radius )} 
          cx={p.radius+8} 
          cy={p.radius+8} 
          r={p.radius} 
          fill='none' 
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke='#000000' 
          strokeWidth={8}/>
      </svg>
      <CircleText><animated.div>{p.percent.to(x => (x*100).toFixed(0)+'%')}</animated.div></CircleText>
    </>
}))`
  /* width: 86px;
  height: 86px; */
  position: relative;
  >svg { transform: rotate(-90deg); }
  >div >div{
    font-size: ${p=>(p.radius-35)/120*10 + 18}px;
  }
`,

GaugeBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  >h4{
    margin-right: 1rem;
  }
`,

CollectedSum = styled.div.attrs(
  ({
    sum,
    total,
    ...p
  }:{
    sum:number,
    total:number
  })=>({
    sum, 
    total,
    children: 
    <>
      <span>
        {selectWords(
          t`Collected ${sum}UAH from planned ${total}`, 0, 3
        )} 
      </span> 
      {total!==0 && <span>
        {selectWords(
          t`Collected ${sum}UAH from planned ${total}`, 3
        )}
      </span>}
    </>
  }))`

  >:last-child{
    ${p=>p.theme.font.body.regular.t5}
  }
  >:first-child{
    ${p=>p.theme.font.body.semibold.t5}
    margin-right: 4px;
  }
`,

ProgressBar = styled.div.attrs({
  children: 
    <>
      <span/>
      <div>
        <div/>
      </div>
    </>
})<{ percent: number }>`
  display: flex;
  height: 18px;
  align-items: center;
  >span {
    flex: 0 0 40px;
    ${p=>p.theme.font.body.semibold.t5}
    :after{
      content: '${p=>p.percent}%';
    }
  }
  >div{
    flex: 1;
    position: relative;
    height: 8px;
    border-radius: 4px;
    background-color: ${p=>p.theme.colors.darkBeige};
    >div{
      height: 8px;
      border-radius: 4px;
      transition: width 0.5s ease-in-out;
      width: ${p=>p.percent}%;
      background-color: black;
    }
  }
`,

List = styled.div<{open:boolean}>`
  flex: 1 1 auto;
  line-height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  >button{
    border: none;
    background: none;
    padding: 1rem 0;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    >span{ 
      ${p=>p.theme.font.body.semibold.t5}
      border: none;
      background: none;
      cursor: pointer;
    }
    >span:first-child{
      transition: transform 0.2s;
      transform: translate(0px,0px);
    }
    >span:last-child{
      >svg{
        transform: ${p=>p.open ? css<{}>`rotate(180deg)` : css<{}>`rotate(0deg)`};
        transition: transform 0.2s;
        margin: 0 10px;
      }
    }
    &:hover{
      >span{
        transform: translate(2px,2px);
      }
    }
  }
  >div{
    padding: 0rem 0rem;
    position: relative;
    overflow: scroll;
    max-height: ${p=>p.open ? css<{}>`300px` : css<{}>`0px`};
    transition: max-height 0.5s, padding 0.5s;
  }
`,

Expense = styled.div`
  display: flex;
  align-items: flex-start;
  line-height: 2rem;

  >span:first-child{
    ${p=>p.theme.font.body.regular.t5}
    width: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  >div{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
    >span{
      padding: 0;
      margin: 0;
      line-height: 2rem;
      display: flex;
      align-items: center;
      >svg:first-child{
        margin-right: 8px;
      }
    }
  }
  >span:last-child{
    ${p=>p.theme.font.body.semibold.t5}
    /* width: 28px; */
    /* flex: 0 0 auto; */
    justify-content: start;
    white-space: nowrap;
  }
`,

FinishedTasks = styled.div.attrs(
  ({
    tasks,
    total
  }:{
    tasks:number,
    total:number
  })=>({
    tasks, 
    total,
    children: 
    <>
      <span>
        {selectWords(
          t`Finsihed ${tasks} tasks from ${total}`, 0, 3
        )} 
      </span> 
      <span>
        {selectWords(
          t`Finsihed ${tasks} tasks from ${total}`, 3
        )}
      </span>
    </>
  }))`
  >:first-child{
    ${p=>p.theme.font.body.semibold.t5}
    margin-right: 4px;
  }
  >:last-child{
    ${p=>p.theme.font.body.regular.t5}
  }
`,

Task = styled.div`
  display: flex;
  align-items: flex-start;
  line-height: 2rem;
  justify-content: center;
  align-items: center;
  >span:first-child{
    ${p=>p.theme.font.body.regular.t5}
    width: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  >div{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
    justify-content: center;
    cursor: pointer;
    >span{
      padding: 0;
      margin: 0;
      line-height: 2rem;
      display: flex;
      align-items: center;
      >svg:first-child{
        margin-right: 8px;
      }
    }
  }
  >span:last-child{
    ${p=>p.theme.font.body.semibold.t5}
    /* width: 28px; */
    /* flex: 0 0 auto; */
    justify-content: start;
    white-space: nowrap;
  }
`