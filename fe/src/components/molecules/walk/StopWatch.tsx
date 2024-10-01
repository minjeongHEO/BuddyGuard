import styled from 'styled-components';

import { getTimeFormatString } from '@/helper/timerHelpers';
import useStopWatch from '@/hooks/useStopWatch';
import { StatusOfTime, TimeRef } from '@/types/map';

interface StopWatchProps {
  className?: string;
  children?: React.ReactNode;
  status: StatusOfTime;
  timeRef: React.MutableRefObject<TimeRef>;
}

export default function StopWatch({ className, children, status, timeRef }: StopWatchProps) {
  const time = useStopWatch(status, timeRef);

  return (
    <StyledStopWatchWrapper className={className}>
      <StyledTime>{children}</StyledTime>
      <StyledTime className="time">{getTimeFormatString(time)}</StyledTime>
    </StyledStopWatchWrapper>
  );
}

const StyledTime = styled.span`
  margin-left: 1rem;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledStopWatchWrapper = styled.div`
  display: flex;
  align-items: center;

  & * {
    color: white;
  }
  & .time {
    font-size: 1.5rem;
  }
`;
