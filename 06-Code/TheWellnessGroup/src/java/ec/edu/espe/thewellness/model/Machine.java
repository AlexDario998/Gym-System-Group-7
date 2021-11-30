/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.thewellness.model;

/**
 *
 * @author cami_
 */
public class Machine {
    String name;
    int id;
    String gym;
    String serialNumber;
    String brand;
    String zone;

    public Machine(String name, int id, String gym, String serialNumber, String brand, String zone) {
        this.name = name;
        this.id = id;
        this.gym = gym;
        this.serialNumber = serialNumber;
        this.brand = brand;
        this.zone = zone;
    }
    
    public Machine(){
        
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGym() {
        return gym;
    }

    public void setGym(String gym) {
        this.gym = gym;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }
    
}
