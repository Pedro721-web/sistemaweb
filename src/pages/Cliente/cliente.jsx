function Cliente  () {
    return(
        <div>
            <div className="app-container">
            <div className="main-content">
                Cadastro de Cliente
            </div>
                <form>
                    <div className="form-group">
                        <label>Nome do Cliente</label>
                        <input type="text" placeholder="Nome do Cliente" required />
                    </div>
                    <div className="form-group">
                        <label>Email do Cliente</label>
                        <input type="text" placeholder="Email do Cliente" />
                        </div>
                          
                          <div className="form-group">
                        <label>Senha do Cliente</label>
                        <input type="text" placeholder="Senha do Cliente" />
                    </div>

                    <div className="form-group">
                        <label>Endereço do Cliente</label>
                        <input type="text" placeholder="Endereço do Cliente" />
                    </div>

                      <div className="form-group">
                        <label>CPF do Cliente</label>
                        <input type="text" placeholder="CPF do Cliente" />
                    </div>

                      <div className="form-group">
                        <label>Telefone do Cliente</label>
                        <input type="text" placeholder="Telefone do Cliente" />
                    </div>
                    
                    <div className="form-group">
                    <button>Cadastrar Cliente</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Cliente