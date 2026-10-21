import { useState, useEffect } from 'react';
import axios from 'axios';
//import './home_api.css';
 
function HomeApi() {
    const [produtos, setProduto] = useState([]);

    const excluir = (id) => {
        axios.delete(`http://localhost:8080/api/v1/produtos/${id}`)
            .then(() => setProduto(produtos.filter(p => p.id !== id)));
    };

     useEffect(() => {
    axios.get('http://localhost:8080/api/v1/produtos')
        .then(res => {
            console.log("Resposta da API:", res.data);

            const dados = Array.isArray(res.data)
                ? res.data
                : res.data?.produtos;

            setProduto(Array.isArray(dados) ? dados : []);
        })
        .catch(err => {
            console.error("Erro ao buscar produtos:", err);
        });
}, []);



 
   return (
    <div>
        <div className="cardapio">
            <h2>🍕 Cardápio de Pizzas</h2>
            <div className="cards">
                {produtos.map(p => (
                    <div className="card" key={p.id}>
                        <span className="pizza-icon">🍕</span>
                        <h3>{p.nome}</h3>
                        <p>{p.descricao}</p>
                        <p>{p.tipo}</p>
                        <strong>R$ {p.valorVenda.toFixed(2)}</strong>
                        <div className="card-buttons">
                        </div>
                       
                    
                    </div>
                ))}
            </div>
        </div>
        <footer>0 2026 Pizzaria</footer>
    </div>
   );
}
export default HomeApi