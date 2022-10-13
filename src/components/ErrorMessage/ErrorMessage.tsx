import Fire from 'icons/fire.png';
import { TextWrapper } from './styles';

export const ErrorMessage = () => (
  <TextWrapper variant="h6">
    error <img src={Fire} alt="fire" />
  </TextWrapper>
);
