import os
import openai
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

openai_client = openai.OpenAI(api_key=OPENAI_API_KEY)

async def generate_sql_query(natural_query: str) -> str:
  """
  Calls OpenAI API to generate an optimized SQL query from a natural language query.
  """
  if not OPENAI_API_KEY:
    raise ValueError("Missing OpenAI API Key. Set it in the .env file.")
  
  prompt = (
    "You are an expert in SQL. Given a user request in natural language, "
    "generate an optimized SQL query for an SQLite database.\n"
    "ONLY return the SQL query. Do NOT include explanations, formatting, or markdown syntax.\n\n"
    f"User request: {natural_query}\nSQL Query:"
  )

  try:
    response = openai_client.chat.completions.create(
      model = 'gpt-4',
      messages=[
          {"role": "system", "content": "You are an SQL expert that generates optimized queries for SQLite."},
          {"role": "user", "content": prompt}
      ],
      max_tokens=100
    )

    sql_query = response.choices[0].message.content.strip()
    sql_query = sql_query.replace("```sql", "").replace("```", "").strip()
    
    return sql_query
  
  except Exception as e:
    raise RuntimeError(f"OpenAI API request failed: {str(e)}")
  