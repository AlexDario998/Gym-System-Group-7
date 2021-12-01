package ec.edu.espe.thewellness.model;

/**
 *
 * @author Elkin Vera
 */
public class TIDevice extends Device{
    private String manager;
    public TIDevice() {
        
    }

    public TIDevice(int id, String serialNumber, String name, int idGym, String brand, String manager, String type) {
        super(id, serialNumber, name, idGym, brand, type);
        this.manager = manager;
    }

    /**
     * @return the manager
     */
    public String getManager() {
        return manager;
    }

    /**
     * @param manager the manager to set
     */
    public void setManager(String manager) {
        this.manager = manager;
    }
    
}
