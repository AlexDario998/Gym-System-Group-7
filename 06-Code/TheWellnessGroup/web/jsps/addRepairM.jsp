<%-- 
    Document   : addRepairM
    Created on : 1 dic. 2021, 01:25:07
    Author     : Alex Velastegui
--%>

<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.thewellness.utils.ConnectMongo"%>
<%@page import="ec.edu.espe.thewellness.utils.ConnectMongo"%>
<%@page import="ec.edu.espe.thewellness.utils.MongoDBManagement"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Add Machine Repair</title>
    </head>
    <body>
        <h1>Hello World!</h1>
          <%
            MongoDBManagement mongoDBManagement = new MongoDBManagement();
            ConnectMongo connectMongo = new ConnectMongo();
            connectMongo.connectData();
            Document document = new Document();

            String id;
            String name;
            String lastName;
            String email;
            String type;
            String gym;

            id = request.getParameter("userId");
            name = request.getParameter("userName");
            lastName = request.getParameter("userLastName");
            email = request.getParameter("userEmail");
            type = request.getParameter("userType");
            gym = request.getParameter("gym");

            User user = new User(id, name, lastName, email, type, gym);

            document.put("id", user.getId());
            document.put("name", user.getName());
            document.put("last name", user.getLastName());
            document.put("email", user.getEmail());
            document.put("type", user.getType());
            document.put("gym", user.getGym());

            mongoDBManagement.save(document, "users", ConnectMongo.database);


        %>
    </body>
</html>
