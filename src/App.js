import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ArticlePage from './components/ArticlePage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Nav from  './NavBar';
import ArticleListPage from './components/ArticlesListPage';
import NotFound from './components/NotFound';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AddPost from './components/AddPost';
import UserArticle from './components/UserArticle';
import ArticleListUser from './ReuseComponents/ArticleListUser';







function App() {
  return (
    <div className="App">

    
      <BrowserRouter>
 <Nav/>
      <Routes>
    <Route path='/' element ={<HomePage/>}/>
    <Route path='/articleListpage' element={<ArticleListPage/>}/>
    < Route path='/article/:articleId' element={<ArticlePage/>}/>
    <Route path='/about'  element ={<AboutPage/>}/>
    <Route path='/register'  element ={<RegisterPage/>}/>
  
    <Route  path='/login'  element ={<LoginPage/>}/>
    <Route path='/addPost'  element ={<AddPost/>}/>
    <Route path='/articles/user/:userName'  element ={<UserArticle/>}/>
    <Route path='/articles/user/:userName'  element ={<ArticleListUser/>}/>
   
    <Route path='*'  element ={<NotFound/>}/>

    </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default App;
