import FormData from './FormData/FormData'
import GlobalData from './Global/GlobalData'
import Todo from './Todo/Todo'
import './App.css'
const App = () => {
  return (

      <div className='home-wrapper'>
        <GlobalData>
        <FormData/>
        <Todo/>
      </GlobalData>
      </div>
  )
}

export default App
