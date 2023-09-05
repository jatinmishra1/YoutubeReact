
import "../src/App.css"
import Head from "./components/Head";
import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import { BrowserRouter } from "react-router-dom";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>
  ,children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:'/watch',
      element:<Watchpage/>
    }
  ]
}])

function App() {
  return (
    // <BrowserRouter>
    <Provider store={store}>
        <div>
          <Head/>
          {/* <Body/> */}
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
        </Provider>
        // </BrowserRouter>
        // {/*
        // Header
        // body
        //    sidebar
        //       Menu itmes
        //    Main container
        //      Butoon lIST
        //      Video container
        //      VideoCard


        
        // */}
        
  );
}

export default App;
