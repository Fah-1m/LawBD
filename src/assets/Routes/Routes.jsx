import { createBrowserRouter } from "react-router"
import Mainlayout from "../Layout/Mainlayout"
import Home from "../../Pages/Home"
import Blogs from '../../Pages/Blogs'
import Mybookings from "../../Pages/Mybookings"
import Details from "../../Pages/Details"
import Error from "../../Pages/Error"
import Nobooking from "../../Component/Nobooking"
import Nolawyer from "../../Component/Nolawyer"
import Loading from "../../Component/Loading"



const router= createBrowserRouter([
    {
      path: '/',
     Component: Mainlayout,
   errorElement:  <Error/>,
     children: [
        {
            index: true,
         element: <Home/>,
        
         loader: ()=> fetch ('/Fakedata.json'),
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
            // loader: ()=> fetch ('/Fakedata.json'),
            loader: async ({ params }) => {
                const res = await fetch('/Fakedata.json');
                const data = await res.json();
            
                const item = data.find(d => d.id === parseInt(params.id));
                
                if (!item) {
                  throw new Response("Not Found", { status: 404 });
                }
            
                return data; 
              },
        },
        {
            path: '/no',
            element: <Nobooking></Nobooking>
        },
        {
            path: "/34rete",
            element: <Nolawyer></Nolawyer>
        }
        
     ]
    }
  ])

  export default router