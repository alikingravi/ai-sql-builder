from fastapi import FastAPI
from app.api import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SQL Query Generator API")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
async def root():
  return {"message": "SQL Query Generator API is running!"}
