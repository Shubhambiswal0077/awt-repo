# Student Management System

A simple Django-based Student Management System that allows CRUD operations on student data.

## Features

- Add new students
- View all students
- Update student information
- Delete students
- Django Admin integration

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run migrations:
   ```
   python manage.py migrate
   ```

3. Create a superuser for admin access:
   ```
   python manage.py createsuperuser
   ```

4. Run the development server:
   ```
   python manage.py runserver
   ```

5. Access the application at http://127.0.0.1:8000/

6. Access Django Admin at http://127.0.0.1:8000/admin/

## Project Structure

- `student_management/` - Main Django project
- `students/` - Django app containing models, views, templates
- `students/models.py` - Student model
- `students/views.py` - CRUD views
- `students/forms.py` - ModelForm for Student
- `students/templates/` - HTML templates
- `students/urls.py` - URL patterns for the app