import NavBar from "./navbar";
import "./globals.css";
import Footer from "./footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <head>
            </head>
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
