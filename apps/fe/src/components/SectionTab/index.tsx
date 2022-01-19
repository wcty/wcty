import { ISectionTab } from "./ISectionTab";
import { Container } from "./styles";

export interface ISectionTabProps extends ISectionTab {}

function SectionTab(props : ISectionTabProps) {
    return(
        <Container {...props}>
            {props.label}
        </Container>
    )
}

export default SectionTab;