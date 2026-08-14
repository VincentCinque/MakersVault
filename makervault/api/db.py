import os
from pathlib import Path
from sqlmodel import create_engine

DB_URL = os.getenv("DB_URL", "sqlite:///./app.db")
STORAGE = Path(os.getenv("FILE_STORAGE", "./storage"))
STORAGE.mkdir(parents=True, exist_ok=True)
THUMBS = STORAGE / "thumbs"
THUMBS.mkdir(parents=True, exist_ok=True)

engine = create_engine(DB_URL, connect_args={"check_same_thread": False})
