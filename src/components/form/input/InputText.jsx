export default function InputText({ id, placeHolderText, onChange, value }) {
  return (
    <input
      id={id}
      className="w-full rounded-lg border border-gray-400 bg-gray-50 p-3 focus:border-2 focus:border-primary-purple"
      placeholder={placeHolderText}
      onChange={onChange}
      value={value}
      type="text"
    />
  )
}
