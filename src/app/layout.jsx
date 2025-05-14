import '@/styles/_globals.scss'
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Nav />
        <div className="pt-16">
          {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}