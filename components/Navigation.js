import Link from 'next/link';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-warning">
            <div className="container">
                <Link href="/"><a className="navbar-brand">All bitcoin</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Start</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/AboutUs"><a className="nav-link">About Us</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

const List = styled.ul`
background-color: #333;
list-style: none;
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(2,1fr);
justify-items: center;
`;

const ListElement = styled.li`
padding: .5rem 0;
`;

const LinkA = styled.a`
font-size: 1.2rem;
color: white!important;
text-decoration: none;

:hover{
    cursor: pointer;
}
`;