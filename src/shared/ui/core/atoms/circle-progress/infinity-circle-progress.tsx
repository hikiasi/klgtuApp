import { useEffect, useState } from "react";
import { CircleProgress } from ".";
import { TCircleProgress } from "./circle-progress";

type TInfinityCircleProgress = Pick<TCircleProgress, 'size' | 'spinnerSpeed' | 'indicatorWidth'>

export const InfinityCircleProgress = (props: TInfinityCircleProgress) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1)
      }
      else {
        setProgress(0)
      }
    }, 10);
    return () => clearInterval(interval)
  }, [progress])
  return (
    <CircleProgress
      progress={progress}
      {...props}
    />
  )
}
