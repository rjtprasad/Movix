import Carousel from "../../../components/carousel/Carousel"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'

function SimilarContent({mediaType, id}) {
    
    const {data, loading} = useFetch(`/${mediaType}/${id}/similar`)

  return (
    <div className="carouselSection">
        <ContentWrapper>
            {mediaType === "movie" 
            ? (<span className="carouselTitle">Similar Movies</span>) 
            : (<span className="carouselTitle">Similar TV Series</span>)
            }
        </ContentWrapper>
        <Carousel data={data?.results} endpoint={mediaType} loading={loading}/>
    </div>

  )
}

export default SimilarContent