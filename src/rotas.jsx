//Para importar as Rotas é necessário utilizar o: npm install react-router-dom
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home/home_api.jsx';
import Login from './pages/Login/Login.jsx';
import Header from './pages/Header/header.jsx';
import Produto from './pages/Produto/produto.jsx';
import Funcionario from './pages/Funcionario/funcionario.jsx';
import Usuario from './pages/Usuario/usuario.jsx';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Rota de Login (sem Header) */}
                <Route path="/" element={<Login />} />

                {/* Rota de Usuário isolada (sem o Header) */}
                <Route path="/usuario" element={<Usuario />} />

                {/* Rotas que possuem o Header através do Layout */}
                <Route element={<Layout />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/produto" element={<Produto />} />
                    <Route path="/funcionario" element={<Funcionario />} />
                </Route>
            </Routes>
        </BrowserRouter>            
    );
}

// Layout com Header para as páginas que precisam dele
function Layout(){
    return(
        <>
            <Header /> {/* Exibe o cabeçalho */}
            <main>
                <Outlet /> {/* Aqui entra o conteúdo da página */}
            </main>
        </>
    );
}

export default RoutesApp;