import styled from 'styled-components';
import { Typography as TypographyComponent } from './typography';


const TypographyWithPadding = styled(TypographyComponent)`
  padding: ${({ theme }) => theme.spacing(1.5)}px
    ${({ theme }) => theme.spacing(2)}px;
`;

const Meta = {
  title: 'ui/atoms/Typography',
};

export default Meta;

export const Typography = () => (
  <div>
    <TypographyWithPadding variant="largeTitle" type='light'>
      largeTitle light
    </TypographyWithPadding>
    <TypographyWithPadding variant="title1" type='light'>
      Title 1 light
    </TypographyWithPadding>
    <TypographyWithPadding variant="title2" type='light'>
      Title 2 light
    </TypographyWithPadding>
    <TypographyWithPadding variant="title3" type='light'>
      Title 3 light
    </TypographyWithPadding>
    <TypographyWithPadding variant="body" type='light'>
      Body light
    </TypographyWithPadding>
    <TypographyWithPadding variant="callout" type='light'>
      Callout light
    </TypographyWithPadding>
    <TypographyWithPadding variant="subheadline" type='light'>
      Subheadine light
    </TypographyWithPadding>
    <TypographyWithPadding variant="footnote" type='light'>
      Footnote light
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption1" type='light'>
      Caption 1 light
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption2" type='light'>
      Caption 2 light
    </TypographyWithPadding>
    <TypographyWithPadding variant="largeTitle" type='medium'>
      largeTitle medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="title1" type='medium'>
      Title 1 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="title2" type='medium'>
      Title 2 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="title3" type='medium'>
      Title 3 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="body" type='medium'>
      Body medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="callout" type='medium'>
      Callout medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="subheadline" type='medium'>
      Subheadine medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="footnote" type='medium'>
      Footnote medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption1" type='medium'>
      Caption 1 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption2" type='medium'>
      Caption 2 medium
    </TypographyWithPadding>
    <TypographyWithPadding variant="largeTitle" type='bold'>
      largeTitle bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="title1" type='bold'>
      Title 1 bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="title2" type='bold'>
      Title 2 bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="title3" type='bold'>
      Title 3 bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="body" type='bold'>
      Body bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="callout" type='bold'>
      Callout bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="subheadline" type='bold'>
      Subheadine bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="footnote" type='bold'>
      Footnote bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption1" type='bold'>
      Caption 1 bold
    </TypographyWithPadding>
    <TypographyWithPadding variant="caption2" type='bold'>
      Caption 2 bold
    </TypographyWithPadding>
  </div>
);
