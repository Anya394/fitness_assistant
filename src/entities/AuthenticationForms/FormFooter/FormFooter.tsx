import { FormFooterProps } from '@/app/types';
import * as S from './FormFooter.styles';

const FormFooter: React.FC<FormFooterProps> = ({ question, answer, link }) => {
  return (
    <S.FormFooter>
      {question} <a href={link}>{answer}</a>
    </S.FormFooter>
  );
};

export default FormFooter;
