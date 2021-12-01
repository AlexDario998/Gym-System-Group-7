/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.thewellness.controller;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import ec.edu.espe.thewellness.model.Local;
import ec.edu.espe.thewellness.utils.ConnectMongo;
import ec.edu.espe.thewellness.utils.MongoDBManagement;
import java.io.IOException;
import java.util.ArrayList;
import org.bson.Document;
import org.json.simple.parser.ParseException;

/**
 *
 * @author DELL
 */
public class dataController {
     public static ArrayList<Local> getLocal() throws ParseException, IOException {
         MongoDBManagement mongoDBManagement = new MongoDBManagement();
        ArrayList<Local> local = new ArrayList<>();
        MongoDatabase database = mongoDBManagement.conecction();
        MongoCollection collection = database.getCollection("Locals");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Local localClass = new Local();
                localClass.setId(jsonObject.get("ID").getAsInt());
                localClass.setName(jsonObject.get("Name").getAsString());
                localClass.setCity(jsonObject.get("City").getAsString());
                local.add(localClass);
            }
        } finally {
            cursor.close();
        }

        return local;
    }

    
}
