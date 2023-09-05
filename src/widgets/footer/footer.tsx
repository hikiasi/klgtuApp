import { IconKLGTUApp, IconSlantedArrow, Typography } from "@shared/ui/core/atoms";
import { IconButton } from "@shared/ui/core/molecules";
import Footer from "@shared/ui/core/organisms/footer";
import styled from "styled-components";
import { useTheme } from "styled-components";

type TFooterWidget = {
  onLogoClick: () => void,
  onLinkClick: () => void,
  onArrowupClick: () => void,
}

export const FooterWidget = ({ onLogoClick, onLinkClick, onArrowupClick }: TFooterWidget) => {
  const { palette } = useTheme()
  return (
    <Wrapper>
      <Footer>
        <Footer.Brand>
          <div onClick={onLogoClick}>
            <IconKLGTUApp
              width={141}
              height={32}
            />
          </div>
        </Footer.Brand>
        <Footer.Activities>
          <ActivitiesWrapper>
            <TextWrapper onClick={onLinkClick}>
              <Typography
                variant="subheadline"
                type="medium"
              >
                Телеграм-канал с новостями
              </Typography>
              <IconSlantedArrow
                color={palette.accent.primary_500}
                direction="up"
                size={20}
              />
            </TextWrapper>
            <IconButton
              icon='straightArrowUp'
              variant='filled'
              onClick={onArrowupClick}
            />
          </ActivitiesWrapper>
        </Footer.Activities>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  & > footer {
    max-width: 1140px;
  }
`

const ActivitiesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`
