import { useMapEvent } from 'react-leaflet'

/**
 * SelectPopup component
 */
export const SelectPopup = () => {
  const map = useMapEvent('click', e => {
    map.openPopup(
      '<p>交差点1に設定</p><p>交差点2に設定</p><p>交差点3に設定</p><p>交差点4に設定</p><p>交差点5に設定</p><p>交差点6に設定</p><p>交差点7に設定</p><p>交差点8に設定</p>',
      e.latlng
    )
  })

  return <></>
}
