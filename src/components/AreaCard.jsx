import React from 'react';

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={'10px'}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="60%"
      y="57%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={'1.5em'}
      className="font-bold"
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const AreaCard = ({ percentage, text }) => {
  const pct = cleanPercentage(percentage);
  return (
    <div className="w-[170px] h-[200px] bg-[#e9ecf3] relative mr-3 mt-4 rounded-md">
      <i class="fa-solid fa-ellipsis-vertical absolute top-2 right-4" />
      <svg width={150} height={150}>
        <g transform={`rotate(-90 ${'85 100'})`}>
          <Circle colour="white" />
          <Circle colour="#7b61ff" pct={pct} />
        </g>
        <Text percentage={pct} />
      </svg>
      <h3 className="text-center font-semibold text-sm mt-3">{text}</h3>
    </div>
  );
};

export default AreaCard;
