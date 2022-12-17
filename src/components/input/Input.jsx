import { CheckboxWrapper, WrapperInput } from ".";

export const Input = ({
  label = "",
  icon = "fa-user",
  error = "",
  messageError = "The information in this field is required",
  value = "",
  readOnly = false,
  ...props
}) => {
  return (
    <WrapperInput>
      <div className="flex items-start gap-1 px-1 flex-col">
        <label className="">{label}</label>
        <input
          className={`input border border-gray-400 w-full outline-none p-2 ${
            error ? "text-error" : ""
          }`}
          required
          readOnly={readOnly}
          value={value}
          {...props}
        />
      </div>
      {error && (
        <small className="inline-block w-full text-left text-red-700 p-2 text-tiny text-error">
          {messageError}
        </small>
      )}
    </WrapperInput>
  );
};

export const InputCheck = ({
  label = "",
  onChange = () => {},
  checked = false,
}) => {
  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        className="hidden input"
        id={label}
        checked={checked}
        onChange={onChange}
        name={label}
      />
      <label htmlFor={label} className="label">
        {label}
      </label>
    </CheckboxWrapper>
  );
};
