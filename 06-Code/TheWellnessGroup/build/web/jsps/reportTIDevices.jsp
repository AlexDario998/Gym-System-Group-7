<%-- 
    Document   : reportLocals
    Created on : 30-nov-2021, 23:31:28
    Author     : Elkin Vera
--%>

<%@page import="ec.edu.espe.thewellness.model.TIDevice"%>
<%@page import="ec.edu.espe.thewellness.controller.DataController"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Locals report</title>

        <link href="../css/bootstrap.css" rel="stylesheet" type="text/css">
        <link href="../css/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>

        <%
            DataController dataController = new DataController();
            ArrayList<TIDevice> tiDevices;
            tiDevices = dataController.getTIDevice();
        
            
        %>

        <div class="container">
            <h3 align="center">Lista de Equipos Informáticos</h3>
            <br>
        </div>

        <div class="container">
            <table class="table table-light">
                <thead class="">
                    <tr class="text-center">
                        <th class="table-secondary text-dark" scope="col">ID</th>
                        <th class="table-secondary text-dark" scope="col">Serial</th>
                        <th class="table-secondary text-dark" scope="col">Dispositivo</th>
                        <th class="table-secondary text-dark" scope="col">Marca</th>
                        <th class="table-secondary text-dark" scope="col">Encargado</th>
                        <th class="table-secondary text-dark" scope="col">Tipo</th>
                        <th class="table-secondary text-dark" scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                       for(TIDevice tiDevice : tiDevices){
                    %>
                    <tr class="text-center">
                        <td><% out.print(tiDevice.getId()); %></td>
                        <td><% out.print(tiDevice.getSerialNumber()); %></td>
                        <td><% out.print(tiDevice.getName()); %></td>
                        <td><% out.print(tiDevice.getBrand()); %></td>
                        <td><% out.print(tiDevice.getManager()); %></td>
                        <td><% out.print(tiDevice.getType()); %></td>
                        <td>Eliminar - Actualizar</td>
                        <!--<td><a class="btn btn-primary" href="actionsAdminAlumno.php?action=editAlumno&codigo=<?php echo $result[$k]["PER_CEDULA"];?>">Editar</a></td>-->
                        <!--<td><a class="btn btn-danger" href="actionsAdminAlumno.php?action=deleteAlumno&codigo=<?php echo $result[$k]["PER_CEDULA"];?>">Eliminar</a></td>-->
                    </tr>
                    <%
                      }
                    %>
                </tbody>
            </table>
        </div>


    </body>
</html>
