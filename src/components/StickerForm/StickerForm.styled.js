import styled from 'styled-components';

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: inline-flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  border: 2px solid Gray;
  border-radius: 4px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 4px;
  font: inherit;
  border: 2px solid Gray;
  border-radius: 3px;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  padding: 4px 8px;
  cursor: pointer;
  border: 2px solid Gray;
  border-radius: 3px;
`;