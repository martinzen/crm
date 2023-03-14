import { useRouter } from "next/router"

const ProductID = () => {
    const router= useRouter()

const {id}=router.query 
return <p>ID: {id}</p>

}

export default ProductID

