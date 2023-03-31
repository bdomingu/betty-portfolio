import Header from './header';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Header/>
            <main>{props.children}</main>
            
        </>
    )
  }