import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

import './style.css'

interface Props {}

const RegisterWidget: React.FunctionComponent<Props> = () => {
    return (
        <section className="register-widget bg-gray sticky-top">
            <header className="register-widget__header bg-primary d-flex align-items-center justify-content-between px-3 py-1">
                <h4 className="register-widget__header__title font-slab m-0 color-dark">Quer Publicar Aqui?</h4>
                <img src={require('../../assets/icons/books.svg')} alt="Quer se registar?"/>
            </header>
            <main className="register-widget__content px-3 py-4">
                <Form className="register-widget__content__form d-flex flex-column">
                    <Form.Control type="text" className="register-widget__content__form__input" name="name" placeholder="Nome"/>
                    <Form.Control type="email" className="register-widget__content__form__input" name="email" placeholder="Email"/>
                    <Form.Control as="select" className="register-widget__content__form__input" name="topic">
                        <option value="">a</option>
                        <option value="">b</option>
                    </Form.Control>
                    <input type="submit" className="register-widget__content__form__btn font-slab py-1 color-dark" value="Quero publicar" />
                </Form>
            </main>
        </section>
    )
}

export default RegisterWidget