import styles from "./PortfolioButton.module.scss";

type Props = {
  buttonText: string;
  url?: string;
};
export const PortfolioButton = ({ buttonText, url }: Props) => {
  return <div className={styles.PortfolioButtonContainer}>{buttonText}</div>;
};
