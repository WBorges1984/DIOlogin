import Card from "../../components/Card/card";
import Header from "../../components/Header/header";
import { UserInfo } from "../../components/UserInfo/userInfo";
import "./feedStyle";

import { Column, Container, Title, TitleHighLight } from "./feedStyle";
export default function Feed(props) {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo
                        percentual={35}
                        nome="Willian borges"
                        image="https://avatars.githubusercontent.com/u/134416210?s=400&u=255930893b4b05c17c4e735f310060052cb986f3&v=4"
                    />
                    <UserInfo
                        percentual={55}
                        nome="Willian borges"
                        image="https://avatars.githubusercontent.com/u/134416210?s=400&u=255930893b4b05c17c4e735f310060052cb986f3&v=4"
                    />
                    <UserInfo
                        percentual={82}
                        nome="Willian borges"
                        image="https://avatars.githubusercontent.com/u/134416210?s=400&u=255930893b4b05c17c4e735f310060052cb986f3&v=4"
                    />
                    <UserInfo
                        percentual={98}
                        nome="Willian borges"
                        image="https://avatars.githubusercontent.com/u/134416210?s=400&u=255930893b4b05c17c4e735f310060052cb986f3&v=4"
                    />
                </Column>
            </Container>
        </>
    );
}
