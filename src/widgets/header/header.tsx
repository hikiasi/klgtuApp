import { IconKLGTUApp } from "@shared/ui/core/atoms";
import { Button, IconButton } from "@shared/ui/core/molecules";
import Header from "@shared/ui/core/organisms/header";
import styled from "styled-components";

type THeaderWidget = {
  isLogo: boolean,
  onLogoClick: () => void,
  onSunClick: () => void,
  onDownloadClick: () => void,
  onBackwardClick: () => void
}

export const HeaderWidget = ({ isLogo, onSunClick, onLogoClick, onDownloadClick, onBackwardClick }: THeaderWidget) => {
  return (
    <Wrapper>
      <Header>
        <CustomBrand>
          {isLogo ?
            <IconWrapper onClick={onLogoClick}>
              <IconKLGTUApp
                width={141}
                height={32}
              />
            </IconWrapper>
            :
            <Button
              text='Выбор расписания'
              variant='text'
              icon='chevronLeft'
              size='large'
              onClick={onBackwardClick}
            />
          }
        </CustomBrand>
        <Header.Activities>
          <ButtonsWrapper>
            <IconButton
              icon='sun'
              variant='transparent'
              onClick={onSunClick}
            />
            <Button
              text='скачать приложение'
              variant='outlined'
              onClick={onDownloadClick}
            />
          </ButtonsWrapper>
        </Header.Activities>
      </Header>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  & > header {
    max-width: 1140px;
  }
`

const IconWrapper = styled.div`
  cursor: pointer;
`
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const CustomBrand = styled(Header.Brand)`
  & button {
    padding: 0px !important;
  }
`
