import { ReactNode } from 'react';
import { MessageWrapper } from './styles';

type MessageBoxProps = {
  children: ReactNode;
};

export const MessageBox = ({ children }: MessageBoxProps) => (
  <MessageWrapper>
    {children}
  </MessageWrapper>
);
