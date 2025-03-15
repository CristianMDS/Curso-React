import Styled from 'styled-components';

const StyledButton = Styled.button`
    background: ${(props) => props.blue ? "blue":"gray"}
`;

const Button = ({children, blue}) => {
    return <StyledButton blue={blue}>{children}</StyledButton>
}

export default Button