def get_service() -> StudentService:
    pass

class Students():
    def __init__(self, studentService: StudentService) -> None:
        self.stduentService = studentService
    
    def get_student(self, id: str) -> None:
        pass
    def create_student(self, student: StudentData) -> None:
        pass
    def delete_student(self, id: str) -> None:
        pass
    def update_student(self, student: StudentData) -> None:
        pass
    def list_students_by_group(self, group_id: str) -> None:
        pass