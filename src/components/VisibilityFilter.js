import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()
  console.log('PROPS', JSON.parse(JSON.stringify(props)))

  return (
    <div>
      all
      <input
        type='radio'
        name='filter'
        onChange={() => dispatch(filterChange('ALL'))}
      />
      important
      <input
        type='radio'
        name='filter'
        onChange={() => dispatch(filterChange('IMPORTANT'))}
      />
      nonimportant
      <input
        type='radio'
        name='filter'
        onChange={() => dispatch(filterChange('NONIMPORTANT'))}
      />
    </div>
  )
}

export default VisibilityFilter
