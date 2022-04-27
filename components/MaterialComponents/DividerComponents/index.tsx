import { Divider } from "@mui/material";

interface DividerComponentsI {
  className?: string;
}

const DividerComponents = (props: DividerComponentsI) => {
  const { className = "" } = props;

  return <Divider className={`divider-common ${className}`} />;
};

export default DividerComponents;
