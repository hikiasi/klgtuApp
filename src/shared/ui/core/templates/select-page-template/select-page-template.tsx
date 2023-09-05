import { ReactNode } from "react";
import styled from "styled-components";

type TSelectPageTemplate = {
  titleComponent: ReactNode,
  subtitleComponent: ReactNode,
  searchComponent: ReactNode,
  variantsListComponent: ReactNode,
  showVariants: boolean
}

export const SelectPageTemplate = ({
  searchComponent,
  subtitleComponent,
  titleComponent,
  variantsListComponent,
  showVariants,
}: TSelectPageTemplate) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <TitleBox>
            {titleComponent}
          </TitleBox>
          <SubtitleBox>
            {subtitleComponent}
          </SubtitleBox>
        </TextWrapper>
        <SearchBox>
          {searchComponent}
          {showVariants && (
            <VariantsListBox>
              {variantsListComponent}
            </VariantsListBox>
          )}
        </SearchBox>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
`

const ContentWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 48px 0px 64px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border: 1px solid ${({ theme: { palette } }) => palette.background.bg_150};
  border-radius: 20px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`

const TitleBox = styled.div`
  
`

const SubtitleBox = styled.div`
  max-width: 440px;
`

const SearchBox = styled.div`
  position: relative;
`

const VariantsListBox = styled.div`
  position: absolute;
  margin-top: 16px;
`
