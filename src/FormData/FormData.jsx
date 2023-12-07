import  { useContext, useState } from 'react'
import  { GlobalContext } from '../Global/GlobalData'
import ShowTask from '../ShowTask/ShowTask'

const FormData = () => {
    const {dispatch} = useContext(GlobalContext)
    const [data,setData] = useState('')
    const [isedit, setIsEdit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const tasks = {
            id: Date.now(),
            data
        }
        dispatch({type : "ADD_TODO", payload : tasks})
        setData('')
    }
    const handleEditInput = (e) => {
              
      e.preventDefault()
    }
    const updateEdit = () => {
      setIsEdit(true)
    }
  return (
    <div>
{isedit ? <form onSubmit={handleEditInput}>
<label htmlFor='todo'></label>
<input
  onChange={(e) => setIsEdit(e.target.value)}
  value={isedit}
  type='text'
  name=''
  id='todo'
/>
<button type='Submit'>Update</button>
<button onClick={() => setIsEdit(true)}>Cancel</button>
</form>      :  <form onSubmit={handleSubmit}>
<label htmlFor='todo'></label>
<input
  onChange={(e) => setData(e.target.value)}
  value={data}
  type='text'
  name=''
  id='todo'
/>
<button>Add Todo</button>
</form> }
<ShowTask updateEdit ={updateEdit}/>
    </div>)
}

export default FormData