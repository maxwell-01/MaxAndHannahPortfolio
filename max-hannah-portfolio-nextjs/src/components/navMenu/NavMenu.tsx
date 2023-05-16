export const NavMenu = () => {
    const navBarClass = 'flex justify-end pt-2 pr-3 gap-5';
    const navItemClass =
        'py-4 px-2 text-h3 font-heading font-bold uppercase cursor-pointer hover:text-gray-400';

    return (
        <>
            <div className={navBarClass}>
                <div className={navItemClass}>work with us</div>
                <div className={navItemClass}>Hannah</div>
                <div className={navItemClass}>Max</div>
            </div>
        </>
    );
};
