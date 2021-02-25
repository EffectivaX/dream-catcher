import React from "react";

export default function Footer() {
  return (
    <div className="d-flex flex-column">
      <footer className="footer">
        <div>
          <a href="https://github.com/xeroxzen">Andile Jaden Mbele</a>
          <span> &copy; {new Date().getUTCFullYear()} EffectivaX</span>
        </div>
      </footer>
    </div>
  );
}
