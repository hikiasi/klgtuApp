import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import MobileAppCard from ".";
import GroupImage from "/images/Group.svg";

type TMobileAppCardComponent = {
  color: string;
};

type PatternImages = {
  [key: string]: string;
};

type ContentWrapperProps = {
  backgroundImage: string;
};

const MobileAppCardComponent = ({ color }: TMobileAppCardComponent) => {
  const patternImages: PatternImages = {
    red: "./images/pattern-red.svg",
    purple: "./images/pattern-purple.svg",
    blue: "./images/pattern-blue.svg",
  };

  return (
    <Wrapper>
      <MobileAppCard>
        <ContentWrapper backgroundImage={patternImages[color]}>
          <MobileMockUp>
            <MobilePreview>
              <img src={GroupImage} alt="GroupImage" />
            </MobilePreview>
          </MobileMockUp>
        </ContentWrapper>
      </MobileAppCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 1140px;
  align-items: flex-start;
  gap: 24px;
`;

const MobileMockUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MobilePreview = styled.div`
  width: 100%;
  height: 100%;
  background: url(${GroupImage}) 100% no-repeat;
  background-size: cover;
`;

const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 558px;
  height: 640px;
  background: url(${(props) => props.backgroundImage}) 100% no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
`;

const meta: Meta<typeof MobileAppCardComponent> = {
  title: "",
  component: MobileAppCardComponent,
  argTypes: {
    color: {
      options: ["red", "purple", "blue"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type TCardStory = StoryObj<typeof MobileAppCardComponent>;

export const Default: TCardStory = {
  render: (args) => <MobileAppCardComponent {...args} />,
  args: {
    color: "red",
  },
};
