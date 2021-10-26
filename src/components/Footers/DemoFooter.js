/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://github.com/elyskrie21"
                  target="_blank"
                >
                  My github
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCmTVHadIAKAjhnzO7tBu8CA/featured"
                  target="_blank"
                >
                  Follow my Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1GnlXU-ZI-__QUTv4eqK9jQV9yn7UadreSjbseNuXxEs/edit?usp=sharing"
                  target="_blank"
                >
                  Works Cited
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, by Elyse Kriegel
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
