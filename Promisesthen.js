function obtenerInformacionTarea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tarea = { id: 1, nombre: "Tarea de ejemplo", estado: "Completada" };
      resolve(tarea);
    }, 2000);
  });
}


obtenerInformacionTarea()
  .then((tarea) => {
    console.log(`La tarea con id ${tarea.id}, tiene el nombre ${tarea.nombre} que está ${tarea.estado}`);
  })
  .catch((error) => {
    console.error("Error al obtener la información de la tarea:", error);
  });