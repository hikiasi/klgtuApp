import { Typography } from "../../atoms";

export type TModalTitle = {
  children?: string
}

const ModalTitle = ({ children }: TModalTitle) => {
  return (
    <Typography variant="callout">
      {children}
    </Typography>
  );
};

export default ModalTitle
