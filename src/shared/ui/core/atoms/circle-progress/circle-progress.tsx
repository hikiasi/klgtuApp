import styled from "styled-components";

export type TCircleProgress = {
  size?: number,
  progress: number,
  indicatorWidth?: number,
  spinnerSpeed?: number,
}

export const CircleProgress = ({
  size = 48,
  progress = 50,
  spinnerSpeed = 1,
  indicatorWidth = 5,
}: TCircleProgress) => {
  const trackWidth = indicatorWidth
  const center = size / 2
  const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth)
  const dashArray = 2 * Math.PI * radius
  const dashOffset = dashArray * ((100 - progress) / 100)
  return (
    <Wrapper>
      <SvgWrapper size={size}>
        <Track
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={trackWidth}
        />
        <Indicator
          cx={center}
          cy={center}
          r={radius}
          spinnerSpeed={spinnerSpeed}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </SvgWrapper>
    </Wrapper>
  );
};


const Wrapper = styled.div`

`

type TSvgWrapper = Required<Pick<TCircleProgress, 'size'>>

const SvgWrapper = styled.svg<TSvgWrapper>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transform: rotate(-90deg);
`

type TIndicator = Required<Pick<TCircleProgress, 'spinnerSpeed'>>
const Indicator = styled.circle<TIndicator>`
  fill: transparent;
  stroke-width: 4px;
  stroke: ${({ theme: { palette } }) => palette.accent.primary_500};
  animation-duration: ${({ spinnerSpeed }) => spinnerSpeed * 1000};
`
const Track = styled.circle`
  fill: transparent;
  stroke-width: 4px;
  stroke: transparent;
`
