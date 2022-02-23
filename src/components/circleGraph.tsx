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
        <defs>
          <linearGradient
            id="e"
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ECC174" offset="0.2" />
            <stop stopColor="#D563C2" offset="0.5" />
            <stop stopColor="#7555E4" offset="0.75" />
            <stop stopColor="#2812B1" offset="0.85" />
          </linearGradient>
        </defs>
        <path
          stroke="url(#e)"
          d="M38 4
    a 34 34 0 0 1 0 68
    a 34 34 0 0 1 0 -68"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${circ}, 213.6283`}
        ></path>
      </svg>
    </StCircleChart>
  );
};

export default CircleChart;
