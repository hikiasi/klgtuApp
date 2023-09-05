import styled from "styled-components";
import { IconButton } from "../../molecules";
import { Typography } from "../../atoms";

export type TWeekPicker = {
  onNext: () => void,
  onPrev: () => void,
  title: string,
  fieldValue: string,
  isLoading?: boolean,
}

export const WeekPicker = ({
  onNext,
  onPrev,
  title,
  fieldValue,
  isLoading,
}: TWeekPicker) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography>
          {title}
        </Typography>
      </TitleWrapper>
      <ActionWrapper>
        <IconButton
          onClick={onPrev}
          icon='chevronLeft'
          variant="tonal"
          form="square"
        />
        <Field>
          {fieldValue}
        </Field>
        <IconButton
          onClick={onNext}
          icon='chevronRight'
          variant="tonal"
          form="square"
        />
      </ActionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 364px;
  height: 125px;
  padding: 16px 24px 24px 24px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-item: flex-start;
  border-radius: 20px;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,.1);
`

const TitleWrapper = styled.div`
  
`

const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 4px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme: { palette } }) => palette.content.cnt_150};
`

const Field = styled(Typography)`
  width: 100%;
  height: auto;
  text-align: center;
`
