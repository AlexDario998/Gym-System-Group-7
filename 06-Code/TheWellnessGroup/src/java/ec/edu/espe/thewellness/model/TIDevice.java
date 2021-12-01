package ec.edu.espe.thewellness.model;

/**
 *
 * @author Elkin Vera
 */
public class TIDevice extends Device{

    public TIDevice() {
        
    }

    public TIDevice(int id, String serialNumber, String name, int idGym, String brand, String manager, String type) {
        super(id, serialNumber, name, idGym, brand, manager, type);
    }
    
}
