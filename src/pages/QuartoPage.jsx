import React from 'react';
import imagens from '../../public/images/imagem.jpg';
import quarto from '../../public/images/quarto.jpg';

const QuartoPage = () => {
  return (
    <div className="container mt-5">
     <h1 className="text-center mb-4">O Design que inspira, conforto que acolhe!</h1>
      
    <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={quarto} alt="" />
      <p className="mt-5 text-center fs-5 text-secondary">Seu quarto com personalidade, elegância e bem-estar em cada detalhe.Mais conforto, mais estilo, mais você.</p>
      <p className="mt-5 text-center fs-5 text-secondary">Com modernização sem deixar de pensar na importância de sua saúde no momento de descanso depois de uma longa jornada de trabalho.</p>
    <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={imagens} alt="" />

    <p className="mt-5 text-center fs-5 text-secondary">Que tal vermos alguns itens para deixar seu quarto do jeito que você deseja?</p>
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

export default QuartoPage;
