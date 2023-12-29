package plateforme.bridge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import plateforme.bridge.Entity.File;

@Repository
public interface FileRepository extends JpaRepository<File,Long> {
}