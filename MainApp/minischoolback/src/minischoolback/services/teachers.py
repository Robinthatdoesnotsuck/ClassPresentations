from uuid import UUID
from passlib.hash import bcrypt

from models.teacher import Teacher
from repositories.teacher import TeacherRepository
from schemas.teacher import TeacherCreate, TeacherUpdate

class TeacherService:
    def __init__(self, repo: TeacherRepository):
        self._repo = repo

    async def get_all(self) -> list[Teacher]:
        return await self._repo.get_all()

    async def get_by_id(self, id: UUID) -> Teacher | None:
        return await self._repo.get_by_id(id)

    async def create(self, data: TeacherCreate) -> Teacher:
        password_hash = bcrypt.hash(data.password)
        return await self._repo.create(
            email=data.email,
            password_hash=password_hash,
            first_name=data.first_name,
            last_name=data.last_name,
        )

    async def update(self, id: UUID, data: TeacherUpdate) -> Teacher | None:
        return await self._repo.update(
            id=id,
            first_name=data.first_name,
            last_name=data.last_name,
        )

    async def delete(self, id: UUID) -> bool:
        return await self._repo.delete(id)