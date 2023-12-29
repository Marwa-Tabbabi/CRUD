package plateforme.bridge.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.bridge.Entity.File;
import plateforme.bridge.Repository.FileRepository;
@Service
public class FileServiceImpl {
    @Autowired
    private FileRepository fileRepository;

    public File addFile(File file){
        return fileRepository.save(file);
    }

}
