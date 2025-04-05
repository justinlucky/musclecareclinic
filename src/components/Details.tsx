import Preview from "./Preview"
import ServicePreview from "./ServicePreview"
//import ServicePreview from "./ServicePreview"
import Team from "./Team"


const Details = () => {
  return (
    <div className="w-full rounded-t-2xl rounded-b-2xl mt-[10px] p-3">
      <Preview />
      <ServicePreview/>
      <Team />
    </div>
  )
}

export default Details
