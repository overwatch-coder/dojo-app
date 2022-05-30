import { useParams } from "react-router-dom";

const Update = () => {

    const { id } = useParams();
    return ( 
        <div>
            <h1>Update Page - {id}</h1>
        </div>
     );
}
 
export default Update;