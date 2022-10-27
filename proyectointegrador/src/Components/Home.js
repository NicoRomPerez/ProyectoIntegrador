import Footer from './Footer/Footer'
import Header from './Header/Header'
import '../App.scss'
import Body from './Body/Body'
import CategoriesBlock from './Body/CategoriesBlock/CategoriesBlock'
import ListBlock from './Body/ListBlock/ListBlock'

const Home = () => {

  return (
    <div>
        <Header className="header"></Header>
        <Body className="body">
          <CategoriesBlock></CategoriesBlock>
          <ListBlock></ListBlock>
        </Body>
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Home