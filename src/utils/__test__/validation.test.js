import { validateRequiredField, validateNameField, validateEmailField } from '../validation';

describe('field validation', () => {
  it('required field', () => {
    const error = validateRequiredField('');
    expect(error).toBeTruthy();
  });

  it('name field required', () => {
    const error = validateNameField('');
    expect(error.includes('Name')).toBeTruthy();
  });

  it('any text for name field', () => {
    const error = validateNameField('a');
    expect(error).toBe('');
  });

  it('email field required', () => {
    const error = validateEmailField('');
    expect(error.includes('Email')).toBeTruthy();
  });

  it('wrong email format', () => {
    const error = validateEmailField('a');
    expect(error.includes('invalid')).toBeTruthy();
  });

  it('correct email format', () => {
    const error = validateEmailField('a@a.com');
    expect(error).toBe('');
  });
});
