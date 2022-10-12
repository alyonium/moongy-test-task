import cassette from './cassette.png';
import { HeaderWrapper, Logo } from './styles';

export const Header = () => (
  <HeaderWrapper href="/">
    <Logo src={cassette} alt="cassette" />
    videocasette
  </HeaderWrapper>
);
