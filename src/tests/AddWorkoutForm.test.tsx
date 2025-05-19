import AddWorkoutForm from '@/features/Forms/AddDataForms/AddWorkoutForm';
import { TextField } from '@mui/material';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation');

jest.mock('@mui/x-date-pickers/DatePicker', () => ({
  DatePicker: jest.fn(({ value, onChange, label, renderInput, ...props }) => {
    return (
      <TextField
        {...props}
        label={label}
        value={value ? value.toISOString() : ''}
        onChange={(e) => {
          if (onChange) {
            onChange(new Date(e.target.value));
          }
        }}
        data-testid="date-picker-input"
      />
    );
  }),
}));

describe('AddWorkoutForm', () => {
  const mockSubmit = jest.fn();
  const handleSetData = jest.fn();

  beforeEach(() => {
    render(
      <AddWorkoutForm handleSetData={handleSetData} onSubmit={mockSubmit} />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders the form with all fields', async () => {
    expect(screen.getByTestId('date-picker-input')).toBeInTheDocument();
    const nameInput = screen.getByRole('textbox', { name: /Название/i });
    expect(nameInput).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Добавить/i }),
    ).toBeInTheDocument();
  });

  it('Submits form with valid data', async () => {
    const dateInput = screen.getByTestId('date-picker-input');
    await userEvent.type(dateInput, '01/01/2023');

    const nameInput = screen.getByLabelText(/Название/i);
    await userEvent.type(nameInput, 'Силовая тренировка');

    userEvent.click(screen.getByRole('button', { name: /Добавить/i }));

    await waitFor(() => {
      expect(mockSubmit.mock.calls[0][0]).toEqual({
        date: expect.any(Date),
        title: 'Силовая тренировка',
      });
    });
  });
});
