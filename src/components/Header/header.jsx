import React from "react";
import Button from "../../components/Button/button";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
} from "./style";

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src="https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR.png"
                        alt="Logo DIO"
                        width={47}
                    />
                    <BuscarInputContainer>
                        <Input placeholder="Buscar" />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    );
}
