import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Card from ".";
import { Typography } from "../../atoms";
import { Button } from "../../molecules";

type DownloadBadgeProps = {
  platform: string;
  imageSrc: string;
  link: string;
};

const DownloadBadge = ({ platform, imageSrc, link }: DownloadBadgeProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={`${platform} Badge`} />
    </a>
  );
};

type TCardComponent = {
  title: string;
  buttonType?: "singleButton" | "downloadBlock";
  downloadBadgeProps?: DownloadBadgeProps[];
  blockType?: "mobile" | "web";
};

const CardComponent = ({
  title,
  buttonType = "downloadBlock",
  blockType = "web",
  downloadBadgeProps,
}: TCardComponent) => {
  const theme = "light";

  const qrCodeLight = "./images/qrcode-dark-mode-false.png";
  const qrCodeDark = "./images/qrcode-dark-mode-true.png";

  const MobileBlock = ({ qrCode }: { qrCode: string }) => (
    <MobileWrapper>
      <MobileMockUp>
        <img src={qrCode} alt="QR" />
      </MobileMockUp>
    </MobileWrapper>
  );

  const WebBlock = () => (
    <WebWrapper>
      <img src="./images/main-section-state-enabled.png" alt="" />
    </WebWrapper>
  );
  return (
    <Wrapper>
      <Card>
        <ContentWrapper>
          <Card.Info>
            <TextWrapper>
              <Typography variant="title1" type="bold">
                {title}
              </Typography>
            </TextWrapper>
            {buttonType === "singleButton" ? (
              <ButtonsWrapper>
                <Button
                  text="Перейти к расписанию"
                  variant="filled"
                  size="large"
                />
              </ButtonsWrapper>
            ) : (
              <DownloadBlock>
                {downloadBadgeProps &&
                  downloadBadgeProps.map((badgeProps, index) => (
                    <DownloadBadge key={index} {...badgeProps} />
                  ))}
              </DownloadBlock>
            )}
          </Card.Info>
          <Card.Main>
            {blockType === "mobile" ? (
              <MobileBlock
                qrCode={theme === "light" ? qrCodeLight : qrCodeDark}
              />
            ) : (
              <WebBlock />
            )}
          </Card.Main>
        </ContentWrapper>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 1140px;
  align-items: flex-start;
  gap: 24px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DownloadBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 64px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 56px;
  border-radius: 20px;
  border: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
  background: ${({ theme: { palette } }) => palette.background.bg_000};
`;
const TextWrapper = styled.div`
  width: 320px;
  text-align: center;
`;

const MobileWrapper = styled.div`
width: 558px;
height: 392px;
position: relative;
}
`;
const MobileMockUp = styled.div`
  width: 100%;
  height: 100%;
  background: url("./images/samsung_mockup.png") 100% no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: auto;
    margin-top: 80px;
    opacity: 1;
    mix-blend-mode: normal;
  }
`;

const WebWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    opacity: 0.33;
    background: 50% / cover no-repeat;
    mix-blend-mode: luminosity;
    display: block;
    border-radius: 0 0 20px 20px;
    transition: 0.3s ease all;
  }
  &:hover img,
  &:focus img {
    opacity: 0.8;
    mix-blend-mode: normal;
    background: url("./images/main-section-state-hovered-focused.png") 50% /
      cover no-repeat;
  }
`;

const meta: Meta<typeof CardComponent> = {
  title: "",
  component: CardComponent,
  argTypes: {
    buttonType: {
      options: ['singleButton', 'downloadBlock'],
      control: { type: 'radio' },
    },
    blockType: {
      options: ['web', 'mobile'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type TCardStory = StoryObj<typeof CardComponent>;

export const Default: TCardStory = {
  render: (args) => <CardComponent {...args} />,
  args: {
    title: "Веб-версия расписания КГТУ",
    downloadBadgeProps: [
      {
        platform: "Google Play",
        imageSrc: "./images/badge-google.svg",
        link: "https://example.com/google-play-link",
      },
      {
        platform: "App Store",
        imageSrc: "./images/badge-apple.svg",
        link: "https://example.com/app-store-link",
      },
    ],
    blockType: "web",
  },
};
