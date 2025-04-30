
import useQueryBlogPosts from "../../hooks/useQueryBlogPosts"
import BlogPosts from "./BlogPosts"
import Error from "./Error";

const New = () => {

  const {
    blogPosts , isLoading , error
  } = useQueryBlogPosts();


  if(error){
    return <Error/>
  }

  if(isLoading){
    return <div className="flex justify-center items-center">loading...</div>
  }



  return (
  <section className="px-24 py-30 pb-10">
    <div className="m-auto max-w-389">
        <h2 className="tracking-6 mb-34
        text-[2.25rem] font-semibold 
        text-center">Latest news from us</h2>
        <ul className="flex flex-col gap-y-34">
           {blogPosts && blogPosts.map((post) => (
            <BlogPosts post={post} key={post.id}/>

           ))} 
        </ul>
    </div>
  </section>
  )
}

export default New
