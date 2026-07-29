fetch('config/album.json')
.then(r=>r.json())
.then(data=>{
document.getElementById('titulo').textContent=data.titulo;
document.getElementById('descripcion').textContent=data.descripcion;
});
