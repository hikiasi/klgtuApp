import styled from "styled-components";

export type TRadioButton = {
  id: string,
  isChecked: boolean,
  onChange: (checked: boolean) => void,
  disabled?: boolean,
}

export const RadioButton = ({ isChecked, onChange, id, disabled = false }: TRadioButton) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked
    onChange(newChecked)
  }
  return (
    <RadioButtonWrapper>
      <RadioButtonInput
        type="radio"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <RadioButtonLabel checked={isChecked} disabled={disabled} />
    </RadioButtonWrapper>
  );
};


const RadioButtonWrapper = styled.label`
  cursor: pointer;
`

const RadioButtonInput = styled.input`
  display: none;
`

type TRadioButtonLabel = {
  checked: boolean,
  disabled: boolean
}

const RadioButtonLabel = styled.div<TRadioButtonLabel>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: ${({ disabled, checked }) => buttonBorder(checked, disabled)};
  background: ${({ disabled, checked }) => (checked && disabled ? '#72787f' : 'transparent')};
  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? 'none' : '0px 0px 0px 2px #98cbff')}
  }
`

const buttonBorder = (checked: boolean, disabled: boolean): string => {
  if (checked && !disabled) {
    return '5px solid #0193de'
  }
  else if (!checked && !disabled) {
    return '2px solid #ced0d6'
  }
  return '5px solid #ced0d6'
}
