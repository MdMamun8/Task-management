import FormData from './FormData/FormData'
import GlobalData from './Global/GlobalData'
import Todo from './Todo/Todo'

const App = () => {
  return (

      <GlobalData>
        <FormData/>
        <Todo/>
      </GlobalData>
  )
}

export default App
