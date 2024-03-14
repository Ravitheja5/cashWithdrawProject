import './index.css'

const DenominationItem = props => {
  const {item} = props

  const {value} = item

  return (
    <button className="button" type="button">
      {value}
    </button>
  )
}

export default DenominationItem
