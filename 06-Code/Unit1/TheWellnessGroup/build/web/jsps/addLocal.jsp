<%-- 
    Document   : addLocal
    Created on : 30-nov-2021, 20:47:07
    Author     : Elkin Vera
--%>

<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.thewellness.utils.ConnectMongo"%>
<%@page import="ec.edu.espe.thewellness.utils.MongoDBManagement"%>
<%@page import="ec.edu.espe.thewellness.model.Local"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Refresh" content="3;URL=../forms/local.html"/>
        
        <title>JSP Page</title>
    </head>
    <body>
        
        <h3 align="center">Datos añadidos correctamente</h3>
        
        <%
            
            int id;
            String name;
            String city;
            
            Local local;
            
            MongoDBManagement mongoDBManagement = new MongoDBManagement();
            ConnectMongo connectMongo = new ConnectMongo();
            connectMongo.connectData();
            Document document = new Document();
            
            id = (int)(Math. random()*1000+1);
            name = request.getParameter("name");
            city = request.getParameter("city");
            
            local = new Local(id, name, city);
            
            document.put("ID", local.getId());
            document.put("Name", local.getName());
            document.put("City", local.getCity());

            mongoDBManagement.save(document, "Locals", ConnectMongo.database);
        %>
        
        
        
    </body>
</html>
