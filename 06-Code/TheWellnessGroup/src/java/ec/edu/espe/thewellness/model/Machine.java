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

    public Machine(int id, String serialNumber, String name, int idGym, String brand, String manager, String type) {
        super(id, serialNumber, name, idGym, brand, manager, type);
    }

    
    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }
    
}