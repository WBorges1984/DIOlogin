import React from "react";
import Button from "../../components/Button/button";

import { UserPicture } from "../UserInfo/userInfoStyles";
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
} from "./style";

export default function Header({ autenticado }) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src="https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR.png"
                        alt="Logo DIO"
                        width={47}
                    />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar" />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="tps://avatars.githubusercontent.com/u/134416210?s=400&u=255930893b4b05c17c4e735f310060052cb986f3&v=4" />
                    ) : (
                        <>
                            <MenuRight href="">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
}
