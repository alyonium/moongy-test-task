import Magnifier from 'icons/magnifier.png';
import { MessageBox } from 'components/MessageBox';
import { TextWrapper } from './styles';

export const SearchMessage = () => (
  <MessageBox>
    <TextWrapper variant="h6">
      search for a show <img src={Magnifier} alt="magnifier" />
    </TextWrapper>
  </MessageBox>
);
