import ToDo from './ToDo.jsx';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <ToDo/>
      <ToastContainer position = "bottom-right" theme = "light" progressClassName = "toast-progress" bodyClassName = "toast-body"/>
    </>
  )
}

export default App
