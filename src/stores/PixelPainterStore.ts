import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  colour: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
export const createEmptyCanvas = (isRandom: boolean) => {
  const output: string[][] = []
  var colorpalette = ['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E'];
  for (let i=0; i<16; i++){
    output[i] = []
    if(!isRandom){
      for (let j=0; j<16; j++){
        output[i].push(colorpalette[Math.floor(Math.random() * 12)%12])
      }
    }else{
      for (let j=0; j<16; j++){
        output[i].push('#FFFFFF')
      }
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(true),
  colour: '#000000',
})