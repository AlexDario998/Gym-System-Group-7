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

    private int id;
    private String name;
    private String serial;
    private String brand;
    private String gym;
    private String zone;

    public Machine(int id, String name, String serial, String brand, String gym, String zone) {
        this.id = id;
        this.name = name;
        this.serial = serial;
        this.brand = brand;
        this.gym = gym;
        this.zone = zone;
    }

    public Machine() {
  
    }

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the serial
     */
    public String getSerial() {
        return serial;
    }

    /**
     * @param serial the serial to set
     */
    public void setSerial(String serial) {
        this.serial = serial;
    }

    /**
     * @return the brand
     */
    public String getBrand() {
        return brand;
    }

    /**
     * @param brand the brand to set
     */
    public void setBrand(String brand) {
        this.brand = brand;
    }

    /**
     * @return the gym
     */
    public String getGym() {
        return gym;
    }

    /**
     * @param gym the gym to set
     */
    public void setGym(String gym) {
        this.gym = gym;
    }

    /**
     * @return the zone
     */
    public String getZone() {
        return zone;
    }

    /**
     * @param zone the zone to set
     */
    public void setZone(String zone) {
        this.zone = zone;
    }

}
