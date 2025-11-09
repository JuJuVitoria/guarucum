import SiteFooter from "../SiteFooter/SiteFooter";
import SiteHeader from "../SiteHeader/SiteHeader";

export default function SiteLayout({children}) {
    return (
        <>
            <SiteHeader />
            <main>
                {children}
            </main>
            <SiteFooter />
        </>
    );
}