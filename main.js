let conexionServidor = async()=>{
    let comunicacion = await fetch("https://campusint.000webhostapp.com/Conexion_000webhost_github/api.php");
    let texto = await comunicacion.text();
    document.querySelector("body").innerHTML = texto;
}
conexionServidor();