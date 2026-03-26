class TeacherRouter(BaseRouter):
    def __init__(self, service: TeacherService):
        self._svc = service
        super().__init__(prefix="/teachers", tags=["teachers"])

    def _register_routes(self):
        self.router.add_api_route(
            "/",
            self.list_teachers,
            methods=["GET"],
            response_model=list[TeacherOut],
        )
        self.router.add_api_route(
            "/",
            self.create_teacher,
            methods=["POST"],
            response_model=TeacherOut,
            status_code=201,
        )
        self.router.add_api_route(
            "/{teacher_id}",
            self.get_teacher,
            methods=["GET"],
            response_model=TeacherOut,
        )
        self.router.add_api_route(
            "/{teacher_id}",
            self.update_teacher,
            methods=["PATCH"],
            response_model=TeacherOut,
        )
        self.router.add_api_route(
            "/{teacher_id}",
            self.delete_teacher,
            methods=["DELETE"],
            status_code=204,
        )

    async def list_teachers(self) -> list[TeacherOut]:
        return await self._svc.get_all()

    async def create_teacher(self, body: TeacherCreate) -> TeacherOut:
        return await self._svc.create(body)

    async def get_teacher(self, teacher_id: UUID) -> TeacherOut:
        teacher = await self._svc.get_by_id(teacher_id)
        if not teacher:
            raise HTTPException(status_code=404, detail="Teacher not found")
        return teacher

    async def update_teacher(
        self, teacher_id: UUID, body: TeacherUpdate
    ) -> TeacherOut:
        teacher = await self._svc.update(teacher_id, body)
        if not teacher:
            raise HTTPException(status_code=404, detail="Teacher not found")
        return teacher

    async def delete_teacher(self, teacher_id: UUID) -> None:
        deleted = await self._svc.delete(teacher_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Teacher not found")