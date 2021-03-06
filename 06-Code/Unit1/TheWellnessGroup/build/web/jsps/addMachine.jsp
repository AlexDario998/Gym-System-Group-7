<%-- 
    Document   : addMachine
    Created on : 1 dic. 2021, 00:24:34
    Author     : cami_
--%>

<%@page import="ec.edu.espe.thewellness.model.Machine"%>
<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.thewellness.utils.MongoDBManagement"%>
<%@page import="ec.edu.espe.thewellness.utils.ConnectMongo"%>
<%@page import="ec.edu.espe.thewellness.model.User"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Refresh" content="3;URL=../forms/machine.html"
        <title>Add Machine </title>
    </head>
    
    <body>
        <h1>Added Succesfuly</h1>
        <%
            MongoDBManagement mongoDBManagement = new MongoDBManagement();
            ConnectMongo connectMongo = new ConnectMongo();
            connectMongo.connectData();
            Document document = new Document();

            int id;
            String name;
            String serial;
            String brand;
            String gym;
            String zone;

            id = (int)(Math. random()*1000+1);
            name = request.getParameter("machineName");
            serial = request.getParameter("serialNumber");
            brand = request.getParameter("machineBrand");
            gym = request.getParameter("local");
            zone=request.getParameter("zone");

           Machine machine=new Machine(id,name,serial,brand,gym,zone);

            document.put("id", machine.getId());
            document.put("name", machine.getName());
            document.put("gym", machine.getGym());
            document.put("serial Number", machine.getSerial());
            document.put("brand", machine.getBrand());
            document.put("zone", machine.getZone());

            mongoDBManagement.save(document, "machines", ConnectMongo.database);


        %>
    </body>
</html>
