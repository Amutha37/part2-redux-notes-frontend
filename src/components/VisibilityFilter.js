import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  const handleSelect = (sts) => {
    console.log(sts)
    dispatch(filterChange(sts))
    dispatch(setNotification(`You selected  : ${sts}`, 5))
  }

  return (
    <div>
      All
      <input type='radio' name='filter' onChange={() => handleSelect('ALL')} />
      Important
      <input
        type='radio'
        name='filter'
        onChange={() => handleSelect('IMPORTANT')}
      />
      Nonimportant
      <input
        type='radio'
        name='filter'
        onChange={() => handleSelect('NOT IMPORTANT')}
      />
    </div>
  )
}

export default VisibilityFilter
