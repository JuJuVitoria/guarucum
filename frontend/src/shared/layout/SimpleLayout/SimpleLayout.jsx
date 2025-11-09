import FooterSimples from "./FooterSimples/FooterSimples";
import HeaderSimples from "./HeaderSimples/HeaderSimples";
import { useEffect } from "react";

export default function SimpleLayout({ children }) {
    useEffect(() => {
        document.body.classList.remove("overflow-hidden");
        return () => {
            document.body.classList.add("overflow-hidden");
        };
    }, []);

    return (
        <>
            <HeaderSimples />
            {children}
            <FooterSimples />
        </>
    );
}