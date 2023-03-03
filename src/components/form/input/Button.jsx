import ReactLoading from 'react-loading'

export default function Button({ text, isLoading, onClick }) {
  return (
    <button
      type="button"
      className={`block w-full  rounded-lg p-3 transition-all  ${
        isLoading ? 'bg-gray-300' : 'bg-primary-purple hover:bg-purple-800'
      }`}
      onClick={onClick}
      disabled={isLoading}
    >
      <span className="flex justify-center font-lato font-bold text-white">
        {isLoading ? (
          <ReactLoading type="spin" color="#fff" height={24} width={24} />
        ) : (
          text
        )}
      </span>
    </button>
  )
}
