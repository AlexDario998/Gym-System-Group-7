<%-- 
    Document   : reportLocals
    Created on : 30-nov-2021, 23:31:28
    Author     : José Velasteguí
--%>

<%@page import="ec.edu.espe.thewellness.controller.DataController"%>
<%@page import="ec.edu.espe.thewellness.model.Machine"%>
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
            ArrayList<Machine> machines;
            machines = dataController.getMachine();
            
        %>
        
        <div class="container">
            <h3 align="center">Lista de Maquinas</h3>
            <br>
        </div>
        
        <div class="container">
            <table class="table table-light">
                <thead class="">
                    <tr class="text-center">
                        <th class="table-secondary text-dark" scope="col">ID</th>
                        <th class="table-secondary text-dark" scope="col">Nombre</th>
                        <th class="table-secondary text-dark" scope="col">Gimnasio</th>
                        <th class="table-secondary text-dark" scope="col">Numero de serie</th>
                        <th class="table-secondary text-dark" scope="col">Marca</th>
                        <th class="table-secondary text-dark" scope="col">Zona de Gimnasio</th>
                        <th class="table-secondary text-dark" scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <%
                      for(Machine machine : machines){
                    %>
                        <tr class="text-center">
                            <td><% out.print(machine.getId()); %></td>
                            <td><% out.print(machine.getName()); %></td>
                            <td><% out.print(machine.getGym()); %></td>
                            <td><% out.print(machine.getSerial()); %></td>
                            <td><% out.print(machine.getBrand()); %></td>
                            <td><% out.print(machine.getZone()); %></td>
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
