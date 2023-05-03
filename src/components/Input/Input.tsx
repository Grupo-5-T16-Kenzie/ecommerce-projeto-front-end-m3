import { forwardRef, ForwardedRef } from "react";
import { FieldError } from "react-hook-form";

interface IIputProps {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef(
  ({ label, error, ...rest }: IIputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div>
      {label ? <label>{label}</label> : null}
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  )
);
