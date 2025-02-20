from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)  # ✅ Initialize FastAPI test client

def test_generate_sql_valid_query():
    response = client.post("/generate-sql", json={"natural_query": "Get all users"})
    assert response.status_code == 200
    assert "sql_query" in response.json()
    assert response.json()["sql_query"].strip().startswith("SELECT")

def test_generate_sql_empty_request():
    response = client.post("/generate-sql", json={})
    assert response.status_code == 422

def test_generate_sql_blank_query():
    response = client.post("/generate-sql", json={"natural_query": ""})
    assert response.status_code == 400
    assert "detail" in response.json()

def test_generate_sql_invalid_data_type():
    response = client.post("/generate-sql", json={"natural_query": 12345})
    assert response.status_code == 422

def test_generate_sql_long_query():
    long_query = "Show me all the users from the database where their email starts with 'a' and they have logged in the past 30 days and their status is active." * 5
    response = client.post("/generate-sql", json={"natural_query": long_query})
    assert response.status_code == 200
    assert "sql_query" in response.json()
    assert response.json()["sql_query"].strip().startswith("SELECT")

def test_generate_sql_malformed_request():
    response = client.post("/generate-sql", data="invalid data")
    assert response.status_code == 422
