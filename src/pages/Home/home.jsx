import './home.css';

const pizzas = [
  { nome: 'Margherita', desc: 'Molho, mussarela e manjericão', preco: 'R$ 39,90' },
  { nome: 'Calabresa', desc: 'Molho, calabresa e cebola', preco: 'R$ 42,90' },
  { nome: 'Frango c/ Catupiry', desc: 'Molho, frango e catupiry', preco: 'R$ 45,90' },
  { nome: 'Mussarela', desc: 'Mussarela', preco: 'R$ 59,90' },
  
];

function Home() { 
  return ( 
    <div className="home">
      <header className="hero">
        <h1>Pizzaria Bella Napoli</h1>
        <p>A melhor pizza da cidade, feita com amor e ingredientes frescos.</p>
        <a href="#cardapio" className="btn">Ver Cardápio</a>
      </header>

      <section id="cardapio" className="cardapio">
        <h2>Nossas Pizzas</h2>
        <div className="cards">
          {pizzas.map((p) => (
            <div className="card" key={p.nome}>
              <span className="pizza-icon"></span>
              <h3>{p.nome}</h3>
              <p>{p.desc}</p>
              <strong>{p.preco}</strong>
              <button>Pedir agora</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Rua das Pizzas, 123 &nbsp;|&nbsp; (11) 99999-9999</p>
      </footer>
    </div>
  );
}
export default Home;