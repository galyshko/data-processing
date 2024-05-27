package lab5.entity;

import lombok.Data;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "staff")
@Data
public class Staff {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @Column(name = "firstname")
    private String firstName;
    @Column(name = "lastname")
    private String lastName;
    @Column(name = "age")
    private int age;
    @Column(name = "position")
    private String position;
    @Column(name = "salary")
    private double salary;
    @Column(name = "imageurl")
    private String imageUrl;
    @Column(name = "phonenumber")
    private String phoneNumber;
    @Column(name = "email")
    private String email;
    @Column(name = "hiredate")
    private LocalDate hireDate;
}
