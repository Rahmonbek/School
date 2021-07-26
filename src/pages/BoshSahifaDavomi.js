import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './BoshSahifaDavomi.module.css'
import { ButtonWrapper } from './StyleBoshSahifa'

export default class BoshSahifaDavomi extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <Container>
                        <Row>
                            <Col xs={0} sm={0} md={6} lg={6}></Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1>Qabul uchun ariza topshiring</h1>
                                <h3>Kuzgi qabul jarayoni hozir mavjud</h3>
                                <p>Biz o'quvchiarimizga shunchaki ta'lim beribgina qolmasdan, shu bilan birga ularga kelajakdagi muvaffaqiyatlar va kareralarida o'z o'rnilarini topish sirlarini o'rgatamiz</p>
                                <ButtonWrapper>
                                    <button className='btn drawBorder'>Hoziroq ariza topshiring</button>
                                </ButtonWrapper>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
