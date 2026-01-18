import React from 'react';
import item from '../../public/images/sala nova.jpg';
import sala from '../../public/images/sala.jpg';

const SalaPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Aquele momento agradavél com a familia e amigos!</h1>

    <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={item} alt="Sala de Estar" />

      <p className="mt-5 text-center fs-5 text-secondary">A sala de estar é o coração da casa, onde passamos momentos especiais com a família e amigos. Ter um ambiente acolhedor e bem decorado faz toda a diferença para criar memórias inesquecíveis.</p>

      <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={sala} alt="sala " />

      <p className='mt-5 text-center fs-5 text-secondary'>Vamos conferir alguns itens que podem transformar sua sala em um espaço ainda mais convidativo?</p>

      <div className="text-center mt-4">
            <a 
              href="https://www.example.com/comprar" 
              className="btn btn-primary btn-lg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Clique Aqui
            </a>
          </div>
    </div>
  );
};

export default SalaPage;
