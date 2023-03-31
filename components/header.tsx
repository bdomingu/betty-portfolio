import Link from 'next/link';

export default function Header() {
    return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='https://www.linkedin.com/in/b-dominguez/'>LinkedIn</Link>
                </li>
                <li>
                    <Link href='https://github.com/bdomingu'>Github</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
  }