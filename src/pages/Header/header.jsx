import React from 'react';
import './header.css';

function Header(){
    return(
        <header className="site-header">
            <div className="logo-container">
                <span className="logo-text">Pizzaria ITB</span> 
            </div>
            
            <nav className="nav-links">
                <a href="/home" className='abas'>Home</a>
                <span className='separador'>|</span>

                <a href="/produto" className='abas'>Produto</a>
                <span className='separador'>|</span>

                <a href="/funcionario" className='abas'>Funcionário</a>
                <span className='separador'>|</span>

                {/* Ícone de Perfil / Usuário */}
                <a href="/usuario" className='abas icone-perfil' title="Perfil do Usuário">
                    <svg 
                        width="22" 
                        height="22" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </a>
            </nav>            
        </header>
    );
}

export default Header;