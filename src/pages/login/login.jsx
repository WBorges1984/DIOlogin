import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button/button";
import Header from "../../components/Header/header";
import { Input } from "../../components/Input/input";
import "./loginStyle";

import { useNavigate } from "react-router-dom";
import {
    Collumn,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper,
} from "./loginStyle";
export default function Login(props) {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        console.log("sdf");
        navigate("/feed");
    };
    return (
        <>
            <Header />
            <Container>
                <Collumn>
                    <Title>
                        A plataforma para você aprender com experts, dominar as
                        principais tecnologias e entrar mais rápido nas empresas
                        mais desejadas.
                    </Title>
                </Collumn>
                <Collumn>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>
                            Fça seu logon e make the change._
                        </SubTitleLogin>
                        <form>
                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                            />
                            <Input
                                placeholder="Senha"
                                type="password"
                                leftIcon={<MdLock />}
                            />
                            <Button
                                title="Entrar"
                                variant="secondary"
                                onClick={handleClickSignIn}
                                type="button"
                            />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minnha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Collumn>
            </Container>
        </>
    );
}
