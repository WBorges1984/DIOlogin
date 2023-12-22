import { ButtonContainer } from "./style";

export default function Button({ title, variant = "primary", onClick }) {
    return (
        <ButtonContainer variant={variant} onClick={onclick}>
            {title}
        </ButtonContainer>
    );
}
