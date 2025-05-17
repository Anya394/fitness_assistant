'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as S from './Form.styles';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/app/atomStorage';
import FormFooter from '@/entities/AuthenticationForms/FormFooter/FormFooter';
import FormTitle from '@/entities/AuthenticationForms/FormTitle/FormTitle';
import EmailField from '@/entities/AuthenticationForms/Fields/EmailField';
import PasswordField from '@/entities/AuthenticationForms/Fields/PasswordField';
import { AuthenticationFormData } from '@/app/types';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticationFormData>();

  const onSubmit = async (data: AuthenticationFormData) => {
    setIsSubmitting(true);
    setFormError('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsLoggedIn(true);
        router.push('/');
      } else {
        const data = await res.json();
        setFormError(data.error || 'Login failed');
      }
    } catch (err: any) {
      setFormError(err?.error || 'An error occurred. Please try again.');
      setIsLoggedIn(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.FormContainer>
      <FormTitle text="Зарегистрируйтесь" />
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <EmailField register={register} errors={errors} />

        <PasswordField register={register} errors={errors} />

        <S.SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
        </S.SubmitButton>

        {formError && <S.FormError>{formError}</S.FormError>}

        <FormFooter
          question="У вас уже есть аккаунт?"
          answer="Войдите"
          link="/login"
        />
      </S.StyledForm>
    </S.FormContainer>
  );
};

export default RegisterForm;
