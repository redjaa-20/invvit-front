import React from "react";

// ------------------------------------------------------------------

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = "100%",
  height = "100%",
  className,
}) => {
  const InvvitLogo = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 835 619"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <path
        d="M524.549 74.6045C576.806 -2.86866 681.973 -23.3111 759.447 28.9453C836.92 81.2018 857.362 186.369 805.106 263.842L620.202 537.973C607.92 558.116 591.211 576.002 570.373 590.058C541.287 609.676 508.298 619.046 475.671 619.001C443.045 619.046 410.056 609.676 380.971 590.058C360.132 576.002 343.421 558.116 331.139 537.973L208.124 355.592C277.985 403.016 318.977 383.259 332.501 362.418L476.327 147.526L476.352 146.059L524.549 74.6045Z"
        fill="url(#paint0_linear_121_3)"
      />
      <path
        d="M74.604 29.0723C152.077 -23.4138 257.244 -2.88175 309.5 74.9316L358.379 147.715L359.058 146.703L359.033 148.174L215.208 364.011C201.683 384.943 160.691 404.787 90.8306 357.155L28.9448 265.002C-23.3115 187.188 -2.86927 81.5585 74.604 29.0723Z"
        fill="url(#paint1_linear_121_3)"
      />
      <path
        d="M406.105 74.6042C458.362 -2.8689 563.529 -23.3114 641.002 28.9451C718.475 81.2015 738.918 186.368 686.662 263.842L501.757 537.972C489.476 558.116 472.767 576.002 451.928 590.057C422.843 609.676 389.854 619.046 357.227 619.001C324.6 619.046 291.611 609.676 262.526 590.057C241.687 576.001 224.976 558.116 212.695 537.972L89.6792 355.593C159.54 403.016 200.533 383.258 214.057 362.418L357.882 147.526L357.908 146.058L406.105 74.6042Z"
        fill="url(#paint2_linear_121_3)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_121_3"
          x1="801.19"
          y1="430.63"
          x2="171"
          y2="352.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_121_3"
          x1="21.9964"
          y1="-21.151"
          x2="240.271"
          y2="550.766"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_121_3"
          x1="741.968"
          y1="-258.04"
          x2="276.651"
          y2="577.838"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );

  return InvvitLogo;
};

export default Logo;
