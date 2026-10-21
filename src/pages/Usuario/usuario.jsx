import { useState, useEffect } from "react";
import axios from "axios";


const Usuario = () => {
    
  return(

    <div className="app-container">
            <div className="main-content">
               Cadastrar Usuário
            </div>

            <form>
                 <div className="form-group">
                    <label>Nome</label>
                    <input type="text" placeholder="Digite seu nome" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" required />
                </div>

                <div className="form-group">
                    <label for="select">Status</label>
                    <select id="select" name="select">
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>      

                <div className="form-group">
                  <button>Cadastrar Usuário</button>
                </div>
            </form>
    </div>
 )
}
export default Usuario
