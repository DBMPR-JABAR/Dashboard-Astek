import useWindowDimensions from '../../../hooks/useWindowDimensions'
import FixedNavSidebar from './FixedNavSidebar'
import SlideableNavSidebar from './SlidableNavSidebar'

export default function NavSidebar({ setNavWidth }) {
  const { width: windowWidth } = useWindowDimensions()

  if (windowWidth > 1024) {
    return <FixedNavSidebar setNavWidth={setNavWidth} />
  }

  return <SlideableNavSidebar />
}
