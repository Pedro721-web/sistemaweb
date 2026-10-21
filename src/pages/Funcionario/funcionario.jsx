import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './funcionario.css';

function Funcionario() {
    const [funcionarios, setFuncionarios] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [editandoId, setEditandoId] = useState(null);

    // Função auxiliar para extrair com segurança a lista da API
    const extrairDadosDaResposta = (res) => {
        const dadosBrutos = res.data?.data || res.data?.funcionarios || res.data;
        return Array.isArray(dadosBrutos) ? dadosBrutos : [];
    };

    const recarregar = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/funcionarios');
            setFuncionarios(extrairDadosDaResposta(res));
        } catch (err) {
            console.error("Erro ao recarregar funcionários:", err);
        }
    };

    const onSubmit = async (data) => {
        data.codStatus = data.codStatus === 'true';
        
        try {
            if (editandoId) {
                await axios.put(`http://localhost:8080/api/v1/funcionarios/${editandoId}`, data);
                console.log('Funcionário atualizado!');
                setEditandoId(null);
            } else {
                await axios.post('http://localhost:8080/api/v1/funcionarios', data);
                console.log('Funcionário cadastrado!');
            }

            reset({
                nome: '',
                email: '',
                telefone: '',
                departamento: '',
                cargo: '',
                descricao: '',
                codStatus: 'true'
            });
            recarregar();
        } catch (err) {
            console.error("Erro ao salvar funcionário:", err);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/funcionarios')
            .then(res => setFuncionarios(extrairDadosDaResposta(res)))
            .catch(err => {
                console.error("Erro ao buscar funcionários inicial:", err);
                setFuncionarios([]);
            });
    }, []);

    const excluir = (id) => {
        axios.delete(`http://localhost:8080/api/v1/funcionarios/${id}`)
            .then(() => setFuncionarios(funcionarios.filter(f => f.id !== id)))
            .catch(err => console.error("Erro ao excluir:", err));
    };

    const prepararEdicao = (f) => {
        setEditandoId(f.id);
        reset({
            nome: f.nome,
            email: f.email,
            telefone: f.telefone,
            departamento: f.departamento,
            cargo: f.cargo,
            descricao: f.descricao,
            codStatus: String(f.codStatus)
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelarEdicao = () => {
        setEditandoId(null);
        reset({
            nome: '',
            email: '',
            telefone: '',
            departamento: '',
            cargo: '',
            descricao: '',
            codStatus: 'true'
        });
    };

    return (
        <div className="app-container">
            <div className="main-content">
                {editandoId ? `Editando Funcionário #${editandoId}` : 'Cadastro de Funcionário'}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Nome Completo</label>
                    <input {...register('nome')} type="text" placeholder="Nome do Funcionário" required />
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input {...register('email')} type="email" placeholder="email@empresa.com" required />
                </div>

                <div className="form-group">
                    <label>Telefone</label>
                    <input {...register('telefone')} type="text" placeholder="(00) 00000-0000" />
                </div>

                <div className="form-group">
                    <label>Departamento</label>
                    <select {...register('departamento')}>
                        <option value="">Selecione o departamento</option>
                        <option value="ti">Tecnologia (TI)</option>
                        <option value="rh">Recursos Humanos</option>
                        <option value="financeiro">Financeiro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Função</label>
                    <input {...register('cargo')} type="text" placeholder="Tipo de função" />
                </div>

                <div className="form-group">
                    <label>Descrição</label>
                    <input {...register('descricao')} type="text" placeholder="Descrição da função" />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select {...register('codStatus')}>
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </select>
                </div>

                <div className="form-actions" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                    <button type="submit">
                        {editandoId ? 'Salvar Alterações' : 'Cadastrar Funcionário'}
                    </button>
                    {editandoId && (
                        <button type="button" className="btn-cancelar" onClick={cancelarEdicao}>
                            Cancelar
                        </button>
                    )}
                </div>
            </form>

            <table className="lista-tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map(f => (
                        <tr key={f.id}>
                            <td>{f.id}</td>
                            <td>{f.nome}</td>
                            <td>{f.cargo}</td>
                            <td>
                                <div className="btn-acoes">
                                    <button type="button" className="btn-atualizar" onClick={() => prepararEdicao(f)}>Atualizar</button>
                                    <button type="button" className="btn-excluir" onClick={() => excluir(f.id)}>Excluir</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Funcionario;