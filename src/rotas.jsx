//Para importar as Rotas é necessário utilizar o: npm install react-router-dom
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; //aqui
import Home from './pages/Home/home_api.jsx'
import Login from './pages/Login/login.jsx'
import Header from './pages/Header/header.jsx' //aqui
import Produto from './pages/Produto/produto.jsx'
import Funcionario from './pages/Funcionario/funcionario.jsx'
import Usuario from './pages/Usuario/usuario.jsx'

function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />


            <Route element={<Layout />} >

                <Route path="/home" element={<Home />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/funcionario" element={<Funcionario />} />
                <Route path="/usuario" element={<Usuario />} />

            </Route>


            </Routes>
        </BrowserRouter>            

    )
}
// layout com Header

function Layout(){
    return(
    <>
        <Header /> {/*Exibe o cabeçalho */}
    <main>
        <Outlet /> {/* Aqui o conteúdo da página */}
    </main>
    </>
)
}


export default RoutesApp;