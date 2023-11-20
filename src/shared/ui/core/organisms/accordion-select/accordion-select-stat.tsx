import { ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { Typography } from "../../atoms";
import { IconStarAlt } from "../../atoms";

export type TAccordionStat = {
  platform?: string;
  all?: number;
  day?: number;
  month?: number;
};

const AccordionStat = forwardRef<HTMLDivElement, TAccordionStat>(
  ({ platform, all, day, month, ...props }, ref) => {
    return (
      <Wrapper ref={ref} {...props}>
        <StatSection>
          <StatHeading>
            <Typography variant="title3" type="light">
              {platform}
            </Typography>
          </StatHeading>

          <StatInfoLeft>
            <StatLeft>
              <Typography variant="largeTitle" type="bold">
                {all}
              </Typography>

              <Typography variant="body" type="light">
                Размер аудитории
              </Typography>
            </StatLeft>

            <StatInfoRight>
              <Typography variant="largeTitle" type="bold">
                {day} / {month}
              </Typography>

              <Typography variant="body" type="light">
                DAU / MAU
              </Typography>
            </StatInfoRight>
          </StatInfoLeft>
        </StatSection>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;
const StatSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StatHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StatInfoLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
`;
const StatLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const StatInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default AccordionStat;
