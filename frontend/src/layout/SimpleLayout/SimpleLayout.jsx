import { HeaderSimples } from "./HeaderSimples/HeaderSimples";
import { FooterSimples } from "./FooterSimples/FooterSimples";

export const SimpleLayout = ({ children }) => {
    return (
        <>
            <HeaderSimples />
            {children}
            <FooterSimples />
        </>
    );
}