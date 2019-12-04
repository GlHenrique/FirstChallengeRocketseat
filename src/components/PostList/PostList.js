import React from 'react';
import PostCard from "../PostCard/PostCard";
import "./PostList.css";


export default function PostList() {

    const list = [

        {
            id: 1,
            author: {
                name: "João de Barro",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Dez 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Tonin da Borracharia",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Pergunta lá no posto Ipiranga!"
                }
            ]
        },
        {
            id: 2,
            author: {
                name: "Rafa Moreira",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "10 Jun 2019",
            content: "Alguém sabe onde tem seda?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Kuririm",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Lá no 13º DP tem... rsrsrs"
                }
            ]
        },
        {
            id: 3,
            author: {
                name: "João Butina",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Quando que acaba as aulas da Fatec?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Juninho",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Dia 10/07. Exceto para mim que to de DP kkk"
                }
            ]
        },
        {
            id: 4,
            author: {
                name: "Paula Tejando",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Alguém aqui sabe que dia o Senhor Miyagi vai postar as notas?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Cuca B.",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Relaxa! Ele dá 8 para geral só para não te ver de novo"
                }
            ]
        },


    ];

    return (
        <div className={"container-comments"}>
            <div>
                {list.map(item => (
                    <PostCard
                        date={item.date}
                        name={item.author.name}
                        content={item.content}
                        author={item.author.name}
                        key={item.id}
                        authorComments={item.comments[0].author.name}
                        contentComments={item.comments[0].content}
                    />
                ))
                }
            </div>
        </div>
    )

}
