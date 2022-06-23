import Logo from '../../assets/logo.svg';
import DiscordIcon from '../../assets/discord.svg';
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='Logo Tech People' />
      <img src={DiscordIcon} alt='Discord Tech People' />
    </header>
  );
};

export default Header;
