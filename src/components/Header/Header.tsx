import { useNavigate } from 'react-router-dom';
import { SingleValue } from 'react-select';
import Cassette from 'icons/cassette.png';
import {
  HeaderWrapper, ContentWrapper, LogoWrapper, LogoImage, SearchBar,
} from './styles';
import { loadOptions } from './loadOptions';
import { customStyles } from './selectStyles';

type Option = {
  value: string;
  label: string;
};

export const Header = () => {
  const navigate = useNavigate();
  const handleChange = (option: SingleValue<Option>) => {
    const params = new URLSearchParams();
    if (option) {
      params.set('showId', option.value);
    }
    navigate(`/?${params}`);
  };

  return (
    <HeaderWrapper maxWidth={false}>
      <ContentWrapper maxWidth="lg">
        <LogoWrapper href="/show">
          <LogoImage src={Cassette} alt="cassette" />
          videocasette
        </LogoWrapper>

        <SearchBar<Option> styles={customStyles} placeholder="search" onChange={handleChange} loadOptions={loadOptions} isClearable />
      </ContentWrapper>
    </HeaderWrapper>
  );
};
