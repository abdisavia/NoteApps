using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var todos = new List<Todo>();

// endpoint with get method that return 2 results Ok or not found, this endpoint also accept Id as the parameter
app.MapGet("/todos/{id}", Results<Ok<Todo>, NotFound>(int Id) => {
    // Search for todo with same id
    var targetTodo = todos.SingleOrDefault(t => Id == t.Id);
    // if the targetTodo value is null then return 404, else return 202
    return targetTodo is null ? TypedResults.NotFound() : TypedResults.Ok(targetTodo);
});

// 
app.MapPost("/todos",(int Id, string Name, string Content) => {
    Todo task = new Todo(Id,Name,Content);
    // add new task at list 
    todos.Add(task);
    // return created result (201)
    return TypedResults.Created("/todos/{id}",task);
});

app.MapDelete("/todos/{id}", Results<Ok<String>,NotFound>(int Id) => {
    var targetTodo = todos.SingleOrDefault(t => Id == t.Id);
   return targetTodo is null ? TypedResults.NotFound() : TypedResults.Ok("Data berhasil dihapus"); 
});



app.Run();


public record Todo(int Id, string Name, string Content);