import React, { useState, useEffect } from 'react';
import inicial from '../../public/images/inicial.jpg';
import espelho from '../../public/images/espelho.jpg';
import lugar from '../../public/images/lugar.jpg';
import familia from '../../public/images/familia.jpg';
import silicone from '../../public/images/silicone.jpg';
import panela from '../../public/images/panela de ceramica.jpg';
import imagem from '../../public/images/imagem.jpg';
import item from '../../public/images/colchao.jpg';
import item2 from '../../public/images/quarto.jpg';
const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    padding: '1rem 0',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '1rem',
    borderRadius: '8px',
  };

  
  const images = [
    'lugar.jpg',
    'familia.jpg',
    'espelho.jpg',
    'silicone.jpg',
    'panela de ceramica.jpg',
    'imagem.jpg',
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container-fluid p-0">
      
      <div className="text-center" style={{ height: '400px', overflow: 'hidden' }}>
        <img 
          src={inicial} 
          alt="Imagem chamativa" 
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      
      <div className="container text-center my-5">
        <p className="lead fs-3">
           Transforme sua casa em um lar dos sonhos com móveis e utensílios que fazem a diferença.
        </p>
      </div>

     
      <div className="bg-light py-4">
        <div className="container">
          <div style={{ textAlign: 'center', overflow: 'hidden' }}>
            <img className='carousel-img'
              src={[espelho, lugar, familia, silicone, panela, imagem][currentImageIndex % 6]}
              alt={`Item ${currentImageIndex + 1}`} 
            />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            {images.map((_, index) => (
              <span
                key={index}
                style={{
                  height: '10px',
                  width: '10px',
                  margin: '0 5px',
                  backgroundColor: index === currentImageIndex ? '#333' : '#ddd',
                  borderRadius: '50%',
                  display: 'inline-block',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2>Modernidade, Sofisticação e Segurança</h2>
            <p className='mt-5'>
              Nossa curadoria de utensílios é pensada para trazer não apenas beleza e modernidade para sua casa, mas também praticidade e segurança para o seu dia a dia. Cada peça é selecionada para elevar sua experiência de viver bem.
            </p>
          </div>
        </div>
      </div>

     
      
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-6">
            <h4>Antes</h4>
            <img 
              src={item}
              alt="Antes do utensílio" 
              className="before-after-img rounded shadow"
            />
            <p className="mt-2">Um ambiente comum.</p>
          </div>
          <div className="col-md-6">
            <h4>Depois</h4>
            <img 
              src={item2}
              alt="Depois do utensílio" 
              className="before-after-img rounded shadow"
            />
            <p className="mt-2">Um ambiente transformado com nossos utensílios.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
