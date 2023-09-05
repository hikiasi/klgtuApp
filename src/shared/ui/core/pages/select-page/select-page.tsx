import styled, { useTheme } from "styled-components";
import { IconChevron, Typography } from "../../atoms";
import { SelectPageTemplate } from "../../templates";
import { Button, TextInput } from "../../molecules";
import { SearchList, TSearchItem } from "../../organisms";
import { ComponentProps } from "react";

export type TSelectPage = TSearchComponent & {
  searchListProps: TSearchListComponent & {
    show: boolean
  },
}

export const SelectPage = ({ buttonProps, inputProps, searchListProps }: TSelectPage) => {
  return (
    <SelectPageTemplate
      showVariants={true}
      titleComponent={
        <Typography variant="title1" type="bold">
          Выбор расписания
        </Typography>
      }
      subtitleComponent={
        <Typography variant="callout" type="light">
          Можно выбрать расписание учебной группы, преподавателя или аудитории
        </Typography>
      }
      searchComponent={
        <SearchComponent
          inputProps={inputProps}
          buttonProps={buttonProps}
        />
      }
      variantsListComponent={
        searchListProps.show ?
          <SearchListComponent
            {...searchListProps}
          />
          :
          null
      }
    />
  );
};

type TSearchComponent = {
  buttonProps: TButtonProps,
  inputProps: TInputProps,
}
type TButtonProps = Required<Pick<ComponentProps<typeof Button>, 'onClick' | 'isDisable'>>
type TInputProps = Required<Pick<ComponentProps<typeof TextInput>, 'placeholder' | 'value' | 'onChange' | 'disabled'>>

const SearchComponent = ({ buttonProps, inputProps }: TSearchComponent) => {
  return (
    <Wrapper>
      <TextInput
        icon="search"
        width={480}
        {...inputProps}
      />
      <Button
        text="Показать"
        {...buttonProps}
      />
    </Wrapper>
  )
}

type TSearchListComponent = Omit<ComponentProps<typeof SearchList>, 'width' | 'height' | 'title'> & {
  subItems: TSearchItem[],
  isBackward: boolean,
  onBackward: () => void,
}

const SearchListComponent = ({ items, subItems, isLoading, isBackward, onBackward }: TSearchListComponent) => {
  const { palette } = useTheme()
  return (
    <SearchListWrapper>
      <MainListWrapper
        showSubItems={isBackward}
      >
        <SearchList
          title={
            <Typography
              type="light"
              variant="caption1"
              color={palette.content.cnt_050}
            >
              РЕЗУЛЬТАТЫ ПОИСКА
            </Typography>
          }
          items={items}
          isLoading={isLoading}
        />
      </MainListWrapper>
      <SubListWrapper
        showSubItems={isBackward}
      >
        <SearchList
          title={
            <OnBackwardWrapper
              onClick={onBackward}
            >
              <IconChevron
                direction="left"
                color={palette.accent.primary_500}
                size={12}
              />
              <Typography
                type="light"
                variant="caption1"
                color={palette.accent.primary_500}
              >
                ВЕРНУТЬСЯ НАЗАД
              </Typography>
            </OnBackwardWrapper>
          }
          items={subItems}
          isLoading={isLoading}
        />
      </SubListWrapper>
    </SearchListWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`

type TListWrapper = {
  showSubItems: boolean
}

const MainListWrapper = styled.div<TListWrapper>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: ${({ showSubItems }) => showSubItems ? 0 : 1};
  transition: opacity .2s ease-out;
`

const SubListWrapper = styled.div<TListWrapper>`
  position: absolute;
  left: ${({ showSubItems }) => showSubItems ? 0 : '100%'};
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: left .3s ease-out;
`

const SearchListWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  gap: 10px;
  width: 480px;
  height: 255px;
  border-radius: 16px;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,.1);
  & div {
    box-shadow: none;
  }
`

const OnBackwardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`
