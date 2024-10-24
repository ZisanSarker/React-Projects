export const QuoteBg = () => {
  return (
    <svg
      fill="none"
      height="251"
      viewBox="0 0 745 251"
      width="745"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient id="a">
        <stop offset="0" stop-color="#3056d3" stop-opacity=".15" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="-101.591"
        x2="49.1618"
        xlink:href="#a"
        y1="-50.4346"
        y2="-49.6518"
      />
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="643.409"
        x2="794.162"
        xlink:href="#a"
        y1="196.565"
        y2="197.348"
      />
      <mask
        id="d"
        height="251"
        maskUnits="userSpaceOnUse"
        width="745"
        x="0"
        y="0"
      >
        <rect fill="#3056d3" height="251" rx="5" width="745" />
      </mask>
      <rect fill="#3056d3" fill-opacity=".05" height="251" rx="5" width="745" />
      <g mask="url(#d)">
        <ellipse
          cx=".483916"
          cy="3.5"
          fill="url(#b)"
          rx="102.075"
          ry="105.5"
          transform="matrix(-1 0 0 -1 .967832 7)"
        />
        <ellipse
          cx="745.484"
          cy="250.5"
          fill="url(#c)"
          rx="102.075"
          ry="105.5"
        />
      </g>
    </svg>
  );
};