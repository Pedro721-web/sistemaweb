import { useForm } from 'react-hook-form';
import axios from 'axios';
//npm install react-hook-form
//npm install axios

function Funcionario() {
 
    return (
        <div className="app-container">
            <div className="main-content">Cadastro de Funcionario</div>
            <form >
                <div className="form-group">
                    <label>Nome</label>
                    {/* register('nome'): vincula o campo ao formulário */}
                    <input   type="text" placeholder="Nome do Produto" required />
                </div>
                <div className="form-group">
                    <label>Tipo</label>
                    {/* register('tipo'): vincula o campo ao formulário */}
                    <input   type="text" placeholder="Tipo do Produto" />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    
                    <input  type="text" placeholder="Descrição do Produto" />
                </div>
                <div className="form-group">
                    <label>Preço de Compra</label>
                   
                    <input  type="number" step="0.01" className="input-number" />
                </div>
                <div className="form-group">
                    <label>Preço de Venda</label>
                    
                    <input  type="number" step="0.01" className="input-number" />
                </div>
                <div className="form-group">
                    <label>Quantidade em Estoque</label>
                    
                    <input  type="number" className="input-number" />
                </div>
                <div className="form-group">
                    <label>Status</label>                    
                    <select>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">Cadastrar Funcionario</button>
                </div>
            </form>
        </div>
    );
}
export default Funcionario;
