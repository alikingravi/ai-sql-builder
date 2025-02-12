from fastapi import FastAPI
from app.api import router

app = FastAPI(title="SQL Query Generator API")

app.include_router(router)

@app.get("/")
async def root():
  return {"message": "SQL Query Generator API is running!"}
