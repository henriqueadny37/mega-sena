export default function IcontadorNew(props){
    
   
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100px",
            height:"100px",
            borderRadius:"100px",
            backgroundColor:"greenyellow",
            color:"#000",
            fontSize:"3rem",
            margin:"10px",
        }}>
            {props.numeros}
        </div>
    )
}