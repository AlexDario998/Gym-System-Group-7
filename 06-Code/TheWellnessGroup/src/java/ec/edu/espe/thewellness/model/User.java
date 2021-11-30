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
public class User {
     int id;
    String name;
    String lastName;
    String email;
    String type;
    String gym;

    public User(int id, String name, String lastName, String email, String type, String gym) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.gym = gym;
    }
    
    public User(){
        
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGym() {
        return gym;
    }

    public void setGym(String gym) {
        this.gym = gym;
    }
    
}
