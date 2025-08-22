import { useParams } from "react-router-dom";
import Detail from "./Detail";
import RecommendedBlog from "./RecommendedBlog";

function BlogDetail() {
    const { blogid } = useParams();

    return (
        <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
            <Detail />
            <RecommendedBlog />
        </div>
    )
}

export default BlogDetail;
