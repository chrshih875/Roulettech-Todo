#!/bin/bash
cd Roulettech-Todo/
source venv/bin/activate
cd todo_list/
python3 manage.py runserver 0.0.0.0:8000