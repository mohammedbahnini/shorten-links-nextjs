
import "./globals.css";



export const metadata = {
  title: "Shortly"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased overflow-x-hidden bg-white`} >
        {children}
      </body>
    </html>
  );
}
