const Footer = () => {
  return (
    <footer
      className="py-5 text-center"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "white",
        marginTop: "auto",
      }}
    >
      <div className="container p-5 pb-0">
        <p>Ts & Cs apply apply. Offer valid while stocks last. E&OE.</p>
        <p>
          We cannot be held liable for any misrepresentation caused by
          unintentional copy errors, and/or omissions that may occur in any of
          our materials.
        </p>

        {/* Footer Bottom */}
        <div className="text-center mt-4" style={{ color: "#888" }}>
          <p>Copyright ©2025 All rights reserved | Farm Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
