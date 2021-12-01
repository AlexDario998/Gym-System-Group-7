<%-- 
    Document   : reportLocals
    Created on : 30-nov-2021, 23:31:28
    Author     : José Paulo Velasteguí
--%>

<%@page import="ec.edu.espe.thewellness.controller.DataController"%>
<%@page import="ec.edu.espe.thewellness.model.Local"%>
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
            ArrayList<Local> locals;
            locals = dataController.getLocal();
            
        %>
        
        <div class="container">
            <h3 align="center">Lista de Gimnasios</h3>
            <br>
        </div>
        
        <div class="container">
            <table class="table table-light">
                <thead class="">
                    <tr class="text-center">
                        <th class="table-secondary text-dark" scope="col">ID</th>
                        <th class="table-secondary text-dark" scope="col">Gimnasio</th>
                        <th class="table-secondary text-dark" scope="col">Ciudad</th>
                        <th class="table-secondary text-dark" scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                      for(Local local : locals){
                    %>
                        <tr class="text-center">
                            <td><% out.print(local.getId()); %></td>
                            <td><% out.print(local.getName()); %></td>
                            <td><% out.print(local.getCity()); %></td>
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
