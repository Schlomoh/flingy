import styled from "styled-components";

const StCircleChart = styled.span`
  svg {
    position: absolute;
    height: 76px;
    width: 76px;
  }
  path {
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 213.6;
    }
  }
`;


const CircleChart = ({ percentage }: { percentage: number }) => {
  const circ = percentage * 213.6283;

  return (
    <StCircleChart>
      <svg viewBox="0 0 76 76">
        <path
          d="M38 4
    a 34 34 0 0 1 0 68
    a 34 34 0 0 1 0 -68"
          fill="none"
          stroke="#6845E1"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${circ}, 213.6283`}
        ></path>
      </svg>
    </StCircleChart>
  );
};

export default CircleChart;
