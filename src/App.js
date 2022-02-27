import React, { Component } from "react";
import "./App.css";
import Comentario from "./components/Comentario";

class App extends Component {
    state = {
        comentarios: [
            {
                nome: "Hubert",
                email: "hubert@mail.com",
                data: new Date(2022, 2, 23),
                mensagem: "Ói",
            },
            {
                nome: "William",
                email: "will@mail.com",
                data: new Date(2022, 2, 23),
                mensagem: "Ói, tudo bem?",
            },
        ],
        novoComentario: {
            nome: "",
            email: "",
            mensagem: "",
        },
    };

    adicionarComentario = (e) => {
        e.preventDefault();
        const novoComentario = { ...this.state.novoComentario, data: new Date() }
        this.setState({
            comentarios: [...this.state.comentarios, novoComentario],
            novoComentario: {nome: '', email: '', mensagem: ''}
        });
    };

    digitacao = e => {
        const {name, value} = e.target
        this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value }})
    }

    render() {
        return (
            <div className="App">
                <h1>Todoist</h1>
                {this.state.comentarios.map((comentario, index) => {
                    return (
                        <Comentario
                            key={index}
                            nome={comentario.nome}
                            email={comentario.email}
                            data={comentario.data}
                        >
                            {comentario.mensagem}
                        </Comentario>
                    );
                })}

                <form method="post" onSubmit={this.adicionarComentario}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Nome</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="nome"
                            value={this.state.novoComentario.nome}
                            onChange={this.digitacao}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            value={this.state.novoComentario.email}
                            onChange={this.digitacao}
                            placeholder="name@example.com"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                            Mensagem
                        </label>
                        <textarea
                            class="form-control"
                            name="mensagem"
                            value={this.state.novoComentario.mensagem}
                            onChange={this.digitacao}
                            rows="3"
                        ></textarea>
                    </div>
                    <hr />
                    <button className="btn btn-success" type="submit">
                        Adicionar comentário
                    </button>
                </form>
            </div>
        );
    }
}

export default App;
