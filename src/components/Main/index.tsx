import LogoMain from '../../assets/Illustration.png';
import './style.css';

const Main = () => {
  return (
    <main>
      <div>
        <h1 className='title'>Tem uma vaguinha aí?</h1>
        <p className='subtitle'>
          Nosso servidor <strong>Pessoas de Tech</strong> tem
          <strong>mais de 1.000 </strong>
          desenvolvedores júniores querendo uma oportunidade.
        </p>
        <p className='description'>
          Tanto que alguns deles criaram esta plataforma para automatizar a
          inserção de vagas lá no discord. Tem uma portunidade? Preencha o
          formulário abaixo.
        </p>

        <button>Opa, vamos lá!</button>
      </div>

      <div>
        <img src={LogoMain} alt='Pessoas programadoras' />
      </div>
    </main>
  );
};

export default Main;
