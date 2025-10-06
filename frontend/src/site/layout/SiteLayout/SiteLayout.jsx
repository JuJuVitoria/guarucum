import SiteHeader from "../SiteHeader/SiteHeader";

export default function SiteLayout({children}) {
    return (
        <>
            <SiteHeader />
            <main>
                {children}
            </main>
        </>
    );
}