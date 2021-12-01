package ec.edu.espe.thewellness.model;

/**
 *
 * @author Elkin Vera
 */
public class Device {
    
    protected int id;
    protected String serialNumber;
    protected String name;
    protected int idGym;
    protected String brand;
    protected String manager;
    protected String type;

    public Device() {
        
    }

    public Device(int id, String serialNumber, String name, int idGym, String brand, String manager, String type) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.name = name;
        this.idGym = idGym;
        this.brand = brand;
        this.manager = manager;
        this.type = type;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getSerialNumber() {
        return serialNumber;
    }
    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public int getIdGym() {
        return idGym;
    }
    public void setIdGym(int idGym) {
        this.idGym = idGym;
    }

    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    public String getManager() {
        return manager;
    }
    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

}
