import styled from "styled-components";
import { ComponentProps } from "react";
import { IconInfoCircle, RadioButton, Typography } from "../../atoms";

export type TRadioItem = {
  buttonProps: ComponentProps<typeof RadioButton>
  title: string,
  message: string,
  alarmText?: string,
  isAlarm?: boolean,
}

export const RadioItem = ({ title, message, isAlarm, alarmText: alarm, buttonProps }: TRadioItem) => {
  return (
    <RadioItemWrapper>
      <RadioButtonWrapper>
        <RadioButton {...buttonProps} />
      </RadioButtonWrapper>
      <ContentWrapper>
        <Title>
          <Typography variant="subheadline" type="medium">
            {title}
          </Typography>
        </Title>
        <Message>
          <Typography variant="footnote" type="light">
            {message}
          </Typography>
        </Message>
        {isAlarm &&
          <Alarm>
            <IconInfoCircle
              size={16}
            />
            <Typography variant="caption1" type="medium" color="#ff3b30">
              {alarm}
            </Typography>
          </Alarm>
        }
      </ContentWrapper>
    </RadioItemWrapper>
  );
};


const RadioItemWrapper = styled.div`
  display: flex;
  gap: 8px;
`
const RadioButtonWrapper = styled.div`

`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.p`
  
`
const Message = styled.p`

`
const Alarm = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`
