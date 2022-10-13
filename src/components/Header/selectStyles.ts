import { StylesConfig } from 'react-select';
import { Option } from './types';

// I use another selectpicker, not from Material UI,
// so their styles can be changed only by this way

export const customStyles: StylesConfig<Option> = {
  control: (provided, state) => ({
    ...provided,
    borderWidth: '2px',
    border: state.isFocused ? '2px solid #b91f42 !important' : undefined,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important',
    boxShadow: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#ffb393' : undefined,
    '&:active': {
      backgroundColor: '#f56228',
    },
  }),
};
