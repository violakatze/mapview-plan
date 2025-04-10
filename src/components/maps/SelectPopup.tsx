import { useMapEvent } from 'react-leaflet'

/**
 * SelectPopup component
 */
export const SelectPopup = () => {
  const map = useMapEvent('click', e => {
    map.openPopup(
      '<p>交差点を選択</p><p>隣接1に設定</p><p>隣接2に設定</p><p>隣接3に設定</p><p>隣接4に設定</p><p>隣接5に設定</p><p>隣接6に設定</p><p>隣接7に設定</p><p>隣接8に設定</p>',
      e.latlng
    )
  })

  return <></>
}
