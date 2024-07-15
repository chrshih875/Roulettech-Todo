from common.json import ModelEncoder

from .models import Todo


class TodoEncoder(ModelEncoder):
    model = Todo
    properties = [
        "id",
        "task",
    ]
