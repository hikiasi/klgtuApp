import styled from "styled-components";
import { ChangeEvent, MouseEvent, ReactNode, forwardRef, useRef, useState } from "react";
import { IconsList, TIconsList } from "../../atoms";

export type TTextInput = {
  value?: string,
  placeholder?: string,
  icon?: TIconsList,
  onChange: (e: string) => void,
  disabled?: boolean,
  button?: ReactNode,
  width?: number
}

export const TextInput = forwardRef<HTMLDivElement, TTextInput>(({
  value = '',
  placeholder,
  onChange,
  disabled = false,
  icon,
  button,
  width,
  ...props
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const [focus, setFocus] = useState(false)
  const event = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    if (disabled)
      return
    onChange(e.target.value)
  }
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const wrapperClick = (e: MouseEvent<HTMLDivElement>) => {
    //possibly there can be some problems
    if (disabled || buttonRef.current?.contains(e.target as Node)) {
      return
    }
    inputRef.current?.focus()
  }
  return (
    <Wrapper
      onClick={wrapperClick}
      isActive={focus}
      isDisable={disabled}
      isText={!!inputRef.current?.value}
      width={width}
      ref={ref}
      {...props}
    >
      {icon && IconsList[icon]}
      <CustomInput
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={event}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
      {button && (
        <ButtonWrapper ref={buttonRef}>
          {button}
        </ButtonWrapper>
      )}
    </Wrapper >
  );
});

type TWrapper = {
  isActive: boolean,
  isDisable: boolean,
  isText: boolean,
  width?: number,
}

const Wrapper = styled.div<TWrapper>`
  width: ${({ width }) => width}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 11px 16px;
  border: 1.5px solid ${({ theme: { palette }, isActive, isDisable }) => {
    let color = isActive ?
      palette.accent.primary_500
      :
      palette.content.cnt_100
    if (isDisable) {
      color = palette.background.bg_250
    }
    return color
  }};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 2px ${({ theme: { palette }, isActive }) => isActive ? palette.accent.primary_500_op12 : 'none'};
  & > svg {
    height: 20px;
    width: 20px;
    min-height: 20px;
    min-width: 20px;
  };
  & > svg path {
    fill: ${({ theme: { palette }, isActive, isDisable, isText }): string => {
    let bg = palette.content.cnt_100
    if (isActive || isText) {
      bg = palette.content.cnt_000
    }
    if (isDisable) {
      bg = palette.background.bg_250
    }
    return bg
  }};
  }
`

const CustomInput = styled.input`
  width: 100%;
  height: auto;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  caret-color: ${({ theme: { palette } }) => palette.accent.primary_500};
  ${({ theme: { typography } }) => typography.footnote};
  font-size: ${({ theme: { typography } }) => typography.footnote.size};
  &::placeholder {
    color: ${({ theme: { palette } }) => palette.content.cnt_100};
  }
`

const ButtonWrapper = styled.div`
  width: auto;
`
