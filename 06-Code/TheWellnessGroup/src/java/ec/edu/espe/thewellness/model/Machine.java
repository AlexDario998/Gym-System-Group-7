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
public class Machine extends Device {
    String zone;
    
    public Machine(){
        
    }

    public Machine(String zone, int id, String serialNumber, String name, String brand, String type) {
        super(id, serialNumber, name, brand, type);
        this.zone = zone;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }
    
}