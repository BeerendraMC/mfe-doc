import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Documentation from './Documentation';
import DocSideNav from './DocSideNav';

const importAll = (r) => r.keys().map(r);

const DocContainer = () => {
  const markdownFiles = require.context('../docs', false, /\.md$/);
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <DocSideNav docs={markdownFiles} />
        </Col>
        <Col md={10}>
          <Documentation markdownFiles={importAll(markdownFiles)} />
        </Col>
      </Row>
    </Container>
  );
};

export default DocContainer;
