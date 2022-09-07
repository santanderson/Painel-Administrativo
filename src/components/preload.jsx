import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

function Preload() {
  let navigate = useNavigate();
  const refresh = setInterval(() =>{
    navigate("/", { replace: true })
    clearInterval(refresh);
  }, 1000);

    return (
      <div className="preload">
        <CircularProgress color="success" />
      </div>
    )
  }
  
  export default Preload
  