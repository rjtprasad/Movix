import Carousel from "../../../components/carousel/Carousel"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'

function Recommendations({mediaType, id}) {
    const {data, loading} = useFetch(`/${mediaType}/${id}/recommendations`)
  return (
    <div className="carouselSection">
        <ContentWrapper>
        <span className="carouselTitle">Recommendations</span>
        </ContentWrapper>
        <Carousel data={data?.results} endpoint={mediaType} loading={loading}/>
    </div>
  )
}

export default Recommendations