import { ReactQueryProvider } from "./ReactQueryProvider";
import LayoutComponents from "container/layout/layout";
import "./globals.css";

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          ></link>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </head>
        <body>
          <LayoutComponents>{children}</LayoutComponents>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
