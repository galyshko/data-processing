package lab5.repository;

import lab5.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "staff", path = "staff")
@CrossOrigin(origins = "*")
public interface StaffRepository extends JpaRepository<Staff, Long> {
    List<Staff> findByLastName(@Param("lastName") String lastName);
}
