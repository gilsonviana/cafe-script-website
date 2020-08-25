import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PostsList from '../../components/PostsList'
import RegisterWidget from '../../components/RegisterWidget'

interface Props {}

const Home: React.FunctionComponent<Props> = () => {
    const MOCK_POSTS = [{
        id: 1,
        title: 'Array: Os métodos mais usados',
        likes: 22,
        excerpt: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque 
            placeat molestiae, possimus quod voluptas et corporis 
            reiciendis totam, iste sint voluptatem quam natus architecto 
            eaque dolorum quaerat? Officiis, ratione aperiam?
        `,
        avatar: 'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
        author_fullname: 'Ronald',
        author_username: 'ronald.viera'
    }, {
        id: 2,
        likes: 18,
        title: 'Array: Os métodos mais usados',
        excerpt: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque 
            placeat molestiae, possimus quod voluptas et corporis 
            reiciendis totam, iste sint voluptatem quam natus architecto 
            eaque dolorum quaerat? Officiis, ratione aperiam?
        `,
        avatar: 'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
        author_fullname: 'Ronald',
        author_username: 'ronald.viera'
    }, {
        id: 3,
        likes: 2,
        title: 'Array: Os métodos mais usados',
        excerpt: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque 
            placeat molestiae, possimus quod voluptas et corporis 
            reiciendis totam, iste sint voluptatem quam natus architecto 
            eaque dolorum quaerat? Officiis, ratione aperiam?
        `,
        avatar: 'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
        author_fullname: 'Ronald',
        author_username: 'ronald.viera'
    }]

    return (
        <main className="page home">
            <Container>
                <Row>
                    <Col md="6" lg={{span: 5, offset: 1}} xl={{span: 4, offset: 2}}>
                        <PostsList postsList={MOCK_POSTS}/>
                    </Col>
                    <Col md="6" lg={{span: 4, offset: 1}} xl={4}>
                        <RegisterWidget />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Home