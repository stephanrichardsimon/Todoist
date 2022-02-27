import React, { Component } from "react";
import "./App.css";
import Comentario from "./components/Comentario";

class App extends Component {
    state = {
        comentarios: [],
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

    removerComentario = comentario => {
        let lista = this.state.comentarios;
        lista = lista.filter(c => c !== comentario)
        this.setState({ comentarios: lista })
    }

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
                            onRemove = {this.removerComentario.bind(this, comentario)}
                        >
                            {comentario.mensagem}
                        </Comentario>
                    );
                })}

                <form method="post" onSubmit={this.adicionarComentario}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Nome</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nome"
                            value={this.state.novoComentario.nome}
                            onChange={this.digitacao}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.novoComentario.email}
                            onChange={this.digitacao}
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            Mensagem
                        </label>
                        <textarea
                            className="form-control"
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
