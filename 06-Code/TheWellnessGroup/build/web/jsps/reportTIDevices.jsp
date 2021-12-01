<%-- 
    Document   : reportLocals
    Created on : 30-nov-2021, 23:31:28
    Author     : Elkin Vera
--%>

<%@page import="ec.edu.espe.thewellness.model.TIDevice"%>
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
            
            ArrayList<TIDevice> list = new ArrayList();
        
            TIDevice device1 = new TIDevice(1,"65SD5S5DS54", "Laptop", 1, "HP", "Elkin Vera", "SF");
            TIDevice device2 = new TIDevice(2,"8SD8F28S4DF", "Laptop", 2, "Asus", "Recepcion", "SF");
            
            list.add(device1);
            list.add(device2);
            
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
                      for(int i=0; i<list.size(); i++){
                    %>
                        <tr class="text-center">
                            <td><% out.print(list.get(i).getId()); %></td>
                            <td><% out.print(list.get(i).getSerialNumber()); %></td>
                            <td><% out.print(list.get(i).getName()); %></td>
                            <td><% out.print(list.get(i).getBrand()); %></td>
                            <td><% out.print(list.get(i).getManager()); %></td>
                            <td><% out.print(list.get(i).getType()); %></td>
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
