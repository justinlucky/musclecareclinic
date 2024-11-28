import Preview from "./Preview"
import ServicePreview from "./ServicePreview"
import Team from "./Team"


const Details = () => {
  return (
    <div className=" bg-white w-full rounded-t-2xl mt-[-10px] p-3">
      <Preview />
      <ServicePreview />
      <Team />
    </div>
  )
}

export default Details
