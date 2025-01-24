function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <CategoryMenu />
      <main className="layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
} 