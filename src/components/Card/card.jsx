import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from "./cardStyles";
const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/134416210?s=400&u=255930893b4b05c17c4e735f310060052cb986f3&v=4" />
                    <div>
                        <h4>Willian Borges</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>
                        Projeto feito no curso de html e css do Bootcamp dio do
                        Global avanade... <strong>Saiba Mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
};

export default Card;
