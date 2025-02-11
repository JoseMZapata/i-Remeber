from fastapi import FastAPI, Query
import pandas as pd

app = FastAPI()
 
# Cargar datos del CSV
file_path = "API PRECIOS.csv"
df = pd.read_csv(file_path, encoding="latin1")

@app.get("/productos/")
def obtener_productos(
    nombre: str = Query(None, description="Nombre del producto"),
    categoria: str = Query(None, description="Categoría del producto"),
    supermercado: str = Query(None, description="Nombre del supermercado"),
    estado: str = Query(None, description="Estado de México")
):
    """Devuelve productos filtrados por nombre, categoría, supermercado o estado."""
    resultados = df.copy()
    if nombre:
        resultados = resultados[resultados["NOMBRE_PRODUCTO"].str.contains(nombre, case=False, na=False)]
    if categoria:
        resultados = resultados[resultados["CATEGORIA"].str.contains(categoria, case=False, na=False)]
    if supermercado:
        resultados = resultados[resultados["SUPERMERCADO"].str.contains(supermercado, case=False, na=False)]
    if estado:
        resultados = resultados[resultados["ESTADO"].str.contains(estado, case=False, na=False)]
    
    return resultados.to_dict(orient="records")

@app.get("/producto/{nombre}/precio")
def obtener_precio_producto(nombre: str):
    """Devuelve el precio mínimo, máximo y promedio del producto especificado."""
    productos = df[df["NOMBRE_PRODUCTO"].str.contains(nombre, case=False, na=False)]
    if productos.empty:
        return {"error": "Producto no encontrado"}
    
    precios = productos["PRECIO"]
    return {
        "producto": nombre,
        "precio_min": precios.min(),
        "precio_max": precios.max(),
        "precio_promedio": round(precios.mean(), 2)
    }
