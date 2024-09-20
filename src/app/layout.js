import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const metadata = {
  title: "Squad Coders Dev",
  description: "Squad Coders Dev Website",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="urdu">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
