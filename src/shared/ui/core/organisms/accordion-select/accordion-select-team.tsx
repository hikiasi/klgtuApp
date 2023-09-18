import { ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { Typography } from "../../atoms";
import { IconTelegram } from "../../atoms";
import { IconGlobe } from "../../atoms";

export type TAccordionTeam = {
  name?: string;
  position?: string;
  telegramIcon?: boolean;
  webIcon?: boolean;
};

const AccordionTeam = forwardRef<HTMLDivElement, TAccordionTeam>(
  ({ name, position, telegramIcon, webIcon, ...props }, ref) => {
    return (
      <Wrapper ref={ref} {...props}>
        <TeamListItem>
          <StateLayer>
            <NameWorker>
              <Typography variant="subheadline" type="medium">
                {name}
              </Typography>
              {(telegramIcon || webIcon) && (
                <IconWrapper>
                  {telegramIcon && 
                  <IconTelegram size={24} />
                  }  
                  {webIcon &&  
                  <IconGlobe size={24} />
                  }  
                </IconWrapper>
               )}  
            </NameWorker>
            <Position>
              <Typography variant="subheadline" type="light">
                {position}
              </Typography>
            </Position>
          </StateLayer>
        </TeamListItem>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.content.cnt_200};
`;

const TeamListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StateLayer = styled.div`
  display: flex;
  padding: 14px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const NameWorker = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;
const Position = styled.div`
  text-align: right;
`;

export default AccordionTeam;
