import ErrorIcon from "../Icons/ErrorIcon"

const Error = () => {
  return (
    <div className="flex justify-between items-center">
      <ErrorIcon className=""/>
      <div>Failed to fetch!</div>
    </div>
  )
}

export default Error
