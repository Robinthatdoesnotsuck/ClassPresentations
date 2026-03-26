
class IDontDepend:
    def __init__(self):
        pass

class IDepend:
    def __init__(self, idontdepend: IDontDepend):
        self.idontdepend = idontdepend

def main():
    schema = Schemas()
    models = Models(schema)
    routers = Routers(models)
    server(routers)
    pass

if __name__ == "__main__":
    main()

CRUD:
    ALTAS(meter)
    BAJAS(eliminar)
    CAMBIOS(actualizar)
    CONSULTAR(leer)
    CREATE
    READ
    UPDATE
    DELETE

REPOSITORY:
    business logic

Layer frontend -> Form para insertar estudiantes o inscribir estudiantes


Backend:
Layer business -> procesar estudiantes y meterlos al grupo

Layer Data CRUD -> Crear nuevos estudiantes, Crear grupo y actualizar grupo con estudiantes

APP: rest api REPOSITORY pattern

