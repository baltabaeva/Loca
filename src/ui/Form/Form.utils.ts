import { createContext } from 'react';
import { UseFormReturn } from 'react-hook-form';

export type FormContextValue = Pick<UseFormReturn, 'control' | 'formState' | 'handleSubmit' | 'register'>;

export const FormContext = createContext<FormContextValue>({} as any);
