import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import Header from "../../components/Header/header";
import "./homeStyle";

import { Container, TextContent, Title, TitleHighLight } from "./homeStyle";
export default function Home(props) {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/login");
        console.log("aquii");
    };
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente
                            <br />
                        </TitleHighLight>
                        o seu futuro Global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais
                        inovadoras do mundo e encare seu novo desafio
                        profissional,evoluindo em comunidade com os melhores
                        experts.
                    </TextContent>
                    <Button
                        title="Começar agora"
                        variant="secondary"
                        onClick={handleClickSignIn}
                    />
                </div>
                <div>
                    <img src="" alt="Imagem principal" />
                </div>
            </Container>
        </>
    );
}
