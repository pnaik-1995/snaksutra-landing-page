import { SvgIcon } from "@mui/material";

function ChipsIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 64 64">
      <path 
        d="M20 4 L44 4 L52 16 L44 60 L20 60 L12 16 Z" 
        fill="#FFD54F" 
        stroke="#F57C00" 
        strokeWidth="2"
      />
      <path 
        d="M20 20 H44" 
        stroke="#F57C00" 
        strokeWidth="2"
      />
      <path 
        d="M20 30 H44" 
        stroke="#F57C00" 
        strokeWidth="2"
      />
      <path 
        d="M20 40 H44" 
        stroke="#F57C00" 
        strokeWidth="2"
      />
    </SvgIcon>
  );
}

export default ChipsIcon;
