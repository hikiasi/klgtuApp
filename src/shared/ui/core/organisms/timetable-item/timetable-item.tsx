import styled from "styled-components";
import { TTimetableIconsList } from "../../atoms/icons/types";
import { TimetableIconsList, Typography } from "../../atoms";
import { forwardRef } from "react";

export type TTimetableItem = {
  number?: number | string,
  type: TTimetableIconsList,
  title: string,
  subtitle: string,
  classroomNumber?: number | string,
  time?: string,
  status?: string,
}

export const TimetableItem = forwardRef<HTMLDivElement, TTimetableItem>(({
  type,
  title,
  time,
  status,
  subtitle,
  number,
  classroomNumber,
  ...props
}, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      <NumberWrapper>
        <Number variant="body" type="bold">
          {number}
        </Number>
        <IconWrapper>
          {TimetableIconsList[type]}
        </IconWrapper>
      </NumberWrapper>
      <MainContentWrapper>
        <TitleWrapper>
          <Typography variant="body" type='bold'>
            {title}
          </Typography>
          {classroomNumber && (
            <Typography variant="body" type='bold'>
              {classroomNumber}
            </Typography>
          )}
        </TitleWrapper>
        <SubtitleWrapper>
          <Typography variant="subheadline">
            {subtitle}
          </Typography>
          <Status>
            {time}
          </Status>
        </SubtitleWrapper>
      </MainContentWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  padding: 12px 24px;
  gap: 16px;
  align-items: center;
`

const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Number = styled(Typography)`
  width: 12px;
`

const IconWrapper = styled.div`
  display: flex;
`

const MainContentWrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  border-bottom: 1px splid ${({ theme: { palette } }) => palette.content.cnt_200};
`

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
`

const SubtitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
`

const Status = styled(Typography)`

`
