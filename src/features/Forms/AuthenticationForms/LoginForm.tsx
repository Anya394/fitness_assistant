'use client';

import { useForm } from 'react-hook-form';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './Form.styles';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '@/app/atomStorage';
import FormFooter from '@/entities/AuthenticationForms/FormFooter/FormFooter';
import FormTitle from '@/entities/AuthenticationForms/FormTitle/FormTitle';
import EmailField from '@/entities/AuthenticationForms/Fields/EmailField';
import PasswordField from '@/entities/AuthenticationForms/Fields/PasswordField';
import { AuthenticationFormData } from '@/app/types';

const LoginForm = React.memo(
  ({ onSubmit }: { onSubmit?: (data: AuthenticationFormData) => void }) => {
    const [formError, setFormError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const router = useRouter();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<AuthenticationFormData>();

    const onSubmitRes = useCallback(async (data: AuthenticationFormData) => {
      setIsSubmitting(true);
      setFormError('');

      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          next: { revalidate: 3600 },
        });

        if (!res.ok) throw await res.json();

        setIsLoggedIn(true);
        router.push('/');
      } catch (err: any) {
        setFormError(
          err?.error ||
            'Login failed. Please check your credentials and try again.',
        );
      } finally {
        setIsSubmitting(false);
      }
    }, []);

    if (!onSubmit) onSubmit = onSubmitRes;

    return (
      <S.FormContainer>
        <FormTitle text="Пожалуйста, войдите" />
        <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
          <EmailField register={register} errors={errors} />

          <PasswordField register={register} errors={errors} />

          <S.SubmitButton
            type="submit"
            disabled={isSubmitting}
            data-testid="login-button"
          >
            {isSubmitting ? 'Вход...' : 'Войти'}
          </S.SubmitButton>

          {formError && <S.FormError>{formError}</S.FormError>}

          <FormFooter
            question="У вас ещё нет аккаунта?"
            answer="Зарегистрируйтесь"
            link="/register"
          />
        </S.StyledForm>
      </S.FormContainer>
    );
  },
);

export default LoginForm;
