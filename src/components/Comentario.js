import React from "react";
import "./Comentario.css"
import imagemUsuario from "./user.png"

const Comentario = props => {
    return (
        <div className="Comentario">
            <img className="avatar" src={imagemUsuario} alt={props.nome}></img>
            <div className="conteudo">
                <h2 className="nome">{props.nome}</h2>
                <p className="email">{props.email}</p>
                <p className="mensagem">{props.children}</p>
                <p className="data">{props.data.toString()}</p>
                <button onClick={props.onRemove} className="btn btn-danger">X</button>
            </div>
        </div>
    )
}

export default Comentario;