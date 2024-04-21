// import logo from './logo.svg';
// // import './App.css';
// import { ChakraProvider } from '@chakra-ui/react'
// import Navbar from './components/Common/Navbar/Navbar';

import { BrowserRouter,} from 'react-router-dom';

import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
  {/* <Button>Button</Button> */}
{/* <NavbarWithMegaMenu/> */}
      
      <AppRoutes/>
    
    
    </BrowserRouter>
  );
}

export default App;
