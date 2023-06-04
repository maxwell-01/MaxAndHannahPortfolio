import {
  FullWidthMediaFields,
  PortfolioSection,
} from '../../types/PortfolioTypes';

type Props = {
  section: PortfolioSection<FullWidthMediaFields>;
};

const FullWidthMediaComponent = ({ section }: Props) => {
  return (
    <>
      <div>Full width media component</div>
      <h2>{section.fields.title}</h2>
    </>
  );
};

export default FullWidthMediaComponent;
