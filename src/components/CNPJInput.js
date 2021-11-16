import React, { useEffect, useState } from "react";
import { Botao } from "../styles/Botao";
import { InputCNPJ } from "../styles/InputCNPJ";
import axios from "axios";
import "../App.css";

export const CNPJInput = () => {
    const BASE_URL = "http://localhost:3001/api/v1/cnpj/";
    const [cnpjData, setCnpjData] = useState({});
    const [cnpjInputData, setCnpjInputData] = useState('');

    const fetchCnpjData = () => {
        const url = BASE_URL + cnpjInputData;
        axios.get(url)
         .then(function (response) {
            setCnpjData(response.data);
        })
    };

    useEffect (() => {

    }, [cnpjData]);

    const handleClick = () => {
        fetchCnpjData();
    };

    const handleInputCnpj = (evento) => {
        setCnpjInputData(evento.target.value);
    };

    return (
        <section className="geral">
            <h1>Consulte o CNPJ desejado:</h1>
            <InputCNPJ type="number" id="cnpj" placeholder="Ex:99999999999999" onChange={handleInputCnpj}/>
            <Botao onClick={handleClick}>Buscar</Botao>
            <br/>
            <div className="line"></div>
            <h1 id="dadosCnpj">Dados do CNPJ</h1>
            <div className="answers">
                <h3>Filial ou Matriz: {cnpjData.descricao_matriz_filial}</h3>
                <h3>UF: {cnpjData.uf}</h3>
                <h3>Razão Social: {cnpjData.razao_social}</h3>
                <h3>Nome Fantasia: {cnpjData.nome_fantasia}</h3>
                <h3>Situação Geral: {cnpjData.descricao_situacao_cadastral}</h3>
            </div>
        </section>
    )
};

