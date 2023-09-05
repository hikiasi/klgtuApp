import styled from "styled-components";
import { ListItem } from "../../molecules/list-item";
import { InfinityCircleProgress, Typography } from "../../atoms";
import { ReactNode } from "react";

export type TSearchList = {
  title: ReactNode,
  items: TSearchItem[],
  isLoading: boolean,
  width?: number,
  height?: number,
}

export type TSearchItem = {
  id: number,
  value: string,
  isIcon: boolean,
  onClick: () => void,
  isPicked: boolean,
}

export const SearchList = ({
  items,
  width = 480,
  height = 256,
  isLoading,
  title,
}: TSearchList) => {
  if (isLoading)
    return (
      <Wrapper width={width} height={height}>
        <ContentWrapper>
          <AlarmWrapper>
            <InfinityCircleProgress />
          </AlarmWrapper>
        </ContentWrapper>
      </Wrapper>
    )


  if (items.length === 0)
    return (
      <Wrapper width={width} height={height}>
        <ContentWrapper>
          <AlarmWrapper>
            <Typography
              type="bold"
              variant="title2"
            >
              Ничего не найдено
            </Typography>
            <Typography
              type="light"
              variant="subheadline"
            >
              Проверьте, нет ли ошибок в написанном запросе.
            </Typography>
          </AlarmWrapper>
        </ContentWrapper>
      </Wrapper>
    )

  return (
    <Wrapper width={width} height={height}>
      <TitleWrapper>
        {title}
      </TitleWrapper>
      <ContentWrapper>
        {items.map((item) => (
          <ListItem
            type="default"
            onClick={item.onClick}
            text={item.value}
            icon='chevronRight'
            showIcon={item.isIcon}
            isPicked={item.isPicked}
            key={item.id}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

type TWrapper = Required<Pick<TSearchList, 'height' | 'width'>>

const Wrapper = styled.div<TWrapper>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,.1);
  border-radius: 16px;
  padding: 0px 0px 16px 0px;
`
const TitleWrapper = styled.div`
  width: 100%;
  padding: 16px 16px 8px 16px;
  & ${Typography} {
    text-transform: uppercase;
  }
`
const ContentWrapper = styled.div`
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme: { palette } }) => `${palette.content.cnt_150} ${palette.background.bg_000}`};
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${({ theme: { palette } }) => palette.content.cnt_150};
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 2px;
  }
`
const AlarmWrapper = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
