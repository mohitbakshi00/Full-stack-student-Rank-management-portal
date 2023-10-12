package com.springrest.springrest.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {

    private int id;
    @Id
    private String name;
    private int score;
    private int pincode;
    private String address;
    private String city;
    private String country;
    private String ispassed;

    public Student(int id, int score, String city, String country, int pincode) {
        this.id = id;
        this.score = score;
        this.city = city;
        this.country = country;
        this.pincode = pincode;
    }

    public Student() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String isIspassed() {
        return ispassed;
    }

    public void setIspassed(String ispassed) {
        this.ispassed = ispassed;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ",name ='" + name+ '\'' +
                ",score='" + score + '\'' +
                ",address='"+ address +'\''+
                ",city='" + city + '\'' +
                ",country='" + country + '\'' +
                ",pincode='" + pincode + '\'' +
                ",ispassed" + ispassed +'\''+
                '}';
    }
}