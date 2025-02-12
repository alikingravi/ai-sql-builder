from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.generate_sql_service import generate_sql_query

router = APIRouter()

class QueryRequest(BaseModel):
  natural_query: str

class QueryResponse(BaseModel):
  sql_query: str

@router.post('/generate-sql', response_model=QueryResponse)

# Converts a natural language query into a SQL statement.
async def generate_sql(request: QueryRequest):
  try:
    sql_query = await generate_sql_query(request.natural_query)
    return {"sql_query": sql_query}
  except Exception as e:
    raise HTTPException(status_code=500, detail=str(e))
  