import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';  
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1553649084-3e42773ff0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://imgs.search.brave.com/cgSBbTInFwayTfiiNKah2VtM9jNS8NsRUZeSfcZ9AJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQx/MTgzNzEwL3Bob3Rv/L3JhaW55LW5pZ2h0/LWJva2VoLXdpbmRv/dy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9cWJ4ZTBnYVo2/YUdfTTNzc2RUVjA4/R2E4VG5xZ1VyLUtC/TzZaa21LWURYYz0"
    

    return(
    <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"        
        height="140"
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
          info.humidity>80?<ThunderstormOutlinedIcon></ThunderstormOutlinedIcon>:info.temp>15?<WbSunnyOutlinedIcon></WbSunnyOutlinedIcon>:<AcUnitOutlinedIcon></AcUnitOutlinedIcon>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}