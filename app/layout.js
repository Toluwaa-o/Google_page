import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google Clone app by Toluwalashe Ogunleye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
