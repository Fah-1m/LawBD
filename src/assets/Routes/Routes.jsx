import { createBrowserRouter } from "react-router"
import Mainlayout from "../Layout/Mainlayout"
import Home from "../../Pages/Home"
import Blogs from '../../Pages/Blogs'
import Mybookings from "../../Pages/Mybookings"
import Details from "../../Pages/Details"
import Error from "../../Pages/Error"
import Nobooking from "../../Component/Nobooking"



const router= createBrowserRouter([
    {
      path: '/',
     Component: Mainlayout,
   errorElement: <Error/>,
     children: [
        {
            index: true,
         element: <Home/>,
        
         loader: ()=> fetch ('/public/Fakedata.json'),
        },
        {
            path: '/mybookings',
            element: <Mybookings></Mybookings>,
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: ()=> fetch ('/public/Fakedata.json')
        },
        {
            path: '/no',
            element: <Nobooking></Nobooking>
        }
        
     ]
    }
  ])

  export default router