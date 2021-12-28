<%-- 
    Document   : addTIDevice
    Created on : 30-nov-2021, 21:51:04
    Author     : Elkin Vera
--%>

<%@page import="org.bson.Document"%>
<%@page import="ec.edu.espe.thewellness.utils.ConnectMongo"%>
<%@page import="ec.edu.espe.thewellness.utils.MongoDBManagement"%>
<%@page import="ec.edu.espe.thewellness.model.TIDevice"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Refresh" content="3;URL=../forms/tiDevice.html"/>
        <title>JSP Page</title>
    </head>
    <body>
        
        <h1 align="center">Datos añadidos correctamente</h1>
        
        <%
        
            int id;
            String serialNumber;
            String name;
            int idGym;
            String brand;
            String manager;
            String type;
            
            TIDevice tiDevice;
            
            MongoDBManagement mongoDBManagement = new MongoDBManagement();
            ConnectMongo connectMongo = new ConnectMongo();
            connectMongo.connectData();
            Document document = new Document();
            
            id = (int)(Math. random()*1000+1);
            serialNumber = request.getParameter("serial");
            name = request.getParameter("name");
            idGym = Integer.parseInt(request.getParameter("local"));
            brand = request.getParameter("brand");
            manager = request.getParameter("manager");
            type = "SF";
            
            tiDevice = new TIDevice(id, serialNumber, name, idGym, brand, manager, type);
            
            document.put("ID", tiDevice.getId());
            document.put("Serial", tiDevice.getSerialNumber());
            document.put("Name", tiDevice.getName());
            document.put("ID gym", tiDevice.getIdGym());
            document.put("Brand", tiDevice.getBrand());
            document.put("Manager", tiDevice.getManager());
            document.put("Type", tiDevice.getType());
            
            mongoDBManagement.save(document, "TIDevices", ConnectMongo.database);
            
        %>
        
        
    </body>
</html>
