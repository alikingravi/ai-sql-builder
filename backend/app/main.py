from fastapi import FastAPI;

app = FastAPI();

@app.get("/")
async def root():
  return {"message": "SQL Query Generator API is running!"}
