import React from 'react';
import banheiro from '../../public/images/banheiro.jpg';
import banheiroOrganizado from '../../public/images/banheiro organizado.jpg';

const BanheiroPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">O Segredo para um banheiro organizado!</h1>



   <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={banheiro} alt="Banheiro" />

      <p className="mt-5 text-center fs-5 text-secondary">Como é bom ter um banheiro limpo e cheiroso, com um toque de modernidade e sofisticação, não é mesmo? Deixar organizado seus itens no banheiro é essencial para manter a higiene e o conforto.</p>

      <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={banheiroOrganizado} alt="Banheiro organizado" />

      <p className='mt-5 text-center fs-5 text-secondary'>Que tal vermos alguns itens para deixar seu banheiro do jeito que você deseja?</p>


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

export default BanheiroPage;
