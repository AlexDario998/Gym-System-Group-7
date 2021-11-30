<%-- 
    Document   : addUser
    Created on : 29 nov. 2021, 22:02:40
    Author     : cami_
--%>

<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.thewellness.utils.MongoDBManagement"%>
<%@page import="ec.edu.espe.thewellness.model.User"%>
<%@page import="ec.edu.espe.thewellness.model.User"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Add User</title>
    </head>
    <body>
        <h1>User Added</h1>
        <% 
        int id;
         String name;
    String lastName;
    String email;
    String type;
    String gym;
    
id=Integer.parseInt(request.getParameter("userId"));
name= request.getParameter("userName");
lastName=request.getParameter("userLastName");
email=request.getParameter("userEmail");
type=request.getParameter("userType");
gym=request.getParameter("gym");

User user=new User(id,name,lastName,email,type,gym);

MongoDBManagement dataBase;

Document document= new Document();

document.put("id",user.getId());
document.put("name", user.getName());
document.put("last name", user.getLastName());
document.put("email", user.getEmail());
document.put("type", user.getType());
document.put("gym", user.getGym());

//dataBase.save(document, "users", "TheWellnessGroup"");


        
        %>
    </body>
</html>
