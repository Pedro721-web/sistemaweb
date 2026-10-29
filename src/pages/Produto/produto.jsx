import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Produto() {
    // 1. BLINDAGEM: Garantimos que se o estado começar ou receber algo inválido, ele volta para um array vazio []
    const [produtos, setProduto] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [editandoId, setEditandoId] = useState(null);

    // Função auxiliar para extrair com segurança a lista da API
    const extrairDadosDaResposta = (res) => {
        // Tenta buscar de res.data.data, res.data ou res.data.produtos
        const dadosBrutos = res.data?.data || res.data?.produtos || res.data;
        return Array.isArray(dadosBrutos) ? dadosBrutos : [];
    };

    const recarregar = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/produtos');
            setProduto(extrairDadosDaResposta(res));
        } catch (err) {
            console.error("Erro ao recarregar produtos:", err);
        }
    };

    const onSubmit = async (data) => {
        data.codStatus = data.codStatus === 'true';
        
        try {
            if (editandoId) {
                // CORREÇÃO: Adicionada a barra '/' antes do ID
                await axios.put(`http://localhost:8080/api/v1/produtos/${editandoId}`, data);
                console.log('Produto atualizado!');
                setEditandoId(null);
            } else {
                await axios.post('http://localhost:8080/api/v1/produtos', data);
                console.log('Produto cadastrado!');
            }

            reset({ nome: '', tipo: '', descricao: '', valorCompra: '', valorVenda: '', quantidadeEstoque: '', codStatus: 'true' });
            recarregar();
        } catch (err) {
            console.error("Erro ao salvar produto:", err);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/produtos')
            .then(res => setProduto(extrairDadosDaResposta(res)))
            .catch(err => {
                console.error("Erro ao buscar produtos inicial:", err);
                setProduto([]); // Evita que o estado fique undefined em caso de falha
            });
    }, []);

    const excluir = (id) => {
        // CORREÇÃO: Adicionada a barra '/' antes do ID
        axios.delete(`http://localhost:8080/api/v1/produtos/${id}`)
            .then(() => setProduto(produtos.filter(p => p.id !== id)))
            .catch(err => console.error("Erro ao excluir:", err));
    };

    const prepararEdicao = (p) => {
        setEditandoId(p.id);
        reset({
            nome: p.nome,
            tipo: p.tipo,
            descricao: p.descricao,
            // CORREÇÃO: Mapeado de valorCompra/valorVenda para combinar com os nomes do register do formulário
            valorCompra: p.valorCompra || p.precoCompra,
            valorVenda: p.valorVenda || p.precoVenda,
            quantidadeEstoque: p.quantidadeEstoque,
            codStatus: String(p.codStatus)
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelarEdicao = () => {
        setEditandoId(null);
        reset({ nome: '', tipo: '', descricao: '', valorCompra: '', valorVenda: '', quantidadeEstoque: '', codStatus: 'true' });
    };

    return (
        <div className="app-container">
            <div className="main-content">{editandoId ? `Editando Produto #${editandoId}` : 'Cadastro de Produto'}</div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Nome</label>
                    <input {...register('nome')} type="text" placeholder="Nome do Produto" required />
                </div>
                <div className="form-group">
                    <label>Tipo</label>
                    <input {...register('tipo')} type="text" placeholder="Tipo do Produto" />
                </div>
                <div className="form-group">
                    <label>Descrição</label> 
                    <input {...register('descricao')} type="text" placeholder="Descrição do Produto" />
                </div>
                <div className="form-group">
                    <label>Preço de Compra</label>
                    <input {...register('valorCompra', { valueAsNumber: true })} type="number" step="0.01" className="input-number" />
                </div>
                <div className="form-group">
                    <label>Preço de Venda</label>
                    <input {...register('valorVenda', { valueAsNumber: true })} type="number" step="0.01" className="input-number" />
                </div>
                <div className="form-group">
                    <label>Quantidade em Estoque</label>
                    <input {...register('quantidadeEstoque', { valueAsNumber: true })} type="number" className="input-number" />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select {...register('codStatus')}>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">{editandoId ? 'Salvar Alterações' : 'Cadastrar Produto'}</button>
                </div>
                {editandoId && (
                    <div className="form-group">
                        <button type="button" className="btn-cancelar" onClick={cancelarEdicao}>Cancelar</button>
                    </div>
                )}
            </form>

            <table className="lista-tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Desc</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {/* O map agora está seguro contra valores nulos ou undefined */}
                    {produtos.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.descricao}</td>
                            <td>
                                <div className="btn-acoes">
                                    <button type="button" className="btn-atualizar" onClick={() => prepararEdicao(p)}>Atualizar</button>
                                    <button type="button" className="btn-excluir" onClick={() => excluir(p.id)}>Excluir</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Produto;