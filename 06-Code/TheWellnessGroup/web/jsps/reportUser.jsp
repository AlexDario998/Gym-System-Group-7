<%-- 
    Document   : reportLocals
    Created on : 30-nov-2021, 23:31:28
    Author     : José Paulo Velasteguí
--%>

<%@page import="ec.edu.espe.thewellness.controller.DataController"%>
<%@page import="ec.edu.espe.thewellness.model.User"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Reporte de Usuarios</title>

        <link href="../css/bootstrap.css" rel="stylesheet" type="text/css">
        <link href="../css/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>

        <%
             DataController dataController = new DataController();
            ArrayList<User> users;
            users = dataController.getUser();
            
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
                        <th class="table-secondary text-dark" scope="col">Nombres</th>
                        <th class="table-secondary text-dark" scope="col">Apellidos</th>
                        <th class="table-secondary text-dark" scope="col">Email</th>
                        <th class="table-secondary text-dark" scope="col">Tipo de Usuario</th>
                        <th class="table-secondary text-dark" scope="col">Gimnasio</th>
                        <th class="table-secondary text-dark" scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                      for(User user : users){
                    %>
                    <tr class="text-center">
                        <td><% out.print(user.getId()); %></td>
                        <td><% out.print(user.getName()); %></td>
                        <td><% out.print(user.getLastName()); %></td>
                        <td><% out.print(user.getEmail()); %></td>
                        <td><% out.print(user.getType()); %></td>
                        <td><% out.print(user.getGym()); %></td>
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
