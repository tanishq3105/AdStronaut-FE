interface propType{
    label:string
}

export default function Tag({label}:propType) {
  return (
    <div>
        <span className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-600 font-medium">{label}</span>
    </div>
  )
}
