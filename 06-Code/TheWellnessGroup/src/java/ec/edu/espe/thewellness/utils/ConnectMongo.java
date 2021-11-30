/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.thewellness.utils;

import com.mongodb.client.MongoDatabase;




/**
 *
 * @author José Velasteguí
 */
public class ConnectMongo {
      MongoDBManagement mongoDB = new MongoDBManagement();
    
    public static MongoDatabase database;
    public void connectData(){
        database = mongoDB.conecction();
       
    }
}
