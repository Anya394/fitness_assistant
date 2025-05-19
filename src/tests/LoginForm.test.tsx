import LoginForm from '@/features/Forms/AuthenticationForms/LoginForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation');

describe('LoginForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    render(<LoginForm onSubmit={mockSubmit} />);
  });

  afterEach(() => {
    mockSubmit.mockClear();
  });

  it('Renders the form with all fields', () => {
    expect(screen.getByLabelText(/Электронная почта/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByTestId(/login-button/i)).toBeInTheDocument();
  });

  it('Shows validation errors when fields are empty', async () => {
    userEvent.click(screen.getByTestId(/login-button/i));

    expect(await screen.findByText(/Email обязателен/i)).toBeInTheDocument();
    expect(await screen.findByText(/Пароль обязателен/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  /*it('Shows validation errors when email are incorrect', async () => {
    const emailField = screen.getByTestId('email-input');
    const button = screen.getByTestId('login-button');

    userEvent.type(emailField, 'testuser');

    await userEvent.click(button);

    expect(
      screen.findByText(/Пожалуйста, введите корректный адрес/i),
    ).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();

    await userEvent.clear(emailField);
    expect(emailField).toHaveValue('');
  });*/

  it('Submits the form with valid data', async () => {
    const testData = {
      email: 'testUser@example.com',
      password: 'password123',
    };

    const passwordField = screen.getByTestId('password-input');
    const emailField = screen.getByTestId('email-input');
    const button = screen.getByTestId('login-button');

    await userEvent.type(emailField, testData.email);
    await userEvent.type(passwordField, testData.password);

    await userEvent.click(button);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit.mock.calls[0][0]).toEqual(testData);
    });
  });
});
