import styles from "./projectCardInfo.module.scss";
import { PortfolioButton } from "@/src/components/home/portfolioButton/PortfolioButton";

type Props = {
  title: string;
  description: string;
};
export const ProjectCardInfo = ({ title, description }: Props) => {
  return (
    <div className={styles.ProjectCardInfoContainer}>
      <div className={styles.ProjectCardTitle}>{title}</div>
      <div className={styles.ProjectDescription}>{description}</div>
      <PortfolioButton buttonText={"see more"} />
    </div>
  );
};
