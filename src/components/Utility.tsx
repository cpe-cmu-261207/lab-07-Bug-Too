import { PixelPainterStore , createEmptyCanvas } from "../stores/PixelPainterStore"
const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={() => PixelPainterStore.update(s => {s.canvas = createEmptyCanvas(true)})}>Clear</button>
      <button className="w-36" onClick={() => PixelPainterStore.update(s => {s.canvas = createEmptyCanvas(false)})}>Random color</button>
    </div>
  )
}

export default Utility