// app/layout.jsx
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function SecuredLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <main id="app" className="d-flex flex-column h-100" data-testid="layout">
        {/* <NavBar />
        <Container className="flex-grow-1 mt-5"> */}
          {children}
        {/* </Container>
        <Footer /> */}
      </main>
    </UserProvider>
  );
}
