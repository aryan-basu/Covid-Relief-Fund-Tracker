
import { Link } from "react-router-dom"

const  PageNotFound = () => {
    return <div className="flex  items-center text-white justify-center flex-col">
        

    <div className="flex text-6xl md:text-7xl lg:text-8xl font-bold text-white">404</div>
    <div className="flex text-xl lg:text-2xl">Page Not Found</div>
    <Link to="/">
    <button className="px-4 py-2 mt-6 rounded-lg shadow-xl text-lg bg-accentOrange" >Back To Home</button>
    </Link>
</div>
}

export default PageNotFound