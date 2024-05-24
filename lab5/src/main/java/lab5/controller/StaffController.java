package lab5.controller;

import lab5.entity.Staff;
import lab5.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;


@RestController
@RequestMapping("")
@CrossOrigin(origins = "*")
public class StaffController {

    @Autowired
    StaffRepository staffRepository;

    @GetMapping("/staffs")
    public List<Staff> getStaff() {
        return staffRepository.findAll();
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Staff postStaff(@RequestBody Staff staff) {
        return staffRepository.save(staff);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStaff(@PathVariable long id) {
        staffRepository.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public Staff putEntity( @PathVariable long id, @RequestBody Staff newStaff) {
        Staff updatedStaff = staffRepository.findById(id)
                .orElseThrow(()-> new ResourceAccessException("Not found Staff with id: "+id));
        updatedStaff.setFirstName(newStaff.getFirstName());
        updatedStaff.setLastName(newStaff.getLastName());
        updatedStaff.setAge(newStaff.getAge());
        updatedStaff.setPosition(newStaff.getPosition());
        updatedStaff.setSalary(newStaff.getSalary());
        updatedStaff.setImageUrl(newStaff.getImageUrl());
        updatedStaff.setPhoneNumber(newStaff.getPhoneNumber());
        updatedStaff.setEmail(newStaff.getEmail());
        updatedStaff.setHireDate(newStaff.getHireDate());
        return staffRepository.save(updatedStaff);

    }
}

