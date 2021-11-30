<%-- 
    Document   : addUser
    Created on : 29 nov. 2021, 22:02:40
    Author     : cami_
--%>

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
        
        %>
    </body>
</html>
