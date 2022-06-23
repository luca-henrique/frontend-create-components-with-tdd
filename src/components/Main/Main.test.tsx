import Main from './index';
import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

describe('Main of the group', () => {
  it('should ', () => {
    getRenderer();
    expect(
      screen.getByRole('heading', {name: 'Tem uma vaguinha aí?'}),
    ).toBeInTheDocument();
  });

  it('should a have p', () => {
    getRenderer();
    expect(
      screen.getByText(
        'Nosso servidor Pessoas de Tech tem mais de 1.000 desenvolvedores júniores querendo uma oportunidade.',
      ),
    ).toBeInTheDocument();
  });

  it('should a have description', () => {
    getRenderer();
    expect(
      screen.getByText(
        'Tanto que alguns deles criaram esta plataforma para automatizar a inserção de vagas lá no discord. Tem uma portunidade? Preencha o formulário abaixo.',
      ),
    ).toBeInTheDocument();
  });

  it('should a have image ', () => {
    getRenderer();

    expect(
      screen.getByRole('img', {name: 'Pessoas programadoras'}),
    ).toBeInTheDocument();
  });

  it('should a have button', () => {
    getRenderer();

    expect(screen.getByRole('button', {name: 'Opa, vamos lá!'}));
  });

  it('should click the onClick callback', async () => {
    const onClick = jest.fn();

    getRenderer();

    await userEvent.click(screen.getByRole('button'));

    expect(onClick).not.toBeCalled();
  });

  it('should have main', () => {
    getRenderer();

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

function getRenderer() {
  return render(<Main />);
}
