import { FormTitleProps } from '@/app/types';
import * as S from './FormTitle.styles';

const FormTitle: React.FC<FormTitleProps> = ({ text }) => {
  return <S.FormTitle>{text}</S.FormTitle>;
};

export default FormTitle;
