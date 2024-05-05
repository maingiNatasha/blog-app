import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import BlogDetail from "./components/blog/BlogDetail"
import About from "./components/about/About"
import ContactUs from "./components/contact/ContactUs"
import Blogs from "./components/blog/Blogs"
import BlogDetailsDemo from "./components/details-demo/BlogDetailsDemo"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <Index /> } />
      <Route exact path="/blog-details/:id" element={ <BlogDetail /> } />
      <Route path="/home" element={ <Index /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact-us" element={ <ContactUs /> } />
      <Route path="/blogs" element={ <Blogs /> } />
      <Route path="/blog-details-demo" element={ <BlogDetailsDemo /> } />
    </Routes>
  )
}

export default App