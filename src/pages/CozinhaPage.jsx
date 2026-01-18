import React from 'react';
import concha from '../../public/images/conchas.jpg';
import panela from '../../public/images/panela inox.jpg';

const CozinhaPage = () => {
  return (
    <div className="container mt-5">
    
         
          <h1 className="text-center mb-4 ">O Segredo dos Chefs na Sua Cozinha!</h1>

          
          <div className="text-center mb-4">
            <img 
              src={concha} 
              alt="Utensílio de cozinha moderno" 
              className="img-fluid mt-5 mx-auto d-block rounded shadow"
            />
          </div>

         
          <div className="text-secondary">
            <p className="mt-5 text-center fs-5">
              Este não é apenas um utensílio, é seu novo assistente de cozinha. Com design ergonômico e material de alta durabilidade, ele simplifica tarefas complexas e inspira novas receitas. Prepare pratos incríveis com menos esforço e mais precisão.
            </p>
            <p className="mt-5 text-center fs-5">
              Feito com aço inoxidável e silicone de grau alimentício, é fácil de limpar e seguro para toda a família. Sua multifuncionalidade permite que você o utilize para cortar, misturar, servir e muito mais. É a peça que faltava para transformar sua cozinha.
            </p>
          </div>

          <img className="img-fluid mt-5 mx-auto d-block rounded shadow" src={panela} alt="panela de inox" />

          <p className="mt-5 text-center fs-5 text-secondary">
            Cozinhar é uma arte, e ter os utensílios certos faz toda a diferença. Invista em qualidade e funcionalidade para elevar suas habilidades culinárias .
          </p>
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

export default CozinhaPage;
