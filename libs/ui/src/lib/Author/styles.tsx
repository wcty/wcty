import styled, { css } from 'styled-components'
import { flexbox, FlexboxProps, layout, LayoutProps, position, PositionProps, space, SpaceProps } from 'styled-system'

export const 
AuthorContainer  = styled.div<LayoutProps & FlexboxProps & SpaceProps & PositionProps>`
  display: flex;
  flex-direction: row;
  ${space}
  ${flexbox}
  ${layout}
  ${position}
`,

Name = styled.div`
  ${props => props.theme.font.body.semibold.t5};
  :hover{
    text-decoration: underline;
  }
  :active{
    text-decoration: underline;
  }
`,

Roles = styled.div`
  ${props => props.theme.font.body.regular.t5}
  color: ${props => props.theme.colors.label};
  text-transform: capitalize;
`,

Date = styled.div`
  ${props => props.theme.font.body.regular.t5}
  color: ${props => props.theme.colors.label}
`,

UserInfo = styled.div.attrs(({
  name, roles, date
}: {
  name: string,
  roles: string[],
  date: Date
})=>({
  name, roles, date,
  children: <>
      <Name>{name}</Name>
      <Roles>{roles?.join?.()}</Roles>
      <Date>{date?.toDateString?.()}</Date>
    </>
}))`
  display: flex;
  flex-direction: column;
`
