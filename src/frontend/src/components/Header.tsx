type HeaderProps = {
    heading: string;
};

function Header({ heading }: HeaderProps) {
    return (
        <header>
            <h1>{heading}</h1>
        </header>
    );
}

export default Header