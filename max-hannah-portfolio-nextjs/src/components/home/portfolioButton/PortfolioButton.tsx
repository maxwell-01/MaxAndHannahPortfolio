type Props = {
    buttonText: string;
    url?: string;
};
export const PortfolioButton = ({ buttonText, url }: Props) => {
    return (
        <div
            className={
                'self-start p-6 bg-portfolioBlack uppercase text-h3 font-heading text-portfolioWhite cursor-pointer leading-10'
            }
        >
            {buttonText}
        </div>
    );
};
