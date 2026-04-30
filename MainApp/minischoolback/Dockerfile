### Imagen base/ programming language o linux distribution
FROM python
### Copiar cosas osea copiar proyecto
WORKDIR /app
## mkdir app
## cd app

COPY . .
### Instalar lo necesario / Instalar dependencias
RUN pip install -r requirements.txt
### Exponer puerto a utilizar
EXPOSE 3000
### Ejecutar programa
CMD ["python", "-m", "src.app.main"]