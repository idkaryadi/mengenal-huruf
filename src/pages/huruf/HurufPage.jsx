import React, { useState } from 'react';
import styles from "./HurufPage.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {abjad} from './konstanta'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HurufPage() {
  const alpabet = 'abcdefghijklmnopqrstuvwxyz';
  const daftarAbjad = alpabet.split("");
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(abjad.a);
  const handlePrev = () => {
    if (index - 1 > -1) {
      console.log("newindex", index-1)
      setIndex(index - 1);
      setData(abjad[daftarAbjad[Number(index-1)]])
    }
  }
  const handleNext = () => {
    if (index + 1 < 26) {
      console.log("newindex", index+1)
      setIndex(index + 1);
      setData(abjad[daftarAbjad[Number(index+1)]])
    }
  }
  const handleClickAbjad = (e) => {
    const newIndex = daftarAbjad.indexOf(e.target.innerText)
    setIndex(newIndex);
    setData(abjad[daftarAbjad[Number(newIndex)]])
    console.log(e.target.innerText, e)
  }
  return (
    <>
    <h1 style={{"textAlign":"center"}}>Mengenal Huruf</h1>
    <Container fluid style={{"textAlign":"center"}}>
      {daftarAbjad.map(function(name){
        return <button key={name} onClick={handleClickAbjad} className={styles.daftar}>{name}</button>
      })}
    </Container>
    <Container fluid>
      <Row>
        <Col sm={2} xs={1}>
          <button className={styles.prev} onClick={handlePrev}>❮</button>
        </Col>
        <Col sm={8} xs={10}>
          <button className={styles.huruf}>{data.huruf}</button>
        </Col>
        <Col sm={2} xs={1}>
          <button className={styles.prev} onClick={handleNext}>❯</button> 
        </Col>
      </Row>
    </Container>
    <Container fluid className={styles.sekat}>
      <Row>
        <Col sm={6} xs={6}>
          <button className={styles.kata}>{data.kata[0]}</button>
        </Col>
        <Col sm={6} xs={6}>
          <button className={styles.kata}>{data.kata[1]}</button> 
        </Col>
      </Row>
    </Container>
    <Container fluid className={styles.sekat}>
      <Row>
        <Col sm={6} xs={6}>
          <button className={styles.kata}>{data.kata[2]}</button>
        </Col>
        <Col sm={6} xs={6}>
          <button className={styles.kata}>{data.kata[3]}</button> 
        </Col>
      </Row>
    </Container>
    </>
  );
};


//  Previous Next 