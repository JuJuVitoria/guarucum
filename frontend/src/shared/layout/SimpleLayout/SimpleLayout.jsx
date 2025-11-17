import FooterSimples from "./FooterSimples/FooterSimples";
import HeaderSimples from "./HeaderSimples/HeaderSimples";

export default function SimpleLayout({ children }) {
    return (
        <>
            <HeaderSimples />
            {children}
            <FooterSimples />
        </>
    );
}