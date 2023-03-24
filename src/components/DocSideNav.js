import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { getHeaderIdFromInnerText } from '../utils/utility-functions';

const DocSideNav = ({ docs }) => {
  return (
    <Nav className="flex-column sticky_side_nav">
      {docs.keys().map((key) => (
        <Nav.Item key={key}>
          <Nav.Link
            href={`#${getHeaderIdFromInnerText(
              key.replace('./', '').replace('.md', '').split('-')[1]
            )}`}
          >
            {key.replace('./', '').replace('.md', '').split('-')[1]}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default DocSideNav;
