import { ReactNode, forwardRef } from "react";
import styled from "styled-components";
import { Typography } from "../../atoms";
import { IconStarAlt } from "../../atoms";

const AccordionFootNote = forwardRef<HTMLDivElement>(
  ({ ...props }, ref) => {
    return (
      <Wrapper ref={ref} {...props}>
        <FootNote>
          <NoteFirst>
            <IconStarAlt size={20} />
            <Typography variant="footnote" type="light">
              Показаны данные за сентябрь 2023
            </Typography>
          </NoteFirst>
          <NoteSecond>
            <IconStarAlt size={20} />
            <IconStarAlt size={20} />
            <Typography variant="footnote" type="light">
              DAU / MAU – уникальные пользователи за сутки / месяц
            </Typography>
          </NoteSecond>
        </FootNote>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FootNote = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;
const NoteFirst = styled.div`
  display: flex;
  align-items: center;
`;
const NoteSecond = styled.div`
  display: flex;
  align-items: center;
`;

export default AccordionFootNote;
