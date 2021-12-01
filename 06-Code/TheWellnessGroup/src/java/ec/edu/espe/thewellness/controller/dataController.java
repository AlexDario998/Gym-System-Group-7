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
import ec.edu.espe.thewellness.model.Machine;
import ec.edu.espe.thewellness.model.TIDevice;
import ec.edu.espe.thewellness.model.User;
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
public class DataController {

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

    public static ArrayList<TIDevice> getTIDevice() throws ParseException, IOException {
        MongoDBManagement mongoDBManagement = new MongoDBManagement();
        ArrayList<TIDevice> tiDevice = new ArrayList<>();
        MongoDatabase database = mongoDBManagement.conecction();
        MongoCollection collection = database.getCollection("TIDevices");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                TIDevice tiDeviceClass = new TIDevice();
                tiDeviceClass.setId(jsonObject.get("ID").getAsInt());
                tiDeviceClass.setSerialNumber(jsonObject.get("Serial").getAsString());
                tiDeviceClass.setName(jsonObject.get("Name").getAsString());
                tiDeviceClass.setIdGym(jsonObject.get("ID gym").getAsInt());
                tiDeviceClass.setBrand(jsonObject.get("Brand").getAsString());
                tiDeviceClass.setManager(jsonObject.get("Manager").getAsString());
                tiDeviceClass.setType(jsonObject.get("Type").getAsString());
                tiDevice.add(tiDeviceClass);
            }
        } finally {
            cursor.close();
        }

        return tiDevice;
    }

    public static ArrayList<User> getUser() throws ParseException, IOException {
        MongoDBManagement mongoDBManagement = new MongoDBManagement();
        ArrayList<User> user = new ArrayList<>();
        MongoDatabase database = mongoDBManagement.conecction();
        MongoCollection collection = database.getCollection("users");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                User userClass = new User();
                userClass.setId(jsonObject.get("id").getAsString());
                userClass.setName(jsonObject.get("name").getAsString());
                userClass.setLastName(jsonObject.get("last name").getAsString());
                userClass.setEmail(jsonObject.get("email").getAsString());
                userClass.setType(jsonObject.get("type").getAsString());
                userClass.setGym(jsonObject.get("gym").getAsString());
                user.add(userClass);
            }
        } finally {
            cursor.close();
        }

        return user;
    }
       public static ArrayList<Machine> getMachine() throws ParseException, IOException {
        MongoDBManagement mongoDBManagement = new MongoDBManagement();
        ArrayList<Machine> machine = new ArrayList<>();
        MongoDatabase database = mongoDBManagement.conecction();
        MongoCollection collection = database.getCollection("machines");
        MongoCursor<Document> cursor = collection.find().iterator();
        try {
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Machine machineClass = new Machine();
                machineClass.setId(jsonObject.get("id").getAsInt());
                machineClass.setName(jsonObject.get("name").getAsString());
                machineClass.setGym(jsonObject.get("gym").getAsString());
                machineClass.setSerial(jsonObject.get("serial Number").getAsString());
                machineClass.setBrand(jsonObject.get("brand").getAsString());
                machineClass.setZone(jsonObject.get("zone").getAsString());
                machine.add(machineClass);
            }
        } finally {
            cursor.close();
        }

        return machine;
    }

}
