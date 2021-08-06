import React, { useMemo } from 'react';

interface Props {
  color?: string;
  width?: number;
}
export function Logo({ color = '#fff', width = 123 }: Props) {
  const height = useMemo(() => {
    return (width * 481) / 540;
  }, [width]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 540 481"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Recurso 2 1">
        <g id="Frame 16">
          <path
            id="Vector"
            d="M101.149 68.3052L34.9707 279.681L262.099 446.847L408.119 351.738L505.03 189.445L400.476 34.1525L275.723 116.885L101.149 68.3052Z"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            id="Vector_2"
            d="M101.149 68.3046L207.406 246.185L34.9707 279.68"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            id="Vector_3"
            d="M400.475 34.1525L350.257 167.089L207.406 246.185L262.099 446.847"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            id="Vector_4"
            d="M408.118 351.738L207.406 246.186"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            id="Vector_5"
            d="M504.991 189.444L350.259 167.088"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <g id="Frame 17">
          <path
            id="Vector_6"
            d="M34.9703 313.834C54.2839 313.834 69.9406 298.543 69.9406 279.681C69.9406 260.819 54.2839 245.528 34.9703 245.528C15.6567 245.528 0 260.819 0 279.681C0 298.543 15.6567 313.834 34.9703 313.834Z"
            fill={color}
          ></path>
          <path
            id="Vector_7"
            d="M101.15 102.498C120.463 102.498 136.12 87.2075 136.12 68.3454C136.12 49.4834 120.463 34.1927 101.15 34.1927C81.8362 34.1927 66.1794 49.4834 66.1794 68.3454C66.1794 87.2075 81.8362 102.498 101.15 102.498Z"
            fill={color}
          ></path>
          <path
            id="Vector_8"
            d="M207.405 280.34C226.719 280.34 242.375 265.049 242.375 246.187C242.375 227.325 226.719 212.034 207.405 212.034C188.091 212.034 172.435 227.325 172.435 246.187C172.435 265.049 188.091 280.34 207.405 280.34Z"
            fill={color}
          ></path>
          <path
            id="Vector_9"
            d="M262.099 480.999C281.413 480.999 297.07 465.708 297.07 446.846C297.07 427.984 281.413 412.693 262.099 412.693C242.786 412.693 227.129 427.984 227.129 446.846C227.129 465.708 242.786 480.999 262.099 480.999Z"
            fill={color}
          ></path>
          <path
            id="Vector_10"
            d="M408.117 385.891C427.431 385.891 443.088 370.6 443.088 351.738C443.088 332.876 427.431 317.586 408.117 317.586C388.804 317.586 373.147 332.876 373.147 351.738C373.147 370.6 388.804 385.891 408.117 385.891Z"
            fill={color}
          ></path>
          <path
            id="Vector_11"
            d="M350.258 201.241C369.572 201.241 385.228 185.95 385.228 167.088C385.228 148.226 369.572 132.936 350.258 132.936C330.944 132.936 315.288 148.226 315.288 167.088C315.288 185.95 330.944 201.241 350.258 201.241Z"
            fill={color}
          ></path>
          <path
            id="Vector_12"
            d="M400.474 68.3054C419.788 68.3054 435.445 53.0147 435.445 34.1527C435.445 15.2907 419.788 0 400.474 0C381.161 0 365.504 15.2907 365.504 34.1527C365.504 53.0147 381.161 68.3054 400.474 68.3054Z"
            fill={color}
          ></path>
          <path
            id="Vector_13"
            d="M504.988 223.598C524.302 223.598 539.958 208.307 539.958 189.445C539.958 170.583 524.302 155.292 504.988 155.292C485.675 155.292 470.018 170.583 470.018 189.445C470.018 208.307 485.675 223.598 504.988 223.598Z"
            fill={color}
          ></path>
        </g>
      </g>
    </svg>
  );
}
