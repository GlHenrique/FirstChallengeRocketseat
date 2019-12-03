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
                name: "Rafael Bambu",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "10 Jun 2019",
            content: "Alguém sabe onde têm algum traveco do bom?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Kuririm de Alcântara",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Tem lá no Bob Esponja de Orlândia tem muitos anjinhos"
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
            content: "Quando que começa as férias da Fatec?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Juninho Tiozão",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Quando terminar as aulas HAHSUHAUHSUA 'eu sou zueirãum'"
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
            content: "Alguém aqui sabe que dia o Roland vai postar as notas?",
            comments: [
                {
                    // id: 1,
                    author: {
                        name: "Cuca Beludo",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "Relaxa! Roland dá 8 para geral só para não te ver de novo"
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
                    />
                ))
                }
            </div>
        </div>
    )

}
