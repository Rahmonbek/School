import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './BoshSahifaDavomi.module.css'
import { ButtonWrapper } from './StyleBoshSahifa'

export default class BoshSahifaDavomiRU extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <Container>
                        <Row>
                            <Col xs={0} sm={0} md={6} lg={6}></Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1>Подать заявку на поступление</h1>
                                <h3>Осенний прием теперь доступен</h3>
                                <p>Мы не только обучаем наших студентов, но и обучаем их секретам поиска своего места в будущем успехе и карьере.</p>
                                <ButtonWrapper>
                                    <button className='btn drawBorder'>Применить сейчас</button>
                                </ButtonWrapper>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
