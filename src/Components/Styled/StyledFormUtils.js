import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFormGroup = styled("div")`
  width: 100% ;
  margin: 0px auto 20px auto;
  text-align: left;
`
export const StyledLabel = styled('label')`
  font-weight: 300 !important;
  font-size: 14px;
  line-height: 21px;
  color: #2D2D2D;
`
export const StyledAsterisk = styled('span')`
  font-size: 12px;
  color: red;
`

export const StyledLink = styled(Link)(({ theme, color = "#6065D8" }) => ({
  fontWeight: 300,
  fontSize: "12px",
  lineHeight: "21px",
  color: "#6065D8",
  textDecoration: "none",
  textAlign: "right",
}));

export const StyledButton = styled('button')(({ theme, color = "#6065D8" }) => ({
  backgroundColor: color,
  width: '100%',
  height: 50,
  borderRadius: '8px',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#FFFFFF',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
  alignItems: 'center',
  paddingRight: '10px',
}));




