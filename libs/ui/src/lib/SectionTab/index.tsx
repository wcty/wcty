import { ISectionTab } from "./ISectionTab";
import { Container } from "./styles";

export interface ISectionTabProps extends ISectionTab {}

export function SectionTab(props : ISectionTabProps) {
    return(
        <Container {...props}>
            <span>{props.label}</span>
        </Container>
    )
}
